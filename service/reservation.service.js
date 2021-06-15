const createError = require('http-errors');
const reservationDAO = require('../dao/reservation.dao');

module.exports = {
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await reservationDAO.getAll())
            } catch (error) {
                reject(error);
            }
        })    
    },
    getById(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await reservationDAO.getById(reservation));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    getByUserId(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await reservationDAO.getByUserId(reservation));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    getByBusId(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await reservationDAO.getByUserId(reservation));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    insert(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await reservationDAO.insert(reservation);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    cancel(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await reservationDAO.cancel(reservation);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    board(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await reservationDAO.board(reservation);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    forceCancel(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await reservationDAO.forceCancel(reservation);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    unboard(reservation) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await reservationDAO.unboard(reservation);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
};