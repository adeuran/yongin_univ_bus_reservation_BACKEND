// SERVICE
const routeService = require('../service/route.service');
const routeTransitService = require('../service/transit.route.service');
// DTO
const RouteDTO = require('../dto/RouteDTO');
const RouteTransitDTO = require('../dto/RouteTransitDTO');

module.exports = {
    // ROUTE
    async getAll(req, res, next) {
        let result;
        try {
            result = await routeService.getAll();
        } catch (error) {
            next(error)
        }
        res.jsonp(result);
    },
    async getById(req, res, next) {
        const route = new RouteDTO(Number(req.params.id));
        let result;
        try {
            result = await routeService.getById(route);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async insert(req, res, next) {
        const route = new RouteDTO();
        route.termDay = new DaysVO(req.body.term_day);
        route.price = req.body.price;
        route.keep = req.body.keep;
        route.explain = req.body.explain;
        try {
            await routeService.insert(route);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async editById(req, res, next) {
        const route = new RouteDTO();
        route.id = Number(req.body.id);
        route.termDay = new DaysVO(req.body.term_day);
        route.price = req.body.price;
        route.keep = req.body.keep;
        route.explain = req.body.explain;
        try {
            await routeService.editById(route);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async deleteById(req, res, next) {
        const route = new RouteDTO(Number(req.params.id));
        try {
            await routeService.deleteById(route);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async switchKeppById(req, res, next) {
         const route = new RouteDTO(Number(req.params.id));
        try {
            await routeService.switchKeepById(route);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    //TRANSIT_ROUTE
    async getTransitByRouteId(req, res, next) {
        const transit = new RouteTransitDTO();
        transit.route.id = Number(req.params.id);
        let result;
        try {
            result = await routeTransitService.getById(transit);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async insert(req, res, next) {
        const transit = new RouteTransitDTO();
        transit.route.id = Number(req.params.route.id);   // route_id
        transit.station.id = Number(req.params.station.id)  // station_id
        transit.time = req.params.time;
        let result;
        try {
            await routeTransitService.insert(transit);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async editById(req, res, next) {
        const transit = new RouteTransitDTO();
        transit.id = Number(req.body.id);
        transit.station.id = Number(req.body.station.id);
        transit.time = req.body.time;
        try {
            await routeTransitService.editById(transit);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
    async deleteById(req, res, next) {
        const transit = new RouteTransitDTO(Number(req.params.id));
        try {
            await routeTransitService.deleteById(transit);
        } catch (error) {
            next(error);
        }
        res.jsonp({ message: "success" });
    },
};