const BankDTO = require('../dto/BankDTO');
const bankService = require('../service/bank.service');


module.exports = {
    // 모든 은행의 ID와 Name 출력
    async getAll(req, res, next) {
        let result = await bankService.getAll();
        res.jsonp(result);
    },
    // ID를 통해 NAME을 찾음.
    async getById(req, res, next) {
        const bank = new BankDTO(Number(req.params.id));
        const result = await bankService.getById(bank);
        res.jsonp(result);
    }
}