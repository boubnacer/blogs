const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");

const blogRoutes = require("./routes/blogRoutes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/blogs", blogRoutes);

//for middleware functions:
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app is listening on port:${port}`));
