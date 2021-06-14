const DTO = require('./DTO');
const RouteDTO = require('./RouteDTO');
const StationDTO = require('./StationDTO');
class RouteTransitDTO extends DTO {
    #id;
    #route;
    #station;
    #time;

    constructor(id, route = new RouteDTO(), station = new StationDTO(), time) {
        super();
        this.#id = id;
        this.#route = route;
        this.#station = station;
        this.#time = time;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get route() {
        return this.#route;
    }
    set route(route) {
        this.#route = route;
    }

    get station() {
        return this.#station;
    }
    set station(station) {
        this.#station = station;
    }

    get time() {
        return this.#time;
    }
    set time(time) {
        this.#time = time;
    }

    toJSON() {
        return {
            id: this.id,
            route: this.route,
            station: this.station,
            time: this.time,
        };
    }
};

module.exports = RouteTransitDTO;
