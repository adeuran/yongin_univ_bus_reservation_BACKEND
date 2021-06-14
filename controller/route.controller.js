// SERVICE
const routeService = require('../service/route.service');
const transitRouteService = require('../service/transit.route.service');
// DTO
const RouteDTO = require('../dto/RouteDTO');
const RouteTransitDTO = require('../dto/RouteTransitDTO');
const StationDTO = require('../dto/StationDTO');

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
        route.term_state = req.body.term_state;
        route.price = req.body.price;
        route.keep = req.body.keep;
        route.explain = req.body.explain;
        let result;
        try {
            await routeService.insert(route);
        } catch (error) {
            next(err);
        }
        res.jsonp(result);
    },
    async editById(req, res, next) {
        const route = new RouteDTO();
        route.id = Number(req.body.id);
        route.term_state = req.body.term_state;
        route.price = req.body.price;
        route.keep = req.body.keep;
        route.explain = req.body.explain;
        let result;
        try {
            result = await routeService.editById(route);
        } catch (error) {
            
        }
        res.jsonp(result);
    },
    async deleteById(req, res, next) {
        const route = new RouteDTO(Number(req.params.id));
        let result;
        try {
            result = await routeService.deleteById(route);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async switchKeppById(req, res, next) {
         const route = new RouteDTO(Number(req.params.id));
        let result;
        try {
            result = await routeService.switchKeepById(route);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
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
            next(err);
        }
        res.jsonp(result);
    },
    async editById(req, res, next) {
        const transit = new RouteTransitDTO();
        transit.id = Number(req.body.id);
        transit.station.id = Number(req.body.station.id);
        transit.time = req.body.time;
        let result;
        try {
            result = await routeTransitService.editById(transit);
        } catch (error) {
            
        }
        res.jsonp(result);
    },
    async deleteById(req, res, next) {
        const transit = new RouteTransitDTO(Number(req.params.id));
        let result;
        try {
            result = await routeTransitService.deleteById(transit);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
};