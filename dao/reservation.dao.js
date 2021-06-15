const DAO = require('./DAO');
const ReservationDTO = require('../dto/ReservationDTO');

module.exports = {
    getAll() {
        let response;
        return new Promise(async (resolve, reject) => {
            const sql = `SELECT r.reservation_id, r.user_id, r.reservation_time, r.reservation_seat, r.reservation_board, r.reservation_canceltime, s.schedule_id, s.schedule_date,
                b.bus_plate, ro.route_price, ro.route_explain, ro.route_type
                FROM reservation AS r
                LEFT JOIN schedule AS s ON r.schedule_id = s.schedule_id
                LEFT JOIN bus AS b ON b.bus_id = s.bus_id
                LEFT JOIN route AS ro ON ro.route_id = schedule_id;
                ORDER BY reservation_id DESC`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            const result = new Array();
            response[0].forEach((tuple) => {
                const dto = new ReservationDTO();
                dto.id = tuple.reservation_id;
                dto.time = new Date(tuple.reservation_time);
                dto.seat = tuple.reservation_seat;
                dto.board = tuple.reservation_board;
                dto.cancelTime = new Date(tuple.reservation_canceltime)
                dto.schedule.id = tuple.schedule_id;
                dto.schedule.date = new Date(tuple.schedule_date);
                dto.bus.id = tuple.bus_id;
                dto.bus.plate = tuple.bus_plate;
                dto.route.id = tuple.route_id;
                dto.route.price = tuple.route_price;
                dto.route.explain = tuple.route_explain;
                dto.route.type = tuple.route_type;
                dto.user.id = tuple.user_id
                result.push(dto);
            });
            resolve(result);
        });
    },
    getById(reservation) {
        let response;
        return new Promise(async (resolve, reject) => {
            const sql = `SELECT r.reservation_time, r.user_id, r.reservation_seat, r.reservation_board, r.reservation_canceltime, s.schedule_id,
             s.schedule_date, b.bus_id, b.bus_plate, ro.route_id, ro.route_price, ro.route_explain, ro.route_type FROM reservation AS r
             LEFT JOIN schedule AS s ON r.schedule_id = s.schedule_id LEFT JOIN bus AS b ON b.bus_id = s.bus_id
             LEFT JOIN route AS ro ON ro.route_id = schedule_id
             WHERE r.reservation_id = ${reservation.id}
             ORDER BY r.reservation_id DESC LIMIT 1`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            // identifier에 대한 계정이 없을 경우
            if (response[0].length == 0) resolve(null);
            dto.time = new Date(tuple.reservation_time);
            dto.seat = tuple.reservation_seat;
            dto.board = tuple.reservation_board;
            dto.cancelTime = new Date(tuple.reservation_canceltime)
            dto.schedule.id = tuple.schedule_id;
            dto.schedule.date = new Date(tuple.schedule_date);
            dto.bus.id = tuple.bus_id;
            dto.bus.plate = tuple.bus_plate;
            dto.route.id = tuple.route_id;
            dto.route.price = tuple.route_price;
            dto.route.explain = tuple.route_explain;
            dto.route.type = tuple.route_type;
            dto.user.id = tuple.user_id;
            resolve(schedule);
        });
    },
    getByUserId(reservation) {
        let response;
        return new Promise(async (resolve, reject) => {
            const sql = `SELECT r.reservation_id, r.reservation_time, r.reservation_seat, r.reservation_board, r.reservation_canceltime, s.schedule_id, s.schedule_date,
                b.bus_plate, ro.route_price, ro.route_explain, ro.route_type
                FROM reservation AS r
                LEFT JOIN schedule AS s ON r.schedule_id = s.schedule_id
                LEFT JOIN bus AS b ON b.bus_id = s.bus_id
                LEFT JOIN route AS ro ON ro.route_id = schedule_id;
             WHERE r.reservation_id = ${reservation.id}
             ORDER BY r.reservation_id DESC LIMIT 1`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            if (response[0].length == 0) resolve(null);
            dto.id = response[0][0].reservation_id;
            dto.time = new Date(tuple.reservation_time);
            dto.seat = response[0][0].reservation_seat;
            dto.board = response[0][0].reservation_board;
            dto.cancelTime = new Date(response[0][0].reservation_canceltime)
            dto.schedule.id = response[0][0].schedule_id;
            dto.schedule.date = new Date(response[0][0].schedule_date);
            dto.bus.id = response[0][0].bus_id;
            dto.bus.plate = response[0][0].bus_plate;
            dto.route.id = response[0][0].route_id;
            dto.route.price = response[0][0].route_price;
            dto.route.explain = response[0][0].route_explain;
            dto.route.type = response[0][0].route_type;
            resolve(schedule);
        });
    },
    insert(reservation) {
        return new Promise(async (resolve, reject) => {
            const sql = `INSERT INTO reservation (schedule_id, user_id, reservation_time, reservation_seat) 
            VALUE (${reservation.schedule.id},${reservation.user.id},${reservation.time},${reservation.seat})`;
            try {
                await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    },
    cancel(reservation) {
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE reservation SET reservation_canceltime = NOW() WHERE reservation_id = ${reservation.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error)
            }
            resolve();
        });
    },
    board(reservation) {
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE reservation SET reservation_board = 1, WHERE reservation_id = ${reservation.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    },
    forceCancel(reservation) {
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE reservation SET reservation_canceltime = NOW() WHERE reservation_id = ${reservation.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error)
            }
            resolve();
        });
    },
    async unboard(reservation) {
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE reservation SET reservation_board = 0 WHERE reservation_id = ${reservation.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error)
            }
            resolve();
        });
    },
        
};