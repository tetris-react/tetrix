import { ExpressContext } from "./../../interfaces";
import { ApolloServer } from "apollo-server-micro";
import schema from "./../../lib/schema";

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: ExpressContext) => ({ req, res }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
