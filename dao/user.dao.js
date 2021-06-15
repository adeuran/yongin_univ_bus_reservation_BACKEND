const DAO = require('./DAO');
const UserDTO = require('../dto/UserDTO');

module.exports = {
    async getAll() {
        let response;
        try {
            const sql = `SELECT bank_id, bank_name FROM bank`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw err;
        }
        const result = new Array();
        response[0].forEach((tuple) => {
            const dto = new UserDTO(tuple.bank_id, tuple.bank_name);
            result.push(dto);
        });
        return result;
    },
    async getById(user) {
        let response;
        try {
            const sql = `SELECT user_identifier, user_password, user_name, user_email,
            user_phone, user_type, user_point, user_penalty, user_banned, user_state FROM user
            WHERE user_id = ${user.id} LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw new Error(err);
        }
        // identifier에 대한 계정이 없을 경우
        if (response[0].length == 0) return null;

        user.identifier = response[0][0].user_identifier;
        user.name = response[0][0].user_name;
        user.password = response[0][0].user_password;
        user.email = response[0][0].user_email;
        user.phone = response[0][0].user_phone;
        user.type = response[0][0].user_type;
        user.point = response[0][0].user_point;
        user.penalty = response[0][0].user_penalty;
        user.banned = response[0][0].user_banned;
        user.state = response[0][0].user_state;

        return user;
    },
    async getByIdentifier(user) {
        let response;
        try {
            const sql = `SELECT user_id, user_password, user_name, user_email,
            user_phone, user_type, user_point, user_penalty, user_banned, user_state FROM user
            WHERE user_identifier = '${user.identifier}' LIMIT 1`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw new Error(err);
        }
        // identifier에 대한 계정이 없을 경우
        if (response[0].length == 0) return null;

        user.id = response[0][0].user_id;
        user.name = response[0][0].user_name;
        user.password = response[0][0].user_password;
        user.email = response[0][0].user_email;
        user.phone = response[0][0].user_phone;
        user.type = response[0][0].user_type;
        user.point = response[0][0].user_point;
        user.penalty = response[0][0].user_penalty;
        user.banned = response[0][0].user_banned;
        user.state = response[0][0].user_state;

        return user;
    },
    async addPointById(user, price) {
        let response;
        try {
            const sql = `UPDATE user SET user_point = user_point + ${price} WHERE user_id = ${user.id}`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw new Error(err);
        }
        return response;
    },
    async minusPointById(user, price) {
        let response;
        try {
            const sql = `UPDATE user SET user_point = user_point - ${price} WHERE user_id = ${user.id}`;
            response = await DAO.sqlHandler(sql);
        } catch (err) {
            throw new Error(err);
        }
        return response;
    }
};