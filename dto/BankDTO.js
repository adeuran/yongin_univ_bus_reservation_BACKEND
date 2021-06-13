const DTO = require('./DTO');

class BankDTO extends DTO {
    // variables
    #id;
    #name;

    // constructor
    constructor(id, name) {
        super();
        this.#id = id;
        this.#name = name;
    }
    
    // getter and setter
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

    toJSON() {
        return {
            id: this.id,
            name: this.name
        }
    }
}

module.exports = BankDTO;