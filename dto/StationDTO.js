const DTO = require('./DTO');

class StationDTO extends DTO {
    // variables
    #id;
    #name;
    #explain;
    #position;
    #image;

    //constructor
    constructor(id, name, explain, position, image) {
        super();
        this.#id = id;
        this.#name = name;
        this.#explain = explain;
        this.#position = position;
        this.#image = image;
    }

    //getter setter
    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    get explain() {
        return this.#explain;
    }
    set explain(explain) {
        this.#explain = explain;
    }

    get position() {
        return this.#position;
    }
    set position(position) {
        this.#position = position;
    }

    get image() {
        return this.#image;
    }
    set image(image) {
        this.#image = image;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            explain: this.explain,
            position: this.position,
            image: this.image,
        }
    }
};

module.exports = StationDTO;