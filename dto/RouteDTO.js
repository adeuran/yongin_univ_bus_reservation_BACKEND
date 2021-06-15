const DTO = require('./DTO');

class RouteDTO extends DTO {
    #id;
    #termDay;
    #price;
    #keep;
    #explain;
    #type;

    constructor(id, termDay, price, keep = 1, explain, type) {
        super();
        this.#id = id;
        this.#termDay = termDay;
        this.#price = price;
        this.#keep = keep;
        this.#explain = explain;
        this.#type = type;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get termDay() {
        return this.#termDay;
    }
    set termDay(termDay) {
        this.#termDay = termDay;
    }

    get price() {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
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

    get type() {
        return this.#type;
    }
    set type(type) {
        this.#type = type;
    }

    toJSON() {
        return {
            id: this.id,
            termDay: this.termDay,
            price: this.price,
            keep: this.keep,
            explain: this.explain,
            type: this.type,
        };
    }
};

module.exports = RouteDTO;