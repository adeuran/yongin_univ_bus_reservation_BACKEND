const DAO = require('./DAO');
const BankDTO = require('../dto/BankDTO');

const bankModel = {
    async getAll() {
        let response;
        try {
            const sql = `SELECT bank_id, bank_name FROM bank`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        const result = new Array();
        response[0].forEach((tuple) => {
            const dto = new BankDTO(tuple.bank_id, tuple.bank_name);
            result.push(dto);
        });
        return result;
    },
    async getById(bank) {
        let response;
        try {
            const sql = `SELECT bank_name FROM bank WHERE bank_id = ${bank.id} LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        bank.name = response[0][0].bank_name;
        return bank;
    }
}

module.exports = bankModel;