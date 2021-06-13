export default class ReservationDTO {
    #id;
    #schedule;
    #user;
    #time;
    #seat;
    #board;
    #cancelTime;

    constructor(id, schedule, user, time, seat,
        board=0, cancelTime) {
        this.#id = id;
        this.#schedule = schedule;
        this.#user = user;
        this.#time = time;
        this.#seat = seat;
        this.#board = board;
        this.#cancelTime = cancelTime;
    }

    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }

    get schedule() {
        return this.#schedule;
    }
    set schedule(schedule) {
        this.#schedule = schedule;
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

    get seat() {
        return this.#seat;
    }
    set seat(seat) {
        this.#seat = seat;
    }

    get board() {
        return this.#board;
    }
    set board(board) {
        this.#board = board;
    }

    get cancelTime() {
        return this.#cancelTime;
    }
    set cancelTime(cancelTime) {
        this.#cancelTime = cancelTime;
    }
};
