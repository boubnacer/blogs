const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //getting the token from the headers
      // "split" transforms the headers into an array =>
      // so Bearer is the first item and the token is the second one
      token = req.headers.authorization.split(" ")[1];

      // verify token:
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token :
      // the id that we put inside the generateToken function in controllers
      // .select(-password) : we don't one password hashed, it wont include the password
      req.user = await User.findById(decode.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401); // not authorized
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("not authorized, no token");
  }
});

module.exports = { protect };
