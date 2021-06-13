const busDAO = require('../dao/bus.dao');

module.exports = {
    async getAll() {
        return await busDAO.getAll();
    },
    async getById(bus) {
        return await busDAO.getById(bus);
    },
    async getByPlate(bus) {
        return await busDAO.getByPlate(bus);
    },
    async getByBusTypeId(bus) {
        return await busDAO.getByBusTypeId(bus);
    },
};