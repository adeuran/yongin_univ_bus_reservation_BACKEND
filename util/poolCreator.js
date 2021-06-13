const db = require('mysql2');
const config = require('../config/database.json');


const pool = (() => {
    let dbPool;
    const initiate = () => {
        const ori_pool = db.createPool(config);
        return ori_pool.promise();
    }
    return {
        getPool: () => {
            if (!dbPool) {
                dbPool = initiate();
                return dbPool;
            } else {
                return dbPool;
            }
        }
    }
})();

module.exports = pool;