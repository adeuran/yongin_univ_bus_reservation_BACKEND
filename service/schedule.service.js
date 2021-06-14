const createError = require('http-errors');
const ScheduleDTO = require('../dto/ScheduleDTO');
const routeDAO = require('../dao/route.dao');
const scheduleDAO = require('../dao/schedule.dao');

module.exports = {
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await scheduleDAO.getAll())
            } catch (error) {
                reject(error);
            }
        })    
    },
    getById(schedule) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await scheduleDAO.getById(schedule));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    getByDetail(schedule) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await scheduleDAO.getByDetail(schedule));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
    insert(schedule) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await scheduleDAO.insert(schedule);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    insertUsingRoute(schedule, option) {
        return new Promise(
            async (resolve, reject) => {
                const startDate = option[0];
                const endDate = option[1];
                let day = startDate.getDay();   // start day 요일
                const repeat = new Array(); // route를 이용해 schedule들 생성후 저장할 공간
                try {
                    schedule.route = routeDAO.getById(schedule.route);
                    await scheduleDAO.insert(schedule);
                } catch (error) {
                    reject(error);
                }
                // 시작 요일에서 +7일의 요일을 검사 후 startDate부터 endDate까지 스케줄 객체 생성.
                for (let cnt = 0; cnt < 7; cnt++){
                    if (route.termDay.checker()[(day + cnt) % 7]()) { // 시작일이 route에서 배차를 운영하는 요일인지 확인
                        // 배차를 운영하는 요일이면
                        let currentDate = new Date(startDate);
                        // 해당 요일을 반복해서 객체 만듬.
                        currentDate.setDate(currentDate.getDate()+cnt);
                        for (; currentDate < endDate; currentDate.setDate(currentDate.getDate() + 7)) {
                            let newSchedule = new ScheduleDTO();
                            newSchedule.date = currentDate;
                            newSchedule.bus.id = schedule.bus.id;
                            newSchedule.route.id = schedule.route.id;
                            repeat.push(newSchedule);
                        }
                    }
                }
                try {
                    await scheduleDAO.insertUsingRoute(repeat);
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    editById(schedule) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    await scheduleDAO.editById(schedule)
                } catch (error) {
                    reject(error);
                }
                resolve();
            }
        );
    },
    switchStateById(schedule) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    resolve(await scheduleDAO.switchStateById(schedule));
                } catch (error) {
                    reject(error);
                }
            }
        );
    },
};