import React from "react";
// import pattern_img from '../../assets/images/pattern.png'
import logo_img from "../../assets/images/logo2.svg";
import "./NoDataFoundPage.scss";

const NoDataFoundPage = () => {
  return (
    <React.Fragment>
      <div className="NoDataFoundPage-comp d-flex flex-column align-items-center justify-content-center">
        <img
          src={logo_img}
          alt="img"
          loading="lazy"
          className="img-fluid "
          style={{ width: 140 }}
        />
        <p className="mt-3 gray-txt font-weight-bold" style={{ fontSize: 30 }}>
          No Data Found !
        </p>
        <p className="gray-txt font-weight-bold" style={{ fontSize: 20 }}>
          Looks like something went wrong....
        </p>
      </div>
    </React.Fragment>
  );
};

export default NoDataFoundPage;
