export default class RouteDTO {
    #id;
    #termState;
    #transit;
    #price;
    #keep;

    constructor(id, termState, transit, price, keep=1) {
        this.#id = id;
        this.#termState = termState;
        this.#transit = transit;
        this.#price = price;
        this.#keep = keep;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get termState() {
        return this.#termState;
    }
    set termState(termState) {
        this.#termState = termState;
    }

    get transit() {
        return this.#transit;
    }
    set transit(transit) {
        this.#transit = transit;
    }

    get price() {
        return this.#price;
    }
    set price(price) {
        this.#transit = transit;
    }

    get keep() {
        return this.#keep;
    }
    set keep(keep) {
        this.#keep = keep;
    }
};
