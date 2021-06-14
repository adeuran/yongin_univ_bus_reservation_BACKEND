const DAO = require('./DAO');
const ScheduleDTO = require('../dto/ScheduleDTO');

module.exports = {
    async getAll() {
        let response;
        return new Promise((resolve, reject) => {
            const sql = `SELECT s.schedule_id, s.schedule_date, s.bus_id, s.route_id, s.schedule_state, 
            b.bus_plate, b.bus_state, bt.bustype_capacity, bt.bustype_title FROM schedule AS s 
            LEFT JOIN bus AS b ON b.bus_id = s.bus_id 
            LEFT JOIN bustype AS bt ON b.bustype_id = bt.bustype_id`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            const result = new Array();
            response[0].forEach((tuple) => {
                const dto = new ScheduleDTO();
                dto.id = tuple.schedule_id;
                dto.date = new Date(tuple.schedule_date);
                dto.route.id = tuple.route_id;
                dto.state = tuple.schedule_state;
                dto.bus.id = tuple.bus_id;
                dto.bus.plate = tuple.bus_plate;
                dto.bus.state = tuple.bus.state;
                dto.bus.busType.id = tuple.bustype_id;
                dto.bus.busType.capacity = tuple.bustype_capacity;
                dto.bus.busType.title = tuple.bustype.title
                result.push(dto);
            });
            resolve(result);
        });
    },
    async getById(schedule) {
        let response;
        return new Promise((resolve, reject) => {
            const sql = `SELECT s.schedule_id, s.schedule_date, s.bus_id, s.route_id, s.schedule_state, 
            b.bus_plate, b.bus_state, bt.bustype_capacity, bt.bustype_title FROM schedule AS s 
            LEFT JOIN bus AS b ON b.bus_id = s.bus_id 
            LEFT JOIN bustype AS bt ON b.bustype_id = bt.bustype_id
            WHERE s.schedule_id = ${schedule.id} LIMIT 1`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            // identifier에 대한 계정이 없을 경우
            if (response[0].length == 0) resolve(null);
            schedule.date = new Date(tuple.schedule_date);
            schedule.route.id = response[0][0].route_id;
            schedule.state = response[0][0].schedule_state;
            schedule.bus.id = response[0][0].bus_id;
            schedule.bus.plate = response[0][0].bus_plate;
            schedule.bus.state = response[0][0].bus.state;
            schedule.bus.busType.id = response[0][0].bustype_id;
            schedule.bus.busType.capacity = response[0][0].bustype_capacity;
            schedule.bus.busType.title = response[0][0].bustype.title
            resolve(schedule);
        });
    },
    async insert(schedule) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO schedule (schedule_date, bus_id, route_id) 
            VALUE (${schedule.date},${schedule.bus.id},${schedule.route.id})`;
            try {
                await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    },
    async insertUsingRoute(scheduleArray) {
        return new Promise((resolve, reject) => {
            scheduleArray.forEach((schedule) => {
                const sql = `INSERT INTO schedule (schedule_date, bus_id, route_id) 
                VALUE (${schedule.date},${schedule.bus.id},${schedule.route.id})`;
            
                try {
                    await DAO.sqlHandler(sql);
                } catch (error) {
                    reject(error);
                }
            });
            resolve();
        });
    },
    async editById(schedule) {
        return new Promise((resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE schedule SET schedule_date = ${schedule.date}, bus_id = ${schedule.bus.id} WHERE schedule_id = ${schedule.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error)
            }
            resolve();
        });
    },
    async switchStateById(schedule) {
        return new Promise((resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE schedule SET schedule_state = CASE WHEN schedule_state = 0 THEN 1 ELSE 0 WHERE schedule_id =${schedule.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    }
        
};