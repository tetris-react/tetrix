import { MiddlewareFn } from "type-graphql";

import { ExpressContext } from "../../interfaces";

export const logger: MiddlewareFn<ExpressContext> = async ({ args }, next) => {
  console.log("args: ", args);

  return next();
};
