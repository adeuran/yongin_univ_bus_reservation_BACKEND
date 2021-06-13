const stationDAO = require('../dao/station.dao');

module.exports = {
    async getAll() {
        return await stationDAO.getAll();
    },
    async getAllWithDetail() {
        return await stationDAO.getAllWithDetail();
    },
    async getById(station) {
        return await stationDAO.getById(station);
    },
    async getByName(station) {
        return await stationDAO.getByName(station);
    },
};