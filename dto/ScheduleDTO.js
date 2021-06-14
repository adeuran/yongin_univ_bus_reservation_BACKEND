const DTO = require("./DTO");
const RouteDTO = require("../dto/RouteDTO");
const BusType = require("../dto/BusTypeDTO");
class ScheduleDTO extends DTO {
    #id;
    #date;
    #bus;
    #route;
    #state;

    constructor(id, date, bus = new BusType(), route = new RouteDTO(), state = 1) {
        super();
        this.#id = id;
        this.#date = date;
        this.#bus = bus;
        this.#route = route;
        this.#state = state;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get date() {
        return this.#date;
    }
    set date(date) {
        this.#date = date;
    }

    get bus() {
        return this.#bus;
    }
    set bus(bus) {
        this.#bus = bus;
    }

    get route() {
        return this.#route;
    }
    set route(route) {
        this.#route = route;
    }

    get state() {
        return this.#state;
    }
    set state(state) {
        this.#state = state;
    }

    toJSON() {
        return {
            id: this.id,
            date: this.date,
            bus: this.bus,
            route: this.route,
            state: this.state,
        };
    }
};

module.exports = ScheduleDTO;