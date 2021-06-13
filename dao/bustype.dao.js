const DAO = require('./DAO');
const BusTypeDTO = require('../dto/BusTypeDTO');

const busTypeModel = {
    async getAll() {
        let response;
        try {
            const sql = `SELECT bustype_id, bustype_capacity, bustype_title FROM bustype`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        const result = new Array();
        response[0].forEach((tuple) => {
            const dto = new BusTypeDTO(tuple.bustype_id, tuple.bustype_capacity, tuple.bustype_title);
            result.push(dto);
        });
        return result;
    },
    async getById(bustype) {
        let response;
        try {
            const sql = `SELECT bustype_id, bustype_capacity, bustype_title FROM bustype WHERE bustype_id = ${bustype.id} LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        bustype.capacity = response[0][0].bustype_capacity;
        bustype.title = response[0][0].bustype_title;
        return bustype;
    }
}

module.exports = busTypeModel;