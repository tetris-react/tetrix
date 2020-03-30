import next from "next";
import Express from "express";
// import Redis from "ioredis";
// import connectRedis from "connect-redis";
import session from "express-session";
const KnexSessionStore = require("connect-session-knex")(session);

require("dotenv").config();

import { routes } from "./routes";

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);
// const redis = new Redis(process.env.REDIS_URL);

// const RedisStore = connectRedis(session);

// const sessionOptions = {
//   store: new RedisStore({
//     client: redis as any,
//   }),
//   name: "qid",
//   secret: String(process.env.SECRET),
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
//   },
// };

// Configure session options 🐓
const sessionOptions = {
  // name: "cookie",
  secret: String(process.env.SECRET),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years,
    // secure: false,
    // httpOnly: true,
  },
  // resave: false,
  // saveUninitialized: false,
  store: new KnexSessionStore({
    knex: require("../data/config"),
    // tablename: "sessions",
    // sidfieldname: "sid",
    // createtable: true,
    // clearInterval: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
  }),
};

app.prepare().then(() => {
  const server = Express();

  server.use(session(sessionOptions));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`🔥 Ready on http://localhost:${port} 🚀`);
  });
});

// createServer((req, res) => {
//   handle(req, res);
// }).listen(port, () => {
//   // err: any;
//   // if (err) throw err;
//   console.log(`> Ready on http://localhost:${port}`);
// });
