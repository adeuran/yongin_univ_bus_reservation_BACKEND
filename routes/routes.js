// load router
const bankRouter = require('./bank.router');
const busRouter = require('./bus.router');
const busTypeRouter = require('./bustype.router');
const stationRouter = require('./station.router');
const userRouter = require('./user.router');

// router mapping
const routeList = {
    "/bank": bankRouter,
    "/bus": busRouter,
    "/bustype": busTypeRouter,
    "/station": stationRouter,
    "/user": userRouter,
};

// register routers
const route = {
    register(app) {
        for (let address in routeList)
            app.use(address,routeList[address]);
    }
};

module.exports = route;