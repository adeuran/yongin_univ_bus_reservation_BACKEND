const ScheduleDTO = require('../dto/ScheduleDTO');
const scheduleService = require('../service/schedule.service');

module.exports = {
    async getAll(req, res, next) {
        let result;
        try {
            result = await scheduleService.getAll();
        } catch (error) {
            next(error)
        }
        res.jsonp(result);
    },
    async getById(req, res, next) {
        const schedule = new ScheduleDTO(Number(req.params.id));
        let result;
        try {
            result = await scheduleService.getById(schedule);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async getByDetail(req, res, next) {
        const schedule = new ScheduleDTO();
        schedule.date = req.params.date;
        schedule.route.id = req.params.routeid;
        schedule.route.type = req.param.routetype;
        let result;
        try {
            result = await scheduleService.getByDetail(schedule);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async insert(req, res, next) {
        const schedule = new ScheduleDTO();
        schedule.date = req.body.date;
        schedule.bus = req.body.bus;
        schedule.route.id = req.body.route.id;
        try {
            await scheduleService.insert(schedule);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async insertUsingRoute(req, res, next) {
        const schedule = new ScheduleDTO();
        schedule.route.id = req.body.route.id;
        schedule.bus.id = req.body.bus.id;
        const option = new Array();
        option.push(new Date(req.start_date));
        option.push(new Date(req.end_date));
        try {
            await scheduleService.insertUsingRoute(schedule, option);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async editById(req, res, next) {
        const schedule = new ScheduleDTO();
        schedule.id = req.body.id;
        schedule.date = req.body.date;
        schedule.bus.id = req.body.bus.id;
        try {
            await scheduleService.editById(schedule);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async switchStateById(req, res, next) {
        const schedule = new ScheduleDTO();
        schedule.id = req.params.id;
        try {
            await scheduleService.switchStateById(schedule);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    }
}