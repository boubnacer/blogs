const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 404;
  return res.status(statusCode).json({
    msg: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  // stack for additional information but well use it just in the dev mode
};

module.exports = {
  errorHandler,
};
