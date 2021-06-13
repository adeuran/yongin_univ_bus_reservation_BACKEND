const pool = require('../util/poolCreator');

const Dao = {
    sqlHandler: (sql) => {
        return new Promise(async (resolve, reject) => {
            // pool을 가져온다.
            const dbPool = pool.getPool();
            // pool에서 연결 객체를 가져온다.
            try {
                resolve(await dbPool.query(sql));
            } catch (err) {
                reject(err);
            }

        })
    }
};
module.exports = Dao;