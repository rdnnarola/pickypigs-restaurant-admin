import React from "react";
import SignUpSignInComponent from "../../components/SignUpSignInComponent/SignUpSignInComponent";
import FirstOverlapedCardComp from "../../components/FirstOverlapedCardComp/FirstOverlapedCardComp";
import SecondOverlapedCardComp from "../../components/SecondOverlapedCardComp/SecondOverlapedCardComp";
import img_1 from "../../assets/images/digitalise_img.svg"
import img_2 from "../../assets/images/work-img.svg"
import tickimg from "../../assets/images/tick.svg"
import pattern_img from "../../assets/images/pattern.png"

import JoinPickyPigComponent from "../../components/JoinPickyPigComponent/JoinPickyPigComponent";
import './LoginPage.scss';
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";
import OurVisionComponent from "../../components/OurVisionComponent/OurVisionComponent";


const detail_1 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience.", "Provide live personalised menus to each guest and their unique needs."]
const detail_2 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience."]

const features_1 = ["Easy upload option / recipe and dish builder", "Calculate calorie and macros of each dish", "Link to the POS for fast on-boarding", "User friendly experience", "User friendly dashboard to create dishes and your menu.", "Reporting tool to track orders, allergens, and servers", "Add multiple filters to each dish.", "Multisite capabilities."]
const features_2 = ["User friendly experience", "User friendly dashboard to create dishes and your menu.", "Reporting tool to track orders, allergens, and servers", "Add multiple filters to each dish.", "Multisite capabilities."]

const LoginPage = () => {
    return (
        <>

            <LoginPageHeader />
            {/* <section className="gradient-bg">
                <div className="container">
                    <SignUpSignInComponent />
                </div>
            </section> */}
            <section className="mt-5 pt-5">
                <div className="container mt-5 pt-5">
                    <div>
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <h1 className="heading-content brandon-Bold">WORK WITH US</h1>
                                <p className="f-15">Lorem ipsum dolor text dummy</p>
                            </div>
                        </div>
                        <FirstOverlapedCardComp img={img_1} heading="Digitalise Today" detail={detail_2} />
                        <SecondOverlapedCardComp img={img_1} heading="Fuss Free Food (Integrate you system)" detail={detail_1} />
                        <FirstOverlapedCardComp img={img_1} heading="The Whole Package (Showcase your menu)" detail={detail_2} />
                    </div>
                    <JoinPickyPigComponent />
                    <section className="mb-5">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <h1 className="heading-content brandon-Bold">HOW IT WORKS</h1>
                                <p className="f-15">Lorem ipsum dolor text dummy</p>
                            </div>
                        </div>
                        <div>
                            <SecondOverlapedCardComp img={img_1} workslist="works-list" heading="Features" detail={features_1} />
                        </div>
                        <div>
                            <FirstOverlapedCardComp img={img_1} workslist="works-list" heading="Features" detail={features_2} />
                        </div>
                        <div>
                            <SecondOverlapedCardComp img={img_2} workslist="works-list" heading="Features" detail={features_1} />
                        </div>
                    </section>
                </div>
            </section>
            <section className="bg-light-pink waiting-section">
                <div className="container pl-0 pr-0">
                    <div className="bg-white waiting-wrapper d-flex align-items-center">
                        <div className="container waiting-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="what-waiting-wrapper">
                                    <h4 className="brandon-Bold mb-2">What are you waiting for?</h4>
                                    <p className="f-15 darkgray-txt">Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer</p>
                                </div>
                                <button className="signup-btn pinkbg-btn min-height-50 border-radius-25 min-width-270 shadow-light">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="plan-section">
                <div className="container pl-0 pr-0">
                    <div className="plan-wrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper pr-0">
                                <div className="plan-details">
                                    <div className="plan-head">
                                    </div>
                                    <div className="plan-listing">
                                        <ul className="mb-0">
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">Allergy Declaration</p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">Integrated Menu Build</p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">Calories and Macro Calculator</p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">POS Integration</p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">Reports</p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">
                                                    Multisite log ins
                                                    <br />
                                                    <span className="f-13">(£80 month for every additional site)</span>
                                                </p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">
                                                    KDS Software
                                                    <br />
                                                    <span className="f-13">(£30 monthly for every additional)</span></p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">
                                                    Inhouse ordering software
                                                    <br />
                                                    <span className="f-13">(£30 monthly for every additional)</span>
                                                </p>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <p class="mb-0 f-15">
                                                    Set up support
                                                    <br />
                                                    <span className="f-13">(£ based on venue)</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <div className="plan-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper plan-month-wrapper pl-0 pr-0">
                                <div className="plan-details bg-white">
                                    <div className="plan-head d-flex align-items-center justify-content-center flex-column">
                                        <h5 className="brandon-Medium text-center mb-1 text-uppercase">Basic</h5>
                                        <p className="text-center mb-0 f-15 gray-txt">(Free 3 month trial) </p>
                                    </div>
                                    <div className="plan-listing">
                                        <ul className="mb-0">
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">Yes</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">-</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">-</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                        </ul>
                                        <div className="plan-footer flex-column d-flex align-items-center justify-content-center">
                                            <p className="gray-txt mb-0 price-label">$99.99<span className="month-label">/ month</span></p>
                                            <p className="f-15 gray-txt mb-3 pb-1">dolor text dummy lorem</p>
                                            <button className="f-15 text-uppercase btn pinkline-btn min-height-50 min-width-170 border-radius-25">Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper plan-month-wrapper active-view pl-0 pr-0">
                                <div className="plan-details bg-white">
                                    <div className="plan-head d-flex align-items-center justify-content-center flex-column">
                                        <h5 className="brandon-Medium text-center mb-1 text-uppercase">Basic</h5>
                                        <p className="text-center mb-0 f-15 gray-txt">(Free 3 month trial) </p>
                                    </div>
                                    <div className="plan-listing">
                                        <ul className="mb-0">
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">Yes</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">-</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">-</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                        </ul>
                                        <div className="plan-footer flex-column d-flex align-items-center justify-content-center">
                                            <p className="mb-0 price-label">$99.99<span className="month-label">/ month</span></p>
                                            <p className="f-15 mb-3 pb-1">dolor text dummy lorem</p>
                                            <button className="f-15 text-uppercase btn pinkline-btn min-height-50 min-width-170 border-radius-25">Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper plan-month-wrapper pl-0 pr-0">
                                <div className="plan-details bg-white">
                                    <div className="plan-head d-flex align-items-center justify-content-center flex-column">
                                        <h5 className="brandon-Medium text-center mb-1 text-uppercase">Basic</h5>
                                        <p className="text-center mb-0 f-15 gray-txt">(Free 3 month trial) </p>
                                    </div>
                                    <div className="plan-listing">
                                        <ul className="mb-0">
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">Yes</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">-</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <p class="mb-0 f-15">-</p>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                            <li class="d-flex align-items-center justify-content-center">
                                                <img src={tickimg} className="img-fluid" />
                                            </li>
                                        </ul>
                                        <div className="plan-footer flex-column d-flex align-items-center justify-content-center">
                                            <p className="gray-txt mb-0 price-label">$99.99<span className="month-label">/ month</span></p>
                                            <p className="f-15 gray-txt mb-3 pb-1">dolor text dummy lorem</p>
                                            <button className="f-15 text-uppercase btn pinkline-btn min-height-50 min-width-170 border-radius-25">Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div class="patternimg-wrapper">
                                <img src={pattern_img} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurVisionComponent />
            <LoginPageFooter />
        </>
    )
}

export default LoginPage;