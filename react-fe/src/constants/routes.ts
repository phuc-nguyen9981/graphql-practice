import Home from "pages/Home";
import Login from "pages/Login";
import { RouteProps } from "react-router-dom";

export const AUTH_ROUTES: RouteProps[] = [{ component: Login, path: ["/login", "/"], exact: true, strict: true }];
export const MAIN_ROUTES: RouteProps[] = [{ component: Home, path: "/home" }];
