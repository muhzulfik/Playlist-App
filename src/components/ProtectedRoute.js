import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/tokenSlice";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const token = useSelector(selectToken);
  const isAuthenticated = !!token;
  console.log("this", token);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
