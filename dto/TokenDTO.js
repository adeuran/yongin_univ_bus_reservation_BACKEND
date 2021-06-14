const DTO = require('./DTO');
const UserDTO = require('../dto/UserDTO');
class TokenDTO extends DTO {
    // variables
    #id;
    #user;
    #token;
    #issued;

    //constructor
    constructor(id, user = new UserDTO(), token, issued) {
        super();
        this.#id = id;
        this.#user = user;
        this.#token = token;
        this.#issued = issued;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get user() {
        return this.#user;
    }
    set user(user) {
        this.#user = user;
    }

    get token() {
        return this.#token;
    }
    set token(token) {
        this.#token = token;
    }

    get issued() {
        return this.#issued;
    }
    set issued(issued) {
        this.#issued = issued;
    }

     toJSON() {
         return {
             id: this.id,
             user: this.user,
             token: this.token,
             issued: this.issued,
         };
    }

};

module.exports = TokenDTO;