import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/tokenSlice";

function AuthenticatedRoute({ component: Component, ...restOfProps }) {
  const token = useSelector(selectToken);
  const isAuthenticated = !!token;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/create-playlist" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default AuthenticatedRoute;
