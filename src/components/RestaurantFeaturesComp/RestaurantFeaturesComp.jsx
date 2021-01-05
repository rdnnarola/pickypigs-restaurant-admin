import React, { useState } from "react";
import './RestaurantFeaturesComp.scss';

const RestaurantFeaturesComp = () => {
    const [editForm, setEditForm] = useState(true);
    const [restInfo, setRestInfo] = useState({
        login: "RESTA1",
        email: "Michael.Joe@gmail.com",
        phone_number: "+44 1234567890",
        location: "Street, Area, Country",
        mobile_number: "+44 1234567890"
    });
    const [editRestInfo, setEditRestInfo] = useState({
        login: "RESTA1",
        email: "Michael.Joe@gmail.com",
        phone_number: "+44 1234567890",
        location: "Street, Area, Country",
        mobile_number: "+44 1234567890"
    });
    const handleChange = (e) => {
        setEditRestInfo({ ...editRestInfo, [e.target.name]: e.target.value });
    }
    const handleCancleEdit = (e) => {
        setEditRestInfo({ ...restInfo })
        setEditForm(true)
    }
    return (
        <>
            <div className="row RestaurantFeaturesComp-container main-accordion-wrapper">
                <div className="col-sm-12">
                    <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExample">
                        <div className="accordion-item">
                            <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingOne">
                                <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className="accordion-title">
                                        <h5 className="brandon-Bold mb-0">RESTAURANT FEATURES</h5>
                                    </div>
                                    <div className="expand-button position-absolute top-0 right-0"></div>

                                </div>
                                {editForm
                                    ?
                                    <button className="custom_edit_button mr-5 brandon-Medium" onClick={() => { setEditForm(false) }}>EDIT</button>
                                    :
                                    <div className="d-flex justify-content-between align-items-center mr-5">
                                        <button className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15" onClick={handleCancleEdit}>cancle</button>
                                        <button className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15">Save</button>
                                    </div>
                                }
                            </div>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <hr className="gray-hr"></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p className="f-15 mb-2">Opening Timings</p>
                                            <p className="f-13 gray-txt">Time is in 24h format</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="opening-month-time d-flex align-items-center flex-wrap mb-3">
                                                <div className="month-label">
                                                    <p className="f-15 mb-0">Monday</p>
                                                </div>
                                                <div className="timeing-main-wrapper d-flex align-items-center">
                                                    <div className="timeing-block d-flex align-items-center">
                                                        <input type="text" className="timeing-input form-control text-center" value="09:00" disabled/>
                                                    </div>
                                                    <div className="timeing-dash">
                                                    </div>
                                                    <div className="timeing-block d-flex align-items-center">
                                                        <input type="text" className="timeing-input form-control text-center" value="21:00" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opening-month-time d-flex align-items-center flex-wrap mb-3">
                                                <div className="month-label">
                                                    <p className="f-15 mb-0">Tuesday</p>
                                                </div>
                                                <div className="timeing-main-wrapper d-flex align-items-center">
                                                    <div className="timeing-block d-flex align-items-center">
                                                        <input type="text" className="timeing-input form-control text-center" value="09:00" disabled/>
                                                    </div>
                                                    <div className="timeing-dash">
                                                    </div>
                                                    <div className="timeing-block d-flex align-items-center">
                                                        <input type="text" className="timeing-input form-control text-center" value="21:00" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opening-month-time d-flex align-items-center flex-wrap mb-3">
                                                <div className="month-label">
                                                    <p className="f-15 mb-0">Wednesday</p>
                                                </div>
                                                <div className="timeing-main-wrapper d-flex align-items-center">
                                                    <div className="timeing-block d-flex align-items-center">
                                                        <input type="text" className="timeing-input form-control text-center" value="09:00" disabled/>
                                                    </div>
                                                    <div className="timeing-dash">
                                                    </div>
                                                    <div className="timeing-block d-flex align-items-center">
                                                        <input type="text" className="timeing-input form-control text-center" value="21:00" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <hr className="gray-hr" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-12 mb-2">
                                            <p className="f-15 mb-4">Average cost for two persons (approx.)</p>
                                            <p className="f-15">Min $10:00</p>
                                            <p className="f-15 gray-txt mb-2">* Inclusive taxes and charges if any</p>
                                            <p className="f-15 gray-txt mb-2">* Cash accept</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <hr className="gray-hr" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-12">
                                            <p className="f-15 mb-4">Cuisine type from below options</p>
                                            <div className="option-tag-main d-flex flex-wrap">
                                                <div className="option-tag active">
                                                    <span>Steak</span>
                                                </div>
                                                <div className="option-tag">
                                                    <span>Fast Food</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-12">
                                            <hr className="gray-hr" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-12">
                                            <p className="f-15 mb-4">Restaurant Features</p>
                                            <div className="option-tag-main d-flex flex-wrap">
                                                <div className="option-tag active">
                                                    <span>Steak</span>
                                                </div>
                                                <div className="option-tag">
                                                    <span>Fast Food</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantFeaturesComp;