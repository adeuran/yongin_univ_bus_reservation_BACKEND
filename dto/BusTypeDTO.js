const DTO = require('./DTO');

class BusTypeDTO extends DTO {
    #id;
    #capacity;
    #title;
    
    constructor(id, capacity, title) {
        super();
        this.#id = id;
        this.#capacity = capacity;
        this.#title = title;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get capacity() {
        return this.#capacity;
    }
    set capacity(capacity) {
        this.#capacity = capacity;
    }

    get title() {
        return this.#title;
    }
    set title(title) {
        this.#title = title;
    }

    toJSON() {
        return {
            id: this.id,
            capacity: this.capacity,
            title:this.title,
        }
    }
}

module.exports = BusTypeDTO;