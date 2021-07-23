import React, { useState, useEffect } from "react";
import "./RestaurantDetailPage.scss";
import restaurant_banner from "../../assets/images/dummy_img.jpg";
import dishimg1 from "../../assets/images/dummy_img.jpg";
import RestaurantInfoComp from "../../components/RestaurantInfoComp/RestaurantInfoComp";
import RestaurantFeaturesComp from "../../components/RestaurantFeaturesComp/RestaurantFeaturesComp";
import RestaurantUserDetailComp from "../../components/RestaurantUserDetailComp/RestaurantUserDetailComp";
import RestaurantSecurityComp from "../../components/RestaurantSecurityComp/RestaurantSecurityComp";
import RestaurantAddAddressComp from "../../components/RestaurantAddAddressComp/RestaurantAddAddressComp";
// import RestaurantMoreInfoComp from "../../components/RestaurantMoreInfoComp/RestaurantMoreInfoComp";
import RestaurantInfoFeatureComp from "../../components/RestaurantInfoFeatureComp/RestaurantInfoFeatureComp";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllRestaurantDetail,
  updateRestaurantAbout,
  updateRestaurantCoverImage,
  updateRestaurantInfoDetail,
  updateRestaurantProfileImage,
  updateRestaurantName,
} from "../../redux/actions/restaurantSettingAction";
import CustomLoadingComp from "../../components/CustomLoadingComp/CustomLoadingComp";
import moment from "moment";
import { SERVER_URL } from "../../shared/constant";
import RestaurantSettingImageGalleryComp from "../../components/RestaurantSettingImageGalleryComp/RestaurantSettingImageGalleryComp";
// import GoogleMapTestComp from "./GoogleMapTestComp/GoogleMapTestComp";
import SettingSubscriptionComp from "../../components/SettingSubscriptionComp/SettingSubscriptionComp";
import NoDataFoundPage from "../NoDataFoundPage/NoDataFoundPage";

const RestaurantDetailPage = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  let [imageLoading, setImageLoading] = useState(false);
  const [tabs, setTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  const [editProfileName, setEditProfileName] = useState(true);

  const [editForm, setEditForm] = useState(true);

  useEffect(() => {
    dispatch(getAllRestaurantDetail());
  }, [dispatch]);

  let Restaurant_Setting_Data = useSelector((state) => {
    return state.restaurantSetting;
  });

  let { restauraneSetting_Data, isLoading, selectedAudate, restaurantName } =
    Restaurant_Setting_Data;

  const handleProfileCancl = () => {
    setEditProfileName(true);
    dispatch(
      updateRestaurantName(
        restauraneSetting_Data && restauraneSetting_Data.name
      )
    );
  };
  const handleProfileChange = (e) => {
    dispatch(updateRestaurantName(e.target.value));
  };
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRestaurantInfoDetail({ name: restaurantName }));
    setEditProfileName(true);
  };

  const handleAboutCancl = () => {
    setEditForm(true);
    dispatch(
      updateRestaurantAbout(
        restauraneSetting_Data && restauraneSetting_Data.about
      )
    );
  };
  const handleAboutChange = (e) => {
    dispatch(updateRestaurantAbout(e.target.value));
  };
  const handleAboutSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRestaurantInfoDetail({ about: selectedAudate }));
    setEditForm(true);
  };

  const profileImageUploadHandeler = (e) => {
    e.preventDefault();
    if (e.target.files) {
      dispatch(updateRestaurantProfileImage(e.target.files[0]));
    }
  };

  const coverImageUploadHandeler = (e) => {
    e.preventDefault();
    if (e.target.files) {
      dispatch(updateRestaurantCoverImage(e.target.files[0]));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let ele = document.getElementById("asdawdfe");
      if (window.scrollY > 300) {
        ele && ele.classList.add("restaurent-details-scroll");
      } else {
        ele && ele.classList.remove("restaurent-details-scroll");
      }
    });
    // eslint-disable-next-line
  }, [window.scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let ele = document.getElementById("sfafeafADW");
      if (window.scrollY > 400) {
        ele && ele.classList.add("rstab-scroll");
      } else {
        ele && ele.classList.remove("rstab-scroll");
      }
    });
    // eslint-disable-next-line
  }, [window.scrollY]);

  return (
    <>
      <section className="RestaurantDetailPage">
        {isLoading && isLoading ? <CustomLoadingComp /> : null}
        <div className="row">
          <div className="col-sm-12 mb-3">
            <div className="user-banner-img position-relative">
              {restauraneSetting_Data &&
              restauraneSetting_Data.restaurantCoverPhoto ? (
                <img
                  loading="lazy"
                  onLoad={() => {
                    setImageLoading(true);
                  }}
                  src={`${SERVER_URL}/${
                    restauraneSetting_Data &&
                    restauraneSetting_Data.restaurantCoverPhoto
                  }`}
                  alt={"restaurant_banner"}
                  className="w-100 img-fluid bg-white "
                />
              ) : (
                <img
                  src={restaurant_banner}
                  alt={"restaurant_banner"}
                  className="w-100 img-fluid bg-white "
                  style={{ objectPosition: "center" }}
                />
              )}
            </div>
            <form>
              <div
                className="form-group position-absolute"
                style={{ top: 20, right: 40 }}
              >
                <div className="fileUpload">
                  <input
                    type="file"
                    accept="image/*"
                    name="uploadedfile"
                    className="form-control-file upload"
                    onChange={coverImageUploadHandeler}
                  />
                  <span>Upload Cover</span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-12">
            <div
              className="restaurent-details-wrapper d-flex justify-content-between align-items-start flex-wrap"
              id="asdawdfe"
            >
              <div className="restaurent-left-details d-flex align-items-start flex-wrap">
                <div className="userprofile-block">
                  <div className="userprofile-select">
                    {restauraneSetting_Data &&
                    restauraneSetting_Data.restaurantProfilePhoto ? (
                      <img
                        loading="lazy"
                        onLoad={() => {
                          setImageLoading(true);
                        }}
                        src={`${SERVER_URL}/${
                          restauraneSetting_Data &&
                          restauraneSetting_Data.restaurantProfilePhoto
                        }`}
                        alt=""
                        className="img-fluid bg-white img-thumbnil"
                      />
                    ) : (
                      <img
                        src={dishimg1}
                        alt=""
                        className="img-fluid bg-white img-thumbnil"
                      />
                    )}
                    <form>
                      <div className="form-group">
                        <div className="userprofile-btn">
                          <input
                            type="file"
                            accept="image/*"
                            name="uploadedfile"
                            className="form-control-file userprofile-control"
                            onChange={profileImageUploadHandeler}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="pt-3 pb-3 restaurent-info">
                  {editProfileName ? (
                    restauraneSetting_Data && restauraneSetting_Data.name ? (
                      <h4 className="brandon-Medium restaurent-name">
                        {" "}
                        {restauraneSetting_Data && restauraneSetting_Data.name}
                      </h4>
                    ) : (
                      <h4 className="brandon-Medium restaurent-name">
                        Not Available
                      </h4>
                    )
                  ) : (
                    <React.Fragment>
                      <input
                        type="text"
                        name="name"
                        value={restaurantName}
                        onChange={handleProfileChange}
                        placeholder="Enter Name here"
                        className="form-control-inputtext form-control mb-2"
                      />
                    </React.Fragment>
                  )}
                  <div className="d-flex flex-wrap">
                    <p className="mr-4 brandon-regular f-15 mb-2">
                      <span className="gray-txt pr-1 brandon-Medium">
                        Joined since:
                      </span>
                      {restauraneSetting_Data &&
                      restauraneSetting_Data.createdAt ? (
                        <span>
                          &nbsp;
                          {moment(
                            restauraneSetting_Data &&
                              restauraneSetting_Data.createdAt
                          ).format("Do MMMM YYYY")}
                        </span>
                      ) : (
                        <span className="brandon-Medium">Not Available</span>
                      )}
                    </p>
                    <p className="f-15 gray-txt brandon-regular mb-2">
                      <span className="gray-txt pr-1 brandon-Medium">
                        Subscribe level:
                      </span>
                      {restauraneSetting_Data &&
                      restauraneSetting_Data.package ? (
                        <span className="pink-txt text-capitalize">
                          &nbsp;
                          {restauraneSetting_Data &&
                            restauraneSetting_Data.package}
                        </span>
                      ) : (
                        <span className="pink-txt brandon-Medium">
                          Not Available
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              {editProfileName ? (
                <button
                  className="btn pinkline-btn text-uppercase rounded-pill mt-3 min-width-170"
                  type="button"
                  onClick={() => {
                    setEditProfileName(false);
                  }}
                >
                  <span className="edit-icon"> Edit Profile</span>
                </button>
              ) : (
                <div className="d-flex justify-content-between align-items-center mt-3 min-width-170">
                  <button
                    className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15"
                    type="reset"
                    onClick={handleProfileCancl}
                  >
                    cancel
                  </button>
                  <button
                    className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15"
                    type="submit"
                    onClick={handleProfileSubmit}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="my_shadow border-radius-15 about_section_style">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="about_header mb-0 f-15 text-uppercase gray-txt brandon-Medium">
              ABOUT
            </h5>
            {editForm ? (
              <button
                className="custom_edit_button brandon-Medium"
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
                  onClick={handleAboutCancl}
                >
                  cancel
                </button>
                <button
                  className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15"
                  type="submit"
                  onClick={handleAboutSubmit}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <hr className="lightgray-border"></hr>
            </div>
          </div>
          {editForm ? (
            restauraneSetting_Data && restauraneSetting_Data.about ? (
              <p className="f-15 mb-0 line-height-1_75 brandon-Medium">
                {restauraneSetting_Data && restauraneSetting_Data.about}.
              </p>
            ) : (
              <p className="form-control-plaintext text-uppercase brandon-Medium">
                No Data Availble...
              </p>
            )
          ) : (
            <React.Fragment>
              <textarea
                rows="4"
                name="aboutText"
                value={selectedAudate}
                onChange={handleAboutChange}
                placeholder="Enter About Your Restaurant"
                className="form-control-inputtext form-control"
              />
              {/* {touched.street && errors.street && <div className="error pink-txt f-11">{errors.street}</div>} */}
            </React.Fragment>
          )}
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <div
              className="rstab-subhead d-flex justify-content-between align-items-center flex-wrap"
              id="sfafeafADW"
            >
              <div className="rstab-lists d-flex flex-wrap align-items-center">
                <button
                  className={`rstab-btn mr-5 brandon-regular ${
                    tabs.tab1 ? "active" : null
                  }`}
                  onClick={() => {
                    setTabs({ tab1: true, tab2: false, tab3: false });
                  }}
                >
                  Restaurant info{" "}
                </button>
                <button
                  className={`rstab-btn mr-5 brandon-regular ${
                    tabs.tab2 ? "active" : null
                  }`}
                  onClick={() => {
                    setTabs({ tab1: false, tab2: true, tab3: false });
                  }}
                >
                  Restaurants
                </button>
                <button
                  className={`rstab-btn mr-5 brandon-regular ${
                    tabs.tab3 ? "active" : null
                  }`}
                  onClick={() => {
                    setTabs({ tab1: false, tab2: false, tab3: true });
                  }}
                >
                  Subscription
                </button>
              </div>
            </div>
            <br></br>
            {tabs.tab1 ? (
              <div>
                {restauraneSetting_Data ? (
                  <React.Fragment>
                    {restauraneSetting_Data && (
                      <RestaurantInfoComp
                        infodata={
                          restauraneSetting_Data && restauraneSetting_Data.info
                            ? restauraneSetting_Data &&
                              restauraneSetting_Data.info
                            : {}
                        }
                      />
                    )}

                    {restauraneSetting_Data && (
                      <RestaurantSecurityComp
                        securitydata={
                          restauraneSetting_Data &&
                          restauraneSetting_Data.security
                            ? restauraneSetting_Data &&
                              restauraneSetting_Data.security
                            : {}
                        }
                      />
                    )}

                    {restauraneSetting_Data && (
                      <RestaurantAddAddressComp
                        addressdata={
                          restauraneSetting_Data &&
                          restauraneSetting_Data.address
                            ? restauraneSetting_Data &&
                              restauraneSetting_Data.address
                            : {}
                        }
                      />
                    )}

                    {restauraneSetting_Data && (
                      <RestaurantFeaturesComp
                        detaildata={
                          restauraneSetting_Data &&
                          restauraneSetting_Data.restaurantDetails
                            ? restauraneSetting_Data &&
                              restauraneSetting_Data.restaurantDetails
                            : {}
                        }
                      />
                    )}
                    {restauraneSetting_Data && (
                      <RestaurantInfoFeatureComp
                        featuredata={
                          restauraneSetting_Data &&
                          restauraneSetting_Data.restaurantFeatures
                            ? restauraneSetting_Data &&
                              restauraneSetting_Data.restaurantFeatures
                            : {}
                        }
                      />
                    )}
                    {restauraneSetting_Data && (
                      <RestaurantSettingImageGalleryComp
                        gallerydata={
                          restauraneSetting_Data &&
                          restauraneSetting_Data.restaurantGalleries
                            ? restauraneSetting_Data &&
                              restauraneSetting_Data.restaurantGalleries
                            : {}
                        }
                      />
                    )}
                    {/* <RestaurantMoreInfoComp /> */}
                  </React.Fragment>
                ) : (
                  <NoDataFoundPage />
                )}
              </div>
            ) : tabs.tab2 ? (
              <section>
                <RestaurantUserDetailComp />
              </section>
            ) : (
              <section>
                <SettingSubscriptionComp />
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantDetailPage;
