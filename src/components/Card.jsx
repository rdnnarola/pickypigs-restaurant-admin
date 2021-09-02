import React from "react";
import { SERVER_URL } from "../shared/constant";
// import "../components/ManageEasyAddDishComp/ManageEasyAddDishComp.scss";

// import "../components/HowPageAllegyDescComp/HowPageAllegyDescComp.scss";
// import "../components/ManageEasyAddDishComp/ManageEasyAddDishComp.scss";
// import "./HowPageAllegyDescComp.scss";

const Card = ({ data, index }) => {
  return (
    <React.Fragment key={index}>
      <button
        id={data._id}
        type="button"
        className="allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center"
      >
        <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
          <img
            src={`${SERVER_URL}/${data.image}`}
            className="img-fluid"
            alt="img-fluid"
          />
        </div>
        <span className={`mb-0 f-12 txt-lightgray brandon-Medium`}>
          {data.name}
        </span>
      </button>
    </React.Fragment>
  );
};

export default Card;
