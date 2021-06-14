const DTO = require('./DTO');
const BusTypeDTO = require('../dto/BusTypeDTO');

class BusDTO extends DTO {
    // variables
    #id;
    #plate;
    #state;
    #busType;

    // constructor
    constructor(id, plate, state, busType = new BusTypeDTO()) {
        super();
        this.#id = id;
        this.#plate = plate;
        this.#state = state;
        this.#busType = busType;
    }

    // getter setter
    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get plate() {
        return this.#plate;
    }
    set plate(plate) {
        this.#plate = plate;
    }

    get state() {
        return this.#state;
    }
    set state(state) {
        this.#state = state;
    }

    get busType() {
        return this.#busType;
    }
    set busType(busType) {
        this.#busType = busType;
    }

    toJSON() {
        return {
            id: this.id,
            plate: this.plate,
            state: this.state,
            busType:this.busType,
        }
    }
}

module.exports = BusDTO;