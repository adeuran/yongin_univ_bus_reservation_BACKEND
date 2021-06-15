// SERVICE
const reservationService = require('../service/reservation.service');
// DTO
const ReservationDTO = require('../dto/ReservationDTO');

module.exports = {
    async getAll(req, res, next) {
        let result;
        try {
            result = await reservationService.getAll();
        } catch (error) {
            next(error)
        }
        res.jsonp(result);
    },
    async getById(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.id = Number(req.params.id);
        let result;
        try {
            result = await reservationService.getById(reservation);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async getByUserId(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.user.id = Number(req.params.id);
        let result;
        try {
            result = await reservationService.getByUserId(reservation);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },
    async getByBusId(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.bus.id = Number(req.params.id);
        let result;
        try {
            result = await reservationService.getByBusId(reservation);
        } catch (error) {
            next(error);
        }
        res.jsonp(result);
    },

    async insert(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.schedule.id = req.body.schedule.id;
        reservation.user.id = req.body.user.id;
        reservation.time = req.body.time;
        reservation.seat = req.body.seat;
        try {
            await reservationService.insert(reservation);
        } catch (error) {
            next(error);
        }
        res.sendStatus(201);
    },

    async cancel(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.id = req.body.id;
        try {
            await reservationService.cancel(reservation);
        } catch (error) {
            next(error);
        }
        res.sendStatus(200);
    },
    async board(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.id = req.body.id;
        try {
            await reservationService.board(reservation);
        } catch (error) {
            next(error);
        }
        res.sendStatus(200);
    },
    async forceCancel(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.id = req.body.id;
        try {
            await reservationService.forceCancel(reservation);
        } catch (error) {
            next(error);
        }
        res.sendStatus(200);
    },
    async unboard(req, res, next) {
        const reservation = new ReservationDTO();
        reservation.id = req.body.id;
        try {
            await reservationService.unboard(reservation);
        } catch (error) {
            next(error);
        }
        res.sendStatus(200);
    },
};