globalErrorHandler = (error, req, res, next) => {
    res.status(error.code);
    res.send(error.message);
}

module.exports = globalErrorHandler;