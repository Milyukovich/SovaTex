require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const categoryRouter = require("./src/routes/categoryRouter");

app.use(cors({ origin: true, credentials: true }));

app.use("/category", categoryRouter);

app.listen(process.env.PORT);
