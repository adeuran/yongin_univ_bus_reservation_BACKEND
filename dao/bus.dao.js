const DAO = require('./DAO');
const BusDTO = require('../dto/BusDTO');
const BusTypeDTO = require('../dto/BusTypeDTO');

const busDAO = {
    async getAll() {
        let response;
        try {
            const sql = `SELECT b.bus_id, b.bus_plate, b.bus_state, bt.bustype_id, bt.bustype_capacity, bt.bustype_title
            FROM bus AS b JOIN bustype AS bt ON b.bustype_id = bt.bustype_id`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        const result = new Array();
        response[0].forEach((tuple) => {
            const dto = new BusDTO(tuple.bus_id, tuple.bus_plate, tuple.bus_state,
                new BusTypeDTO(tuple.bustype_id, tuple.bustype_capacity, tuple.bustype_title));
            result.push(dto);
        });
        return result;
    },
    async getById(bus) {
        let response;
        try {
            const sql = `SELECT b.bus_plate, b.bus_state, bt.bustype_id, bt.bustype_capacity, bt.bustype_title
            FROM bus AS b JOIN bustype AS bt ON b.bustype_id = bt.bustype_id
            WHERE b.bus_id = ${bus.id} LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        bus.plate = response[0][0].bus_plate;
        bus.state = response[0][0].bus_state;
        bus.busType = new BusTypeDTO(response[0][0].bustype_id, response[0][0].bustype_capacity, response[0][0].bustype_title);
        return bus;
    },
    async getByPlate(bus) {
        let response;
        try {
            const sql = `SELECT b.bus_id, b.bus_state, bt.bustype_id, bt.bustype_capacity, bt.bustype_title
            FROM bus AS b JOIN bustype AS bt ON b.bustype_id = bt.bustype_id
            WHERE b.bus_plate = '${bus.plate}' LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        bus.id = response[0][0].bus_id;
        bus.state = response[0][0].bus_state;
        bus.busType = new BusTypeDTO(response[0][0].bustype_id, response[0][0].bustype_capacity, response[0][0].bustype_title);
        return bus;
    },
    async getByBusTypeId(bus) {
        let response;
        try {
            const sql = `SELECT b.bus_id, b.bus_plate, b.bus_state, bt.bustype_capacity, bt.bustype_title
            FROM bus AS b JOIN bustype AS bt ON b.bustype_id = bt.bustype_id
            WHERE bt.bustype_id = ${bus.busType.id} LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        bus.id = response[0][0].bus_id;
        bus.plate = response[0][0].bus_plate;
        bus.state = response[0][0].bus_state;
        bus.busType.capacity = response[0][0].bustype_capacity;
        bus.busType.title = response[0][0].bustype_title;
        return bus;
    },
}

module.exports = busDAO;