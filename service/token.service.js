const tokenDAO = require('../dao/token.dao');

module.exports = {
    /* SELECT */
    getById(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await resolve(tokenDAO.getById(token));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    getIdByToken(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await tokenDAO.getIdByToken(token));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    /* INSERT */
    insert(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await tokenDAO.insert(token);
                    resolve()
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    /* DELETE */
    deleteById(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await tokenDAO.deleteById(token);
                    resolve()
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    deleteByUserId(user){
        return new Promise(
            async (resolve, reject) => {
                try {
                    await tokenDAO.deleteByUserId(user);
                    resolve()
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    deleteByToken(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await tokenDAO.deleteByToken(token);
                    resolve()
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
}