const DAO = require('./DAO');
const StationDTO = require('../dto/StationDTO');

const stationDAO = {
    async getAll() {
        let response;
        try {
            const sql = `SELECT station_id, station_name FROM station`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        const result = new Array();
        response[0].forEach((tuple) => {
            const dto = new StationDTO(tuple.station_id, tuple.station_name);
            result.push(dto);
        });
        return result;
    },
    async getAllWithDetail() {
        let response;
        try {
            const sql = `SELECT station_id, station_name, station_explain, station_position, station_image FROM station`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        const result = new Array();
        response[0].forEach((tuple) => {
            const dto = new StationDTO(tuple.station_id, tuple.station_name, tuple.station_explain, tuple.station_position, tuple.station_image);
            result.push(dto);
        });
        return result;
    },
    async getById(station) {
        let response;
        try {
            const sql = `SELECT station_name, station_explain, station_position, station_image FROM station 
            WHERE station_id = ${station.id} LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        station.name = response[0][0].station_name;
        station.explain = response[0][0].station_explain;
        station.position = response[0][0].station_position;
        station.image = response[0][0].station_image;
        return station;
    },
    async getByName(station) {
        let response;
        try {
            const sql = `SELECT station_id, station_explain, station_position, station_image FROM station 
            WHERE station_name = '${station.name}' LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        station.id = response[0][0].station_id;
        station.explain = response[0][0].station_explain;
        station.position = response[0][0].station_position;
        station.image = response[0][0].station_image;

        return station;
    },
}

module.exports = stationDAO;