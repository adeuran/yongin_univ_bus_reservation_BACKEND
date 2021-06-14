const DTO = require('./DTO');

class BankDTO extends DTO {
    // variables
    #id;
    #name;
    #priority;

    // constructor
    constructor(id, name, priority) {
        super();
        this.#id = id;
        this.#name = name;
        this.#priority = priority;
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

    get priority() {
        return this.#priority;
    }
    set priority(priority) {
        this.#priority = priority;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            priority: this.priority,
        }
    }
}

module.exports = BankDTO;