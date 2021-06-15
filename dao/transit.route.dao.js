const DAO = require('./DAO');
const RouteTransitDTO = require('../dto/RouteTransitDTO');

module.exports = {
    getByRouteId(transit) {
        let response;
        return new Promise(async (resolve, reject) => {
            const sql = `SELECT rt.transit_id, rt.station_id, rt.transit_time, s.station_name, s.station_explain, 
            s.station_position, s.station_image FROM route_transit AS rt LEFT JOIN station AS s ON rt.station_id = s.station_id
            WHERE route_id = ${transit.route.id}`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            const result = new Array();
            response[0].forEach((tuple) => {
                const dto = new RouteTransitDTO();
                dto.id = tuple.transit_id;
                dto.time = tuple.transit_time;
                dto.station.id = tuple.station_id;
                dt.station.name = tuple.station_name;
                dt.station.explain = tuple.station_explain;
                dt.station.position = tuple.station_position;
                dto.station.image = tuple.station.image;
                result.push(dto);
            });
            resolve(result);
        });
    },
    insert(transit) {
        return new Promise(async (resolve, reject) => {
            const sql = `INSERT INTO route_transit (route_id, station_id, transit_time) 
            VALUE (${transit.route.id}, ${transit.station.id}, '${transit.time}')`;
            try {
            await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    },
    editById(transit) {
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE route_transit SET station_id = ${transit.station.id}, transit_time = '${transit.time}' 
                WHERE transit_id = ${transit.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error)
            }
            resolve();
        });
    },
    deleteById(transit) {
        return new Promise(async (resolve, reject) => {
            let response;
        try {
            const sql = `DELETE FROM route_transit WHERE transit_id=${transit.id}`;
            response = await DAO.sqlHandler(sql);
        } catch (error) {
            reject(error)
        }
        resolve();
        });
    },
};