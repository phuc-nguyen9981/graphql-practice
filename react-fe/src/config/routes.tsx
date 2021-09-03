import { AUTH_ROUTES, MAIN_ROUTES } from "constants/routes";
import AppContext from "context";
import React, { useContext, useMemo } from "react";
import { BrowserRouter as Router, Redirect, Route, RouteProps, Switch } from "react-router-dom";

const PrivateRoute = (props: RouteProps) => {
  const appContext = useContext(AppContext);
  const isAuth = useMemo(() => !!appContext.token, [appContext.token]);
  return isAuth ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
};

const RoutesBase = () => {
  return (
    <Router>
      <Switch>
        {AUTH_ROUTES.map((route, index) => {
          return <Route key={index} {...route} />;
        })}
        {MAIN_ROUTES.map((route, index) => {
          return <PrivateRoute key={index} {...route} />;
        })}
      </Switch>
    </Router>
  );
};
export default RoutesBase;
