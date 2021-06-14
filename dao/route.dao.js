const DAO = require('./DAO');
const RouteDTO = require('../dto/RouteDTO');

module.exports = {
    async getAll() {
        let response;
        return new Promise((resolve, reject) => {
            const sql = `SELECT route_id, route_term_state, route_price, route_keep, route_explain FROM route`;
            try {
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            const result = new Array();
            response[0].forEach((tuple) => {
                const dto = new RouteDTO(tuple.route_id, tuple.route_term_state, tuple.route_price, tuple.route_keep, tuple.route_explain);
                result.push(dto);
            });
            resolve(result);
        });
    },
    async getById(route) {
        let response;
        return new Promise((resolve, reject) => {
            const sql = `SELECT route_term_state, route_price, route_keep, route_explain FROM route WHERE route_id = ${route.id} LIMIT 1`;
            try {
            response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            // identifier에 대한 계정이 없을 경우
            if (response[0].length == 0) resolve(null);
            route.termState = response[0][0].route_term_state;
            route.price = response[0][0].route_price;
            route.keep = response[0][0].route_keep;
            route.explain = response[0][0].route_explain;

            resolve(route);
        });
    },
    async insert(route) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO route (route_term_state, route_price, route_keep, route_explain)
             VALUE ('${route.termState}', ${route.price}, ${route.keep}, '${route.explain}')`;
            try {
            await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    },
    async editById(route) {
        return new Promise((resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE route SET route_term_state='${route.termState}', route_price=${route.price}, route_keep=${route.keep},
            route_explain='${route.explain}' WHERE route_id=${route.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error)
            }
            resolve();
        });
    },
    async deleteById(route) {
        return new Promise((resolve, reject) => {
            let response;
        try {
            const sql = `DELETE FROM route WHERE route_id=${route.id}`;
            response = await DAO.sqlHandler(sql);
        } catch (error) {
            reject(error)
        }
        resolve();
        });
    },
    async switchKeepById(route) {
        return new Promise((resolve, reject) => {
            let response;
            try {
                const sql = `UPDATE route SET route_keep = CASE WHEN route_keep = 1 THEN 0 ELSE 1 WHERE route_id=${route.id}`;
                response = await DAO.sqlHandler(sql);
            } catch (error) {
                reject(error);
            }
            resolve();
        });
    }
        
};