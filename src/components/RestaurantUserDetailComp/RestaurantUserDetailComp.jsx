import React, { useState } from "react";
import './RestaurantUserDetailComp.scss';

const RestaurantUserDetailComp = () => {
    const [editForm, setEditForm] = useState(true);
    const [restInfo, setRestInfo] = useState({
        admin: "RESTA1",
        name: "M.Joe",
        location: "Street, Area, Country",
    });
    const [editRestInfo, setEditRestInfo] = useState({
        admin: "RESTA1",
        name: "M.Joe",
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
            <section className="RestaurantUserDetailComp-container">
                <div className="row RestaurantInfoComp-container main-accordion-wrapper">
                    <div className="col-sm-12">
                        <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExample">
                            <div className="accordion-item">
                                <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingOne">
                                    <div >
                                        <div className="accordion-title">
                                            <h5 className="brandon-Bold mb-0">INFO</h5>
                                        </div>
                                        <div className="w-100 accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {editForm &&
                                                <div className="ml-5 expand-button position-absolute top-0 right-0"></div>
                                            }
                                        </div>
                                    </div>
                                    {editForm
                                        ?
                                        <button className="custom_edit_button mr-5 brandon-Medium" onClick={() => { setEditForm(false) }}>EDIT</button>
                                        :
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15" onClick={handleCancleEdit}>cancel</button>
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
                                                    <h5 className="accordion-label">ADMIN</h5>
                                                    <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext"}`} name="admin" onChange={handleChange} value={editRestInfo.admin} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="rs-info-block">
                                                    <h5 className="accordion-label">USER NAME</h5>
                                                    <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext"}`} name="name" onChange={handleChange} value={editRestInfo.name} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <div className="rs-info-block">
                                                    <h5 className="accordion-label">LOCATION</h5>
                                                    <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext"}`} name="location" onChange={handleChange} value={editRestInfo.location} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestaurantUserDetailComp;