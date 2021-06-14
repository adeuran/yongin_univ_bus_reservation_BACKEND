const DTO = require('./DTO');

class UserDTO extends DTO {
    // variables
    #id;
    #identifier;
    #password;
    #name;
    #email;
    #phone;
    #type;
    #point;
    #penalty;
    #banned;
    #state;

    //constructor
    constructor(id, identifier, password, name,
        email, phone, type="normal", point=0, penalty,
        banned, state = 'active') {
        super();
        this.#id = id;
        this.#identifier = identifier;
        this.#password = password;
        this.#name = name;
        this.#email = email;
        this.#phone = phone;
        this.#type = type;
        this.#point = point;
        this.#penalty = penalty;
        this.#banned = banned;
        this.#state = state;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get identifier() {
        return this.#identifier;
    }
    set identifier(identifier) {
        this.#identifier = identifier;
    }

    get password() {
        return this.#password;
    }
    set password(password) {
        this.#password = password;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
        
    get email() {
        return this.#email;
    }
    set email(email) {
        this.#email = email;
    }

    get phone() {
        return this.#phone;
    }
    set phone(phone) {
        this.#phone = phone;
    }

    get type() {
        return this.#type;
    }
    set type(type) {
        this.#type = type;
    }
        
    get point() {
        return this.#point;
    }
    set point(point) {
        this.#point = point;
    }
        
    get penalty() {
        return this.#penalty;
    }
    set penalty(penalty) {
        this.#penalty = penalty;
    }
        
    get banned() {
        return this.#banned;
    }
    set banned(banned) {
        this.#banned = banned;
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
             identifier: this.identifier,
             password: this.password,
             name: this.name,
             email: this.email,
             phone: this.phone,
             type: this.type,
             point: this.point,
             penalty: this.penalty,
             banned: this.banned,
             state: this.state,
         };
    }

};

module.exports = UserDTO;