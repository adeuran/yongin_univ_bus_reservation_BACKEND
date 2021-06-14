const createError = require('http-errors');
const routeTransitDAO = require('../dao/transit.route.dao');

module.exports = {
    getByRouteId(transit) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeTransitDAO.getById(transit));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    insert(transit) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeTransitDAO.insert(transit));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    editById(transit) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeTransitDAO.editById(transit));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    deleteById(transit) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await routeTransitDAO.deleteById(transit));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
};