import React, { useState } from "react";
import "./RestaurantMoreInfoComp.scss";

const RestaurantMoreInfoComp = () => {
  const [editForm, setEditForm] = useState(true);
  const [restInfo, setRestInfo] = useState({
    admin: "RESTA1",
    name: "M.Joe",
    location: "Street, Area, Country",
  });
  const [editRestInfo, setEditRestInfo] = useState({
    admin: "RESTA1",
    name: "",
    location: "Street, Area, Country",
  });
  const handleChange = (e) => {
    setEditRestInfo({ ...editRestInfo, [e.target.name]: e.target.value });
  };
  const handleCancleEdit = (e) => {
    setEditRestInfo({ ...restInfo });
    setEditForm(true);
  };
  return (
    <>
      <div className="row RestaurantMoreInfoComp-container main-accordion-wrapper">
        <div className="col-sm-12">
          <div
            className="my_shadow accordion accordion-main border-radius-15 bg-white"
            id="accordionExample"
          >
            <div className="accordion-item">
              <div
                className="d-flex justify-content-between align-items-center accordion-header position-relative"
                id="headingOne"
              >
                <div
                  className="w-100 accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="accordion-title">
                    <h5 className="brandon-Bold mb-0">MORE INFO</h5>
                  </div>
                  <div className="expand-button position-absolute top-0 right-0"></div>
                </div>
                {editForm ? (
                  <button
                    className="custom_edit_button mr-5 brandon-Medium"
                    onClick={() => {
                      setEditForm(false);
                    }}
                  >
                    EDIT
                  </button>
                ) : (
                  <div className="d-flex justify-content-between align-items-center mr-5">
                    <button
                      className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15"
                      onClick={handleCancleEdit}
                    >
                      cancel
                    </button>
                    <button className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15">
                      Save
                    </button>
                  </div>
                )}
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <div className="row">
                    <div className="col-sm-12">
                      <hr className="gray-hr"></hr>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <p className="f-15">Website</p>
                    </div>
                    <div className="col-sm-12">
                      <p className="f-15">http://nareshbingi.com/</p>
                    </div>
                    <div className="col-sm-12">
                      <p className="f-15 gray-txt">* Added to profile page</p>
                    </div>
                    <div className="col-sm-12">
                      <hr />
                    </div>
                    <div className="col-sm-12">
                      <p className="f-15">More Restaurant Features</p>
                    </div>
                    <div className="col-sm-12">
                      <p className="f-15">Home Delivery</p>
                    </div>
                    <div className="col-sm-12">
                      <p className="f-15">Free Parking</p>
                    </div>
                    <div className="col-sm-12">
                      <p className="f-15">Indoor Seating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMoreInfoComp;
