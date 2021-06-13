const bankDAO = require('../dao/bank.dao');

module.exports = {
    async getAll() {
        return await bankDAO.getAll();
    },
    async getById(bank) {
        return await bankDAO.getById(bank);
    }
};