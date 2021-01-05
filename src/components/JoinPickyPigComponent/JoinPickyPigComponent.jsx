import React from "react";
import './JoinPickyPigComponent.scss';
import benefit_icon from "../../assets/images/benefits-icon.svg"
import feature_icon from "../../assets/images/features-icon.svg"


const JoinPickyPigComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="joinpicky-wrapper">
                        <h1 className="heading-content brandon-Bold text-center text-white mb-4 pb-2">JOIN PICKY PIGS</h1>
                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <div className="joinpicky-list-wrapper">
                                    <div className="joinlist-head mb-4 d-flex align-items-center">
                                        <div className="joinlist-icon position-absolute d-flex align-items-center justify-content-center">
                                            <img src={benefit_icon} className="img-fluid" />
                                        </div>
                                        <h4 className="text-uppercase brandon-Bold mb-0 text-white pl-5 ml-2">BENEFITS</h4>
                                    </div>
                                    <ul className="joinpicky-lists pl-3 mb-0">
                                        <li className="text-white mb-3 f-15">The ultimate food finding application.</li>
                                        <li className="text-white mb-3 f-15">Give accurate and transparent allergy information.</li>
                                        <li className="text-white mb-3 f-15">Protect your team and guests.</li>
                                        <li className="text-white mb-3 f-15">Deliver amazing customer service as the menu, choosing and ordering process is taken care of.</li>
                                        <li className="text-white mb-3 f-15">Easily updated with new dishes and ingredients.</li>
                                        <li className="text-white mb-3 f-15">Present your live menu for guests to see and personalise.</li>
                                        <li className="text-white mb-3 f-15">Eliminate as much human error as possible.</li>
                                        <li className="text-white mb-3 f-15">Save time and money on actual sta4 on shift hours, on time spent updating menus and recipes, on printing materials and menus.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="joinpicky-list-wrapper features-list">
                                    <div className="joinlist-head mb-4 d-flex align-items-center">
                                        <div className="joinlist-icon position-absolute d-flex align-items-center justify-content-center">
                                            <img src={feature_icon} className="img-fluid" />
                                        </div>
                                        <h4 className="text-uppercase brandon-Bold mb-0 text-white pl-5 ml-2">FEATURES</h4>
                                    </div>
                                    <ul className="joinpicky-lists pl-3 mb-0">
                                        <li className="text-white mb-3 f-15">Easy upload option / recipe and dish builder</li>
                                        <li className="text-white mb-3 f-15">Calculate calorie and macros of each dish</li>
                                        <li className="text-white mb-3 f-15">Link to the POS for fast on-boarding</li>
                                        <li className="text-white mb-3 f-15">User friendly experience</li>
                                        <li className="text-white mb-3 f-15">User friendly dashboard to create dishes and your menu.</li>
                                        <li className="text-white mb-3 f-15">Reporting tool to track orders, allergens, and servers</li>
                                        <li className="text-white mb-3 f-15">Add multiple filters to each dish.</li>
                                        <li className="text-white mb-3 f-15">Multisite capabilities.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default JoinPickyPigComponent;