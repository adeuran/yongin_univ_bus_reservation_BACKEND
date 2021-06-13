function errorHandler(err, req, res, next) {
    let output = {
        name: err.name,
        message: err.message,
        body: req.body,
        url: req.originalUrl,
        route: req.originalMethod || req.method
    }

    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).jsonp({ message: err });
    } else if (err.name === 'ValidationError') {
        // validation error
        return res.status(400).jsonp(output);
    } else if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        output.message = 'Invalid Token or Login Failed';
        return res.status(401).jsonp(output);
    } else {
        return res.status(err.status || 500).jsonp(output);
    }
}

module.exports = errorHandler;