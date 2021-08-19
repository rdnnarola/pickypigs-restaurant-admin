import React from "react";
import { Route } from "react-router-dom";
import { RESTAURANT_ADMIN_URL } from "./shared/constant";

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
        token && role === "restaurant_admin" ? (
          children
        ) : (
          <React.Fragment>
            {/* <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          /> */}
            {window.open(
              `${RESTAURANT_ADMIN_URL}`,
              "_self", // <- This is what makes it open in a new window.
              "replace=true"
            )}
          </React.Fragment>
        )
      }
    />
  );
}
