const createError = require('http-errors');
const tokenManager = require('../util/tokenManager');
const tokenService = require('../service/token.service');
const userDAO = require('../dao/user.dao');

module.exports = {
    async getAll() {
        return await userDAO.getAll();
    },
    getById(user) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await userDAO.getById(user))
            } catch (error) {
                reject(error);
            }
        })    
    },
    login(user) {
        return new Promise(
            async (resolve, reject) => {
                const input_pw = user.password; // input password
                try {
                    user = await userDAO.getByIdentifier(user); // get user data
                } catch (error) {
                    reject(error);
                }
                if (!user) reject(new createError.Unauthorized());  // 해당 identifier을 갖는 user가 없음.
                else if (input_pw != user.password) reject(new createError.Unauthorized());  // wrong password.
                let tokens;
                try {
                    tokens = await tokenManager.issueAll(user);  // issue new token
                    await tokenService.insert(tokens.refreshToken);    // insert to db
                } catch (error) {
                    reject(error);
                }
                // 결과는 User 데이터를 숨겨서 줌
                resolve({
                    refreshToken: tokens.refreshToken.token,
                    accessToken: tokens.accessToken.token,
                });
                
            }
        );
    },
    async logout(refreshToken) {
        return new Promise(
            async (resolve, reject) => {
                // refreshToken이 있다면
                if (refreshToken) {
                    await tokenService.deleteByToken(refreshToken);    // 토큰 폐기
                    // 오류처리 안함. 폐기하려는데 오류나도 어쩔 수 없음.
                }
                resolve();
            }
        );
        
    },
    async addPointById(user, price) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    user = await this.getById(user);
                    resolve(await tokenService.addPointById(user, price));
                } catch (error) {
                    reject(error);
                }
            }
        );
        
    },
    async minusPointById(user, price) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    user = await this.getById(user);
                    if (user.point - price < 0) reject("Not enough point");
                    else resolve(await tokenService.minusPointById(user, price));
                } catch (error) {
                    reject(error);
                }
            }
        );
        
    },
};