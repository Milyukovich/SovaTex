require("dotenv").config();
const express = require("express");
const sessions = require('express-session');
const cors = require("cors");
const app = express();

const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');

const categoryRouter = require("./src/routes/categoryRouter");

const { PORT_NAME, COOKIE_SECRET, COOKIE_NAME } = process.env;

const PORT = PORT_NAME;

app.set('cookieName', COOKIE_NAME);

const sessionParser = sessions({
  name: app.get('cookieName'),
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
});

app.use(sessionParser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use("/category", categoryRouter);

app.listen(PORT);
