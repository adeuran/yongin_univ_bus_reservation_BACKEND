export default class ScheduleDTO {
    #id;
    #date;
    #bus;
    #route;
    #state;

    constructor(id, date, bus, route, state=1) {
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
};
