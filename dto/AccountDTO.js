export default class AccountDTO {
    // variables
    #id;
    #accountNumber;
    #bank;
    #name;
    #expire;
    #type;

    //constructor
    constructor(id, accountNumber, bank, name, expire, type) {
        this.#id = id;
        this.#accountNumber = accountNumber;
        this.#bank = bank;
        this.#name = name;
        this.#expire = expire;
        this.#type = type;
    }

    // getter setter
    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get accountNumber() {
        return this.#accountNumber;
    }
    set accountNumber(accountNumber) {
        this.#accountNumber = accountNumber;
    }

    get bank() {
        return this.#bank;
    }
    set bank(bank) {
        this.#bank = bank;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    get expire() {
        return this.#expire;
    }
    set expire(expire) {
        this.#expire = expire;
    }

    get type() {
        return this.#type;
    }
}