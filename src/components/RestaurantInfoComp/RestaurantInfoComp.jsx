import React, { useState } from "react";
import "./RestaurantInfoComp.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateRestaurantInfoDetail } from "../../redux/actions/restaurantSettingAction";

// const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);
// const phoneRegex = RegExp( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const numbRegs = RegExp(/^[0-9]*$/);

const RestaurantInfoComp = (props) => {
  let { login, phoneNumber, email, location, mobileNumber } = props.infodata;
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(true);

  const handleCancleEdit = (resetForm) => {
    setEditForm(true);
    resetForm();
  };

  const initialValues = {
    login: login ? login : "",
    email: email ? email : "",
    phoneNumber: phoneNumber ? phoneNumber : "",
    location: location ? location : "",
    mobileNumber: mobileNumber ? mobileNumber : "",
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string().required("Login Name is required"),
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email Required"),
    // phoneNumber:Yup.string().required('Phone Number is a required field').min(10, "Min 10 Digits").max(10, "Max 10 Digits").matches(phoneRegex, "Invalid Phone Number"),
    phoneNumber: Yup.string()
      .required("Phone Number is a required field")
      .matches(numbRegs, "Invalid Phone Number"),
    location: Yup.string().required("Address is required").min(10).max(50),
    // mobileNumber:Yup.string().required('Phone Number is a required field').min(10, "Min 10 Digits").max(10, "Max 10 Digits").matches(phoneRegex, "Invalid Phone Number"),
    mobileNumber: Yup.string()
      .required("Mobile Number is a required field")
      .matches(numbRegs, "Invalid Phone Number"),
  });

  const onSubmit = (fields) => {
    dispatch(updateRestaurantInfoDetail({ info: fields }));
    setEditForm(true);
  };

  return (
    <>
      <section className="RestaurantInfoComp">
        <React.Fragment>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              errors,
              touched,
              resetForm,
              setFieldValue,
              handleChange,
              values,
            }) => {
              return (
                <Form>
                  <div className="row RestaurantInfoComp-container main-accordion-wrapper">
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
                            <div>
                              <div className="accordion-title">
                                <h5 className="brandon-Bold mb-0">INFO</h5>
                              </div>
                              <div
                                className="w-100 accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                {editForm && (
                                  <div className="ml-5 expand-button position-absolute top-0 right-0"></div>
                                )}
                              </div>
                            </div>
                            {editForm ? (
                              <button
                                className="custom_edit_button mr-5 brandon-Medium"
                                type="button"
                                onClick={() => {
                                  setEditForm(false);
                                }}
                              >
                                EDIT
                              </button>
                            ) : (
                              <div className="d-flex justify-content-between align-items-center ">
                                <button
                                  className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15"
                                  type="reset"
                                  onClick={() => {
                                    handleCancleEdit(resetForm);
                                  }}
                                >
                                  cancel
                                </button>
                                <button
                                  className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15"
                                  type="submit"
                                >
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
                              <div className="row mb-4 mt-2">
                                <div className="col-md-6">
                                  <div className="rs-info-block">
                                    <h5 className="accordion-label">LOGIN</h5>
                                    {editForm ? (
                                      props.infodata && props.infodata.login ? (
                                        <p className="form-control-plaintext text-uppercase">
                                          {props.infodata &&
                                            props.infodata.login}
                                        </p>
                                      ) : (
                                        <p className="form-control-plaintext text-uppercase">
                                          -
                                        </p>
                                      )
                                    ) : (
                                      <React.Fragment>
                                        <Field
                                          name="login"
                                          placeholder="Login"
                                          className="form-control-inputtext form-control"
                                        />
                                        {touched.login && errors.login && (
                                          <div className="error pink-txt f-11">
                                            {errors.login}
                                          </div>
                                        )}
                                      </React.Fragment>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="rs-info-block">
                                    <h5 className="accordion-label">EMAIL</h5>
                                    {editForm ? (
                                      props.infodata && props.infodata.email ? (
                                        <p className="form-control-plaintext text-uppercase">
                                          {props.infodata &&
                                            props.infodata.email}
                                        </p>
                                      ) : (
                                        <p className="form-control-plaintext text-uppercase">
                                          -
                                        </p>
                                      )
                                    ) : (
                                      <React.Fragment>
                                        <Field
                                          name="email"
                                          type="email"
                                          placeholder="Email"
                                          className="form-control-inputtext form-control"
                                        />
                                        {touched.email && errors.email && (
                                          <div className="error pink-txt f-11">
                                            {errors.email}
                                          </div>
                                        )}
                                      </React.Fragment>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-4">
                                <div className="col-md-6">
                                  <div className="rs-info-block">
                                    <h5 className="accordion-label">
                                      PHONE NUMBER
                                    </h5>
                                    {editForm ? (
                                      props.infodata &&
                                      props.infodata.phoneNumber ? (
                                        <p className="form-control-plaintext text-uppercase">
                                          {props.infodata &&
                                            props.infodata.phoneNumber}
                                        </p>
                                      ) : (
                                        <p className="form-control-plaintext text-uppercase">
                                          -
                                        </p>
                                      )
                                    ) : (
                                      <React.Fragment>
                                        <Field
                                          name="phoneNumber"
                                          type="number"
                                          placeholder="Phone Number"
                                          className="form-control-inputtext form-control"
                                        />
                                        {touched.phoneNumber &&
                                          errors.phoneNumber && (
                                            <div className="error pink-txt f-11">
                                              {errors.phoneNumber}
                                            </div>
                                          )}
                                      </React.Fragment>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="rs-info-block">
                                    <h5 className="accordion-label">
                                      MOBILE NUMBER
                                    </h5>
                                    {editForm ? (
                                      props.infodata &&
                                      props.infodata.mobileNumber ? (
                                        <p className="form-control-plaintext text-uppercase">
                                          {props.infodata &&
                                            props.infodata.mobileNumber}
                                        </p>
                                      ) : (
                                        <p className="form-control-plaintext text-uppercase">
                                          -
                                        </p>
                                      )
                                    ) : (
                                      <React.Fragment>
                                        <Field
                                          name="mobileNumber"
                                          type="number"
                                          placeholder="Mobile Number"
                                          className="form-control-inputtext form-control"
                                        />
                                        {touched.mobileNumber &&
                                          errors.mobileNumber && (
                                            <div className="error pink-txt f-11">
                                              {errors.mobileNumber}
                                            </div>
                                          )}
                                      </React.Fragment>
                                    )}{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="rs-info-block">
                                    <h5 className="accordion-label">
                                      LOCATION
                                    </h5>
                                    {editForm ? (
                                      props.infodata &&
                                      props.infodata.location ? (
                                        <p className="form-control-plaintext text-uppercase">
                                          {props.infodata &&
                                            props.infodata.location}
                                        </p>
                                      ) : (
                                        <p className="form-control-plaintext text-uppercase">
                                          -
                                        </p>
                                      )
                                    ) : (
                                      <React.Fragment>
                                        <Field
                                          component="textarea"
                                          rows="1"
                                          className="form-control-inputtext form-control"
                                          name="location"
                                          placeholder="Your Location"
                                        />
                                        {touched.location &&
                                          errors.location && (
                                            <div className="error pink-txt f-11">
                                              {errors.location}
                                            </div>
                                          )}
                                      </React.Fragment>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </React.Fragment>
      </section>
    </>
  );
};

export default RestaurantInfoComp;
