// import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
// import { NextPageContext } from "next";
import { Request, Response } from "express";

export interface ExpressContext {
  req: Request;
  res: Response;
}

// export interface ApolloContext extends NextPageContext {
//   apolloClient: ApolloClient<NormalizedCacheObject>;
// }
