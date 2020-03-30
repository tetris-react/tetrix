import { ExpressContext } from "../../interfaces/index";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import {
  LoginResolver,
  LogoutResolver,
  RegisterResolver,
  CurrentUserResolver,
} from "../../api/resolvers";

export const config = {
  api: {
    bodyParser: false,
  },
};

const createSchema = () =>
  buildSchema({
    resolvers: [
      LoginResolver,
      LogoutResolver,
      RegisterResolver,
      CurrentUserResolver,
    ],
    authChecker: ({ context: { req } }: any) => {
      return !!req.session.userId;
    },
  });

const schema = await createSchema();

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: ExpressContext) => ({ req, res }),
});

export default apolloServer.applyMiddleware();

const ormConnection = async () => {
  await createConnection({
    name: "default",
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: ["api/entity/*.*"],
    extra: {
      ssl: process.env.SSL || false,
    },
  });
};

ormConnection();
