import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const token = !!localStorage.getItem("access_token");
  const role = localStorage.getItem("role");
  // if (rest.path === "/create-new-event") {
  //   return children;
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token && role === "restaurant_admin"? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

