import React, { useState } from "react";
import "./RestaurantDetailPage.scss";
import restaurant_banner from "../../assets/images/restaurant-banner.jpg";
import dishimg1 from "../../assets/images/dishimg1.jpg";
import RestaurantInfoComp from "../../components/RestaurantInfoComp/RestaurantInfoComp";
import RestaurantFeaturesComp from "../../components/RestaurantFeaturesComp/RestaurantFeaturesComp";
import RestaurantUserDetailComp from "../../components/RestaurantUserDetailComp/RestaurantUserDetailComp";
import RestaurantSecurityComp from "../../components/RestaurantSecurityComp/RestaurantSecurityComp";
import RestaurantAddAddressComp from "../../components/RestaurantAddAddressComp/RestaurantAddAddressComp";
import RestaurantMoreInfoComp from "../../components/RestaurantMoreInfoComp/RestaurantMoreInfoComp";


const RestaurantDetailPage = () => {
    const [tabs, setTabs] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
    });
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="user-banner-img">
                        <img src={restaurant_banner} alt={"restaurant_banner"} className="w-100 img-fluid" />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="restaurent-details-wrapper d-flex justify-content-between align-items-start flex-wrap">
                        <div className="restaurent-left-details d-flex align-items-start flex-wrap">
                            <div className="userprofile-block">
                                <div className="userprofile-select">
                                    <img src={dishimg1} alt="" className="img-fluid img-thumbnil" />
                                    <form>
                                        <div className="form-group">
                                            <input type="file" className="form-control-file userprofile-control" id="exampleFormControlFile1" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="pt-3 pb-3 restaurent-info">
                                <h4 className="brandon-Medium restaurent-name">Restaurent Name Here</h4>
                                <div className="d-flex flex-wrap">
                                    <p className="mr-4 brandon-regular f-15 mb-2">
                                        <span className="gray-txt">Joined since:</span>
                                        <span> 1st November, 2020</span>
                                    </p>
                                    <p className="f-15 gray-txt brandon-regular mb-2">Subscribe level: <span className="pink-txt">Premium</span></p>
                                </div>
                            </div>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mt-3 min-width-170"><span className="edit-icon"> Edit Profile</span></button>
                    </div>
                </div>
            </div>
            <div className="my_shadow border-radius-15 about_section_style">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="about_header mb-0 f-15 text-uppercase gray-txt">ABOUT</h5>
                    <button className="custom_edit_button">EDIT</button>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr className="lightgray-border"></hr>
                    </div>
                </div>
                <p className="f-15 mb-0 line-height-1_75">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12">
                    <div className="rstab-subhead d-flex justify-content-between align-items-center flex-wrap">
                        <div className="rstab-lists d-flex flex-wrap align-items-center">
                            <button className={`rstab-btn mr-5 brandon-regular ${tabs.tab1 ? 'active' : null}`} onClick={() => { setTabs({ tab1: true, tab2: false, tab3: false }) }}>Restaurant info </button>
                            <button className={`rstab-btn mr-5 brandon-regular ${tabs.tab2 ? 'active' : null}`} onClick={() => { setTabs({ tab1: false, tab2: true, tab3: false }) }}>Restaurants</button>
                            <button className={`rstab-btn mr-5 brandon-regular ${tabs.tab3 ? 'active' : null}`} onClick={() => { setTabs({ tab1: false, tab2: false, tab3: true }) }}>Subscription</button>
                        </div>
                    </div>
                    <br></br>
                    {tabs.tab1 ?
                        <div>
                            <RestaurantInfoComp />
                            <RestaurantSecurityComp />
                            <RestaurantAddAddressComp />
                            <RestaurantFeaturesComp />
                            <RestaurantMoreInfoComp/>
                        </div>
                        :
                        tabs.tab2 ?
                            <section><RestaurantUserDetailComp /></section>
                            :
                            <section>ccccc</section>
                    }
                </div>
            </div>
        </>
    )
}

export default RestaurantDetailPage;