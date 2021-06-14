const DTO = require('./DTO');

class RouteDTO extends DTO {
    #id;
    #termState;
    #price;
    #keep;
    #explain;

    constructor(id, termState, price, keep = 1, explain) {
        super();
        this.#id = id;
        this.#termState = termState;
        this.#price = price;
        this.#keep = keep;
        this.#explain = explain;
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

    get explain() {
        return this.#explain;
    }
    set explain(explain) {
        this.#explain = explain;
    }

    toJSON() {
        return {
            id: this.id,
            termState: this.termState,
            price: this.price,
            keep: this.keep,
            explain: this.explain,
        };
    }
};

module.exports = RouteDTO;