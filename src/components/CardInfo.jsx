import React from "react";
import { SERVER_URL } from "../shared/constant";

const CardInfo = ({ data, index }) => {
  return (
    <React.Fragment key={index}>
      <button className="allergen-btn d-flex flex-column justify-content-start mr-4 mb-4 p-0 align-items-center">
        <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
          <img
            src={`${SERVER_URL}/${data.image}`}
            className="img-fluid"
            alt="fluid"
            style={{ width: 20 }}
          />
        </div>
        <p className="mb-0 f-14 brandon-Medium">{data.name}</p>
      </button>
    </React.Fragment>
  );
};

export default CardInfo;
