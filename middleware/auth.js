const tokenManager = require('../util/tokenManager');
const tokenService = require('../service/token.service');
const userService = require('../service/user.service');
const UserDTO = require('../dto/UserDTO');
const { issueRefreshToken } = require('../util/tokenManager');
const TokenDTO = require('../dto/TokenDTO');
const errorToServer = require("@/util/errorToServer.js")

const POSITION = "middleware/auth"

module.exports = {
    async checkToken(req, res, next) {
        // read token from header
        let accessToken = new TokenDTO();
        accessToken.token = req.headers['x-access-token'];
        let refreshToken = new TokenDTO();
        refreshToken.token = req.headers['x-refresh-token'];
        let decodedAccessToken, decodedRefreshToken;
        
        // Access 토큰 유효상태 확인
        if (accessToken.token) {
            try {
                decodedAccessToken = await tokenManager.verifyAccessToken(accessToken);
            } catch (error) {
                const message = "Access Token Decoding Failed";
                errorToServer.error(error, message, POSITION, 1);    // show error message to console
                accessToken.token = null;   // 토큰이 이상하면 없는 것으로 취급
                
            }
        }
        if (refreshToken.token) {   // Refresh Token이 존재할 경우
            try {
                decodedRefreshToken = await tokenManager.verifyRefreshToken(refreshToken); // 토큰의 유효성 확인
            } catch (error) {   // 토큰 유효성을 통과하지 못하거나 DB에 접속할 수 없으면
                const message = "Refresh Token Decoding Failed";
                errorToServer.error(error, message, POSITION, 1);    // show error message to console
                refreshToken.token = null;  // 토큰을 없는 것으로 취급
            }

            try {
                const tokenObj = await tokenService.getIdByToken(refreshToken); // 유효한 토큰이면 DB에서 사용이 정지된 토큰인지 확인
                if (!tokenObj) {// DB에서 정지된 토큰이면 인증 거부
                    const message = "Banned Refresh Token From Database";
                    errorToServer.error(error, message, POSITION, 1);    // show error message to console
                    refreshToken.token = null;   
                    accessToken.token = null;
                } else {    // 유효한 토큰이면 DB의 내용으로 RefreshToken 데이터 갱신
                    refreshToken= tokenObj
                }
            } catch (error) {   // DB 처리과정 중 오류 발생시
                const message = "Database Error Occurrence";
                errorToServer.error(error, message, POSITION, 3);    // show error message to console
                refreshToken.token = null;  // 토큰을 없는 것으로 취급
            }
        }
        // when token does not exist
        if (!(accessToken.token || refreshToken.token)) {
            // throw http 401 error
            res.sendStatus(401);
        }
        // when access token expired and has verified refresh token
        else if (!accessToken.token && refreshToken.token) {
            // get user data from token
            accessToken.user.id = decodedRefreshToken.user_id;  // set user id using refresh token
            try {
                accessToken.user = await userService.getById(accessToken.user);    // get user data from db
            } catch (error) {
                // Server Error Occurrence
                const message = "Database Error Occurrence";
                errorToServer.error(error, message, POSITION, 3);    // show error message to console
                res.sendStatus(500);
            }
            try {
                accessToken.token = await tokenManager.issueAccessToken(accessToken.user); // re-issue access token
            } catch (error) {
                // Server Error Occurrence
                const message = "Access Token Issue Failed";
                errorToServer.error(error, message, POSITION, 3);    // show error message to console
                res.sendStatus(500);
            }
            res.header('accessToken', accessToken.token);   // 갱신된 access token을 헤더에 함께 보내줌
        }
        // refreshToken이 만료 이주전이면 갱신/재발급
        else if (decodedRefreshToken.exp - Date.now()/1000<60*60*24*15) {
            refreshToken.user = new UserDTO(decodedAccessToken.user_id);
            try {
                await tokenService.deleteByToken(refreshToken); // 기존 refreshToken 무효화
                refreshToken.token = await issueRefreshToken(refreshToken.user);   // re-issue refresh token
                await tokenService.insert(refreshToken); // register new refreshToken
            } catch (error) {
                // Server Error Occurrence
                const message = "Error Occurrence When Refresh Token Re-Issue";
                errorToServer.error(error, message, POSITION, 3);    // show error message to console
                res.sendStatus(500);
            }
            res.header('refreshToken', refreshToken.token); // 갱신된 refresh token을 헤더에 함께 보내줌
        }
        // 모든 작업이 정상적으로 이뤄졌다면 토큰 객체 생성 및 설정
        const userObj = new UserDTO(decodedAccessToken.user_id, decodedAccessToken.user_identifier, null, decodedAccessToken.user_name);
        userObj.type = decodedAccessToken.user_type;

        req.user = userObj; // 토큰에서 얻은 사용자 정보를 req에 실어 보냄.
        next(); // 미들웨어 통과
    }
}