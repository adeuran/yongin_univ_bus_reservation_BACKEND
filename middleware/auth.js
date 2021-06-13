const createError = require('http-errors');
const tokenManager = require('../util/tokenManager');
const tokenService = require('../service/token.service');
const userService = require('../service/user.service');
const UserDTO = require('../dto/UserDTO');
const { issueRefreshToken } = require('../util/tokenManager');
const TokenDTO = require('../dto/TokenDTO');

module.exports = {
    async checkToken(req, res, next) {
        // read token from header
        let accessToken = new TokenDTO();
        accessToken.user = new UserDTO();
        accessToken.token =  req.headers['x-access-token'];
        let refreshToken = new TokenDTO();
        refreshToken.token = req.headers['x-refresh-token'];

        let decodedAccessToken, decodedRefreshToken;
        
        // 토큰 유효상태 확인
        if (accessToken.token) {
            try {
                decodedAccessToken = await tokenManager.verifyAccessToken(accessToken.token);
            } catch (error) {
                accessToken.token = null;
            }
        }
        
        if (refreshToken.token) {
            try {
                decodedRefreshToken = await tokenManager.verifyRefreshToken(refreshToken); // 토큰의 유효성 확인
                // 유효한 토큰이면 사용이 정지된 토큰인지 확인
                const tokenObj = await tokenService.getIdByToken(refreshToken);
                if (!tokenObj) {
                    // 정지된 토큰이면 무효화
                    refreshToken.token = null;   
                    accessToken.token = null;
                } else {
                    refreshToken= tokenObj
                }
            } catch (error) {
                refreshToken.token = null;
                console.log(error)
            }
        }
        // token does not exist
        if (!(accessToken.token || refreshToken.token)) {
            // unauthorized user
            res.status(401);
            next(new createError.Unauthorized());
        }
        // access token expired
        else if (!accessToken.token && refreshToken.token) {
            // get user data from token
            accessToken.user.id = decodedRefreshToken.user_id;  // set user id
            try {
                accessToken.user = await userService.getById(accessToken.user);    // insert all data about user
                accessToken.token = await tokenManager.issueAccessToken(accessToken.user); // re-issue access token
            } catch (error) {
                res.status(500);
                next(error);
                console.log(error);
            }
            res.header('accessToken', accessToken.token);

        }
        // refreshToken이 만료 이주전이면 갱신/재발급
        else if (decodedRefreshToken.exp - Date.now()/1000<60*60*24*15) {
            refreshToken.user = new UserDTO(decodedAccessToken.user_id);
            try {
                await tokenService.deleteByToken(refreshToken); // 기존 refreshToken 무효화
                refreshToken.token = await issueRefreshToken(refreshToken.user);   // re-issue refresh token
                await tokenService.insert(refreshToken); // register new refreshToken
            } catch (error) {
                res.status(500);
                next(error);
                console.log(error);
            }
            res.header('refreshToken', refreshToken.token);
        }
        // 반환할 준비
        const tokenUser = new UserDTO(decodedAccessToken.user_id, decodedAccessToken.user_identifier, null, decodedAccessToken.user_name);
        tokenUser.type = decodedAccessToken.user_type;
        req.user = tokenUser;
        next();
    }
}