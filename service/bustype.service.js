const busTypeDAO = require('../dao/bustype.dao');

module.exports = {
    async getAll() {
        return await busTypeDAO.getAll();
    },
    async getById(bustype) {
        return await busTypeDAO.getById(bustype);
    }
};