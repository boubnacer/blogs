const express = require("express");
const dotenv = require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes.js");

const app = express();

app.use("/api/v1/blogs", blogRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app is listening on port:${port}`));
