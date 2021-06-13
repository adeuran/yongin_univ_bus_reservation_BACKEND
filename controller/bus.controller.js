const BusDTO = require('../dto/BusDTO');
const BusTypeDTO = require('../dto/BusTypeDTO');
const busService = require('../service/bus.service');

const busController = {
    // 모든 버스의 ID와 Name 출력
    async getAll(req, res, next) {
        let result = await busService.getAll();
        res.jsonp(result);
    },
    // ID를 통해 버스를 찾음.
    async getById(req, res, next) {
        const bus = new BusDTO(Number(req.params.id));
        const result = await busService.getById(bus);
        res.jsonp(result);
    },
    // 번호판을 통해 버스를 찾음.
    async getByPlate(req, res, next) {
        const bus = new BusDTO();
        bus.plate = req.params.plate;
        const result = await busService.getByPlate(bus);
        res.jsonp(result);
    },
    // 버스타입 ID를 통해 버스를 찾음.
    async getByPlate(req, res, next) {
        const bus = new BusDTO();
        bus.busType = new BusTypeDTO(Number(req.params.bustype_id));
        const result = await busService.getByBusTypeId(bus);
        res.jsonp(result);
    },
}

module.exports = busController;