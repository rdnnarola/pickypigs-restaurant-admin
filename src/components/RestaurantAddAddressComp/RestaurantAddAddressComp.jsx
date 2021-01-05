import React, { useState } from "react";
import './RestaurantAddAddressComp.scss';

const RestaurantAddAddressComp = () => {
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
            <div className="row RestaurantAddAddressComp-container main-accordion-wrapper">
                <div className="col-sm-12">
                    <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExample">
                        <div className="accordion-item">
                            <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingOne">
                                <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className="accordion-title">
                                        <h5 className="brandon-Bold mb-0">ADD ADDRESS</h5>
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
                                    <div className="row mb-4 mt-2">
                                        <div className="col-md-6">
                                            <div className="rs-info-block">
                                                <h5 className="accordion-label">STREET</h5>
                                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="login" onChange={handleChange} value={editRestInfo.login} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="rs-info-block">
                                                <h5 className="accordion-label">LOCALITY</h5>
                                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="email" onChange={handleChange} value={editRestInfo.email} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="rs-info-block">
                                                <h5 className="accordion-label">PIN CODE</h5>
                                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="phone_number" onChange={handleChange} value={editRestInfo.phone_number} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="rs-info-block">
                                                <h5 className="accordion-label">ZIP CODE</h5>
                                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="location" onChange={handleChange} value={editRestInfo.location} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2 pt-2">
                                        {editForm
                                            ?
                                            <div className="col-sm-12">
                                                <h5 className="accordion-label f-15 gray-txt mb-0">* Location Map added</h5>
                                            </div>
                                            :
                                            <div className="col-sm-12 flex-wrap d-flex">
                                                <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label gray-control-label" htmlFor="customCheck1">Add location map</label>
                                                </div>
                                                <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label gray-control-label" htmlFor="customCheck2">Share location option</label>
                                                </div>
                                                <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label gray-control-label" htmlFor="customCheck2">Get direction option</label>
                                                </div>
                                            </div>
                                        }
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

export default RestaurantAddAddressComp;