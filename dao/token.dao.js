const DAO = require('./DAO');
const TokenDTO = require('../dto/TokenDTO');
const UserDTO = require('../dto/UserDTO');

module.exports = {
    /* SELECT */
    getById(token) {
        return new Promise(
            async (resolve, reject) => {
                let response;
                try {
                    const sql = `SELECT (t.token_token, t.issued, u.user_id, u.user_identifier, u.user_password, u.user_name,
                        u.user_email, u.user_phone, u.user_type, u.user_point, u.user_penalty,
                        u.user_banned, u.user_state) FROM token AS t JOIN user AS u ON t.user_id = u.user_id
                        WHERE t.user_id = ${token.id} LIMIT 1`;
                    response = await DAO.sqlHandler(sql);
                } catch (err) {
                    reject(err);
                }
                // 해당 id의 토큰이 없다면
                if (response[0].length == 0) resolve(null);
                // 토큰을 불러왔다면 dto에 넣고 반환
                token.token = response[0][0].token_token;
                token.issued = response[0][0].token_issued;
                token.user = new UserDTO(response[0][0].user_id, response[0][0].user_identifier, response[0][0].user_password,
                    response[0][0].user_name, response[0][0].user_email, response[0][0].user_phone, response[0][0].user_type,
                    response[0][0].user_point, response[0][0].user_penalty, response[0][0].user_banned, response[0][0].user_state);
                resolve(token);
            }
        );
    },
    getIdByToken(token) {
        return new Promise(
            async (resolve, reject) => {
                let response;
                try {
                    const sql = `SELECT (token_id) FROM token WHERE token_token = '${token.token}' LIMIT 1`;
                    response = await DAO.sqlHandler(sql);
                } catch (err) {
                    reject(err);
                }
                // 해당 id의 토큰이 없다면
                if (response[0].length == 0) resolve(null);
                else {
                    // 토큰을 불러왔다면 dto에 넣고 반환
                    token.id = response[0][0].token_id;
                    resolve(token);
                }
            }
        );
    },
    /* INSERT */
    insert(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const sql = `INSERT INTO token (token_id,user_id,token_token,token_issued) 
                        VALUE (NULL, ${token.user.id}, '${token.token}',CURDATE())`;
                    await DAO.sqlHandler(sql);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            }
        );
    },
    /* DELETE */
    // 토큰 ID 삭제
    deleteById(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const sql = `DELETE FROM token WHERE token_id = ${token.id}`;
                    await DAO.sqlHandler(sql);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            }
        );
    },
    // 해당 회원의 모든 토큰을 삭제
    deleteByUserId(user) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const sql = `DELETE FROM token WHERE user_id = ${user.id}`;
                    await DAO.sqlHandler(sql);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            }
        );
    },
    // 토큰을 이용해 삭제
    deleteByToken(token) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const sql = `DELETE FROM token WHERE token_token = '${token.token}'`;
                    await DAO.sqlHandler(sql);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            }
        );
    },
}