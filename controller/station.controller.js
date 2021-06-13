const StationDTO = require('../dto/StationDTO');
const stationService = require('../service/station.service');

const stationController = {
    // 모든 정류장의 종류만 출력
    async getAll(req, res, next) {
        let result = await stationService.getAll();
        res.jsonp(result);
    },
    // 모든 정류장의 세부내용까지 출력
    async getAllWithDetail(req, res, next) {
        let result = await stationService.getAllWithDetail();
        res.jsonp(result);
    },
    // ID를 통해 버스를 찾음.
    async getById(req, res, next) {
        const station = new StationDTO(Number(req.params.id));
        const result = await stationService.getById(station);
        res.jsonp(result);
    },
    // 번호판을 통해 버스를 찾음.
    async getByName(req, res, next) {
        const station = new StationDTO();
        station.name = req.params.name;
        const result = await stationService.getByName(station);
        res.jsonp(result);
    },
}

module.exports = stationController;