import Routes from "next-routes";
import nextRoutes from "next-routes";

// @ts-ignore
export const routes = nextRoutes() as Routes;
export const Router = routes.Router;
export const Link = routes.Link;

routes.add("forgot-password", "/user/forgot-password/:token");
