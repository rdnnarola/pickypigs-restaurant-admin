import React, { Component } from "react";

import ErrorFallbackImage from "../assets/images/something_went_wrong.png";
import { ADMIN_URL } from "../shared/constant";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      const handleTryAgain = () => {
        window.open(
          `${ADMIN_URL}`,
          "_self", // <- This is what makes it open in a new window.
          "replace=true"
        );
      };
      return (
        <React.Fragment>
          <section className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={ErrorFallbackImage}
              className="error_boundary_img"
              alt="Error-Img"
            />
            <button
              onClick={handleTryAgain}
              className="pinkbg-btn"
              style={{ width: 200, color: "#ffffff" }}
            >
              Try Again
            </button>
          </section>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
