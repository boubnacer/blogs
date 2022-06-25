const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDb = require("./config/db.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const blogRoutes = require("./routes/blogRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/users", userRoutes);

//for middleware functions:
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb();
    await app.listen(port, () =>
      console.log(`app is listening on port:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
