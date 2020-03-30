import "reflect-metadata";

require("dotenv").config();

import Express from "express";
import next from "next";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";

const redis = new Redis(process.env.REDIS_URL);
const port = parseInt(String(process.env.PORT), 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const RedisStore = connectRedis(session);

const sessionOptions = {
  store: new RedisStore({
    client: redis as any,
  }),
  name: "qid",
  secret: String(process.env.SECRET),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
  },
};

app.prepare().then(async () => {
  const server = Express();

  server.use(session(sessionOptions));

  server.get("/api/graphql", (req, res) => {
    return app.render(req, res, "/api/graphql", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    // if (err) throw err;
    console.log(`🔥 Ready on http://localhost:${port} 🚀`);
  });
});
