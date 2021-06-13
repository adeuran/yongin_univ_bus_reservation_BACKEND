const userService = require('../service/user.service');
const UserDTO = require('../dto/UserDTO');
const TokenDTO = require('../dto/TokenDTO');

module.exports = {
    // 모든 유저의 목록을 불러옴.
    async getAll(req, res, next) {
        let result = await bankService.getAll();
        res.jsonp(result);
    },
    // 로그인 절차 수행
    async login(req, res, next) {
        const user = new UserDTO();
        user.identifier = req.body.identifier;
        user.password = req.body.password;
        try {
            res.jsonp(await userService.login(user));
        } catch (err) {
            res.status(err.status);
            next(err);
        }
    },
    // 로그인 절차 수행
    async logout(req, res, next) {
        // 폐기할 refresh token을 가져옴.
        let refreshToken = new TokenDTO();
        refreshToken.token = req.headers['x-refresh-token'];
        await userService.logout(refreshToken)
        res.jsonp("Good Bye");
    },
};