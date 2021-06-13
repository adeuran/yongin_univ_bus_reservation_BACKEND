const jwt = require('jsonwebtoken');
const accessTokenENV = require('../config/jwt_access.json');
const refreshTokenENV = require('../config/jwt_refresh.json');
const tokenDTO = require('../dto/TokenDTO');

module.exports = {
    // 전체 토큰 발행
    issueAll(user) {
        return new Promise(
            async (resolve, reject) => {
                let refreshToken;
                let accessToken;
                try {
                    refreshToken = await this.issueRefreshToken(user);
                    accessToken = await this.issueAccessToken(user);
                } catch (error) {
                    reject(error);
                }
                resolve({
                    refreshToken: new tokenDTO(null,user,refreshToken),
                    accessToken: new tokenDTO(null,user,accessToken),
                });
            }
        );
        
    },
    // RefreshToken만 발행
    issueRefreshToken(user) {
        const payload = { user_id: user.id };
        const option = refreshTokenENV.option;

        return new Promise(
            (resolve, reject) => jwt.sign(payload, refreshTokenENV.secretKey, option,
                (error, token) => {
                    if (error) reject(error);
                    else resolve(token);
                }
            )
        );
    },
    // AccessToken만 발행
    issueAccessToken(user) {
        const payload = {
            user_id: user.id,
            user_identifier: user.identifier,
            user_name: user.name,
            user_type: user.type,
        };
        const option = accessTokenENV.option;

        return new Promise(
            (resolve, reject) => jwt.sign(payload, accessTokenENV.secretKey, option,
                (error, token) => {
                    if (error) reject(error);
                    else resolve(token);
                }
            )
        );
    },
    // RefreshToken 유효성 검증
    verifyRefreshToken(refreshToken) {
        const secretKey = refreshTokenENV.secretKey;
        return new Promise((resolve, reject) =>
            jwt.verify(refreshToken.token, secretKey,
                (error, decoded) => {
                    if (error) reject(error);
                    else resolve(decoded);
                }
            )
        );
    },
    // AccessToken 유효성 검증
    verifyAccessToken(accessToken) {
        const secretKey = accessTokenENV.secretKey;
        return new Promise((resolve, reject) =>
            jwt.verify(accessToken.token, secretKey,
                (error, decoded) => {
                    if (error) reject(error);
                    else resolve(decoded);
                }
            )
        );
    },
}