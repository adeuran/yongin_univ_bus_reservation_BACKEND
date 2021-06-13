export default class RouteTransitDTO {
    #route;
    #station;
    #time;

    constructor(route, station, time) {
        this.#route = route;
        this.#station = station;
        this.#time = time;
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
};
