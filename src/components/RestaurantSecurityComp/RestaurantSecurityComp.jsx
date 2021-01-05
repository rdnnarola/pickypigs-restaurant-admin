import React, { useState } from "react";
import './RestaurantSecurityComp.scss';

const RestaurantSecurityComp = () => {
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
    }
    const handleCancleEdit = (e) => {
        setEditRestInfo({ ...restInfo })
        setEditForm(true)
    }
    return (
        <>
            <div className="row RestaurantSecurityComp-container main-accordion-wrapper">
                <div className="col-sm-12">
                    <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExample">
                        <div className="accordion-item">
                            <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingOne">
                                <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className="accordion-title">
                                        <h5 className="brandon-Bold mb-0">SECURITY</h5>
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
                                                <h5 className="accordion-label">CURRENT PASSWORD</h5>
                                                <input type="password" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="admin" onChange={handleChange} value={editRestInfo.admin} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {!editForm &&
                                                <React.Fragment>
                                                    <div className="rs-info-block">
                                                        <h5 className="accordion-label">NEW PASSWORD</h5>
                                                        <input type="password" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="name" onChange={handleChange} value={editRestInfo.name} />
                                                    </div>
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        {editForm
                                            ?
                                            <div className="col-sm-12">
                                                <h5 className="f-15 gray-txt mb-0">* Two factor authentication by phone number</h5>
                                            </div>
                                            :
                                            <div className="col-sm-12 d-flex flex-wrap">
                                                <div className="custom-control custom-checkbox pink-checkbox mr-4 pr-2">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label gray-control-label f-15" htmlFor="customCheck1">Two factor authentication by phone number</label>
                                                </div>
                                                <div className="custom-control custom-checkbox pink-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label gray-control-label f-15" htmlFor="customCheck2">Two factor authentication by email</label>
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

export default RestaurantSecurityComp;