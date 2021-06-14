const DTO = require("./DTO");
const AccountDTO = require("../dto/AccountDTO");
const UserDTO = require("../dto/UserDTO");

class ExchangeDTO extends DTO{
    #id;
    #account;
    #user;
    #time;
    #price;
    #type;
    #state;

    constructor(id, account = new AccountDTO(), user = new UserDTO(), time, price, type, state) {
        super();
        this.#id = id;
        this.#account = account;
        this.#user = user;
        this.#time = time;
        this.#price = price;
        this.#type = type;
        this.#state = state;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get account() {
        return this.#account;
    }
    set account(account) {
        this.#account = account;
    }

    get user() {
        return this.#user;
    }
    set user(user) {
        this.#user = user;
    }

    get time() {
        return this.#time;
    }
    set time(time) {
        this.#time = time;
    }

    get price() {
        return this.#price;
    }
    set price(price) {
        this.#price = price;
    }

    get type() {
        return this.#type;
    }
    set type(type) {
        this.#type = type;
    }

    get state() {
        return this.#state;
    }
    set state(state) {
        this.#state = state;
    }

    toJSON() {
        return {
            id: this.id,
            account: this.account,
            user: this.user,
            time: this.time,
            price: this.price,
            type: this.type,
            state: this.state,
        };
    }
};

module.exports = ExchangeDTO;