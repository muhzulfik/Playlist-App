import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { selectAccessToken } from "../../store/authSlice";
import { useSelector } from "react-redux";

interface authRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  path: string;
}

const AuthRoute = ({ component: Component, path }: authRouteProps) => {
  const accessToken = useSelector(selectAccessToken);
  const isAuthenticated = !!accessToken;
  return (
    <Route
      path={path}
      render={(props) =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/create-playlist",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
