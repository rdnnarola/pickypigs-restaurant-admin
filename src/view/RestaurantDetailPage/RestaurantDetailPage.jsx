import React,{useState} from "react";
import "./RestaurantDetailPage.scss";
import restaurant_banner from "../../assets/images/restaurant-banner.jpg";
import dishimg1 from "../../assets/images/dishimg1.jpg";
import RestaurantInfoComp from "../../components/RestaurantInfoComp/RestaurantInfoComp";
import RestaurantFeaturesComp from "../../components/RestaurantFeaturesComp/RestaurantFeaturesComp";
import RestaurantUserDetailComp from "../../components/RestaurantUserDetailComp/RestaurantUserDetailComp";
import RestaurantSecurityComp from "../../components/RestaurantSecurityComp/RestaurantSecurityComp";
import RestaurantAddAddressComp from "../../components/RestaurantAddAddressComp/RestaurantAddAddressComp";


const RestaurantDetailPage = () => {
    const [tabs, setTabs] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
    });
    return (
        <>
            <section className="restaurantdisc-wrapper">
                <div>
                    <div>
                        <img src={restaurant_banner} alt={"restaurant_banner"} className="w-100 img-fluid" />
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="d-flex align-items-center flex-wrap">
                                <div className="userprofile-block">
                                    <div className="userprofile-select">
                                        <img src={dishimg1} alt="" width="300px" className="img-fluid img-thumbnil" />
                                        <form>
                                            <div className="form-group">
                                                <input type="file" className="form-control-file userprofile-control" id="exampleFormControlFile1" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h4 className="brandon-Medium">Restaurent Name Here</h4>
                                    <div  className="d-flex">
                                        <p className="mr-4">Joined since: 1st November, 2020</p>
                                        <p>Subscribe level: <span>Premium</span></p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn pinkline-btn text-uppercase rounded-pill mr-3" ><span> Edit Profile</span></button>
                        </div>
                    </div>
                    <div className="my_shadow border-radius-15 about_section_style">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="about_header mb-0">ABOUT</h5>
                            <button className="custom_edit_button">EDIT</button>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <hr className="gray-hr"></hr>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="row mt-5">
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
                                    <RestaurantInfoComp/>
                                    <RestaurantAddAddressComp/>
                                    <RestaurantSecurityComp/>
                                    <RestaurantFeaturesComp/>
                                </div>
                                :
                            tabs.tab2 ?
                                <section><RestaurantUserDetailComp/></section>
                                :
                            <section>ccccc</section>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestaurantDetailPage;