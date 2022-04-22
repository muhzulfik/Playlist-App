import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { selectAccessToken } from "../../store/authSlice";
import { useSelector } from "react-redux";

interface protectedRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  path: string;
}

const PrivateRoute = ({ component: Component, path }: protectedRouteProps) => {
  const accessToken = useSelector(selectAccessToken);
  const isAuthenticated = !!accessToken;

  return (
    <Route
      path={path}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
