// load router
const bankRouter = require('./bank.router');
const busRouter = require('./bus.router');
const busTypeRouter = require('./bustype.router');
const routeRouter = require('./route.router');
const stationRouter = require('./station.router');
const userRouter = require('./user.router');

// router mapping
const routeList = {
    "/bank": bankRouter,
    "/bus": busRouter,
    "/bustype": busTypeRouter,
    "/route": routeRouter,
    "/station": stationRouter,
    "/user": userRouter,
};

// register routers
module.exports = {
    register(app) {
        for (let address in routeList)
            app.use(address,routeList[address]);
    }
};;