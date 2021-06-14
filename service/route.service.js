const createError = require('http-errors');
const routeDAO = require('../dao/route.dao');

module.exports = {
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await userDAO.getAll())
            } catch (error) {
                reject(error);
            }
        })    
    },
    getbyId(route) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeDAO.getById(route));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    insert(route) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await routeDAO.insert(route)
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    editById(route) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeDAO.editById(route));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    deleteById(route) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeDAO.deleteById(route));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    switchKeepById(route) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeDAO.switchKeepById(route));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
};