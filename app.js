const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { notFound, globalErrorHandler } = require("./middelwares");

require("dotenv").config();

const foodRouter = require("./routes/api/food");
const userRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.use("/", foodRouter);

app.use(notFound);

app.use(globalErrorHandler);

module.exports = app;
