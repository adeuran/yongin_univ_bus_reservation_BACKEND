const BusTypeDTO = require('../dto/BusTypeDTO');
const busTypeService = require('../service/bustype.service');


module.exports = {
    // 모든 버스타입 조회
    async getAll(req, res, next) {
        let result = await busTypeService.getAll();
        res.jsonp(result);
    },
    // ID를 통해 버스타입 조회.
    async getById(req, res, next) {
        const bustype = new BusTypeDTO(Number(req.params.id));
        const result = await busTypeService.getById(bustype);
        res.jsonp(result);
    }
}