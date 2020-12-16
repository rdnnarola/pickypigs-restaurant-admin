import React, { useState } from "react";
import './RestaurantAddAddressComp.scss';

const RestaurantAddAddressComp=()=>{
    const [editForm,setEditForm]=useState(true);
    const [restInfo,setRestInfo]=useState({
        login:"RESTA1",
        email:"Michael.Joe@gmail.com",
        phone_number:"+44 1234567890",
        location:"Street, Area, Country",
        mobile_number:"+44 1234567890"
    });
    const [editRestInfo,setEditRestInfo]=useState({
        login:"RESTA1",
        email:"Michael.Joe@gmail.com",
        phone_number:"+44 1234567890",
        location:"Street, Area, Country",
        mobile_number:"+44 1234567890"
    });
    const handleChange=(e)=>{
        setEditRestInfo({...editRestInfo,[e.target.name]:e.target.value});
    }
    const handleCancleEdit=(e)=>{
        setEditRestInfo({...restInfo})
        setEditForm(true)
    }
    return(
        <>
        <section className="RestaurantAddAddressComp-container">
            <div>
                <div class="p-4 my_shadow accordion" id="accordionExample">
                    <div class="accordion-item">
                        <div class="d-flex justify-content-between align-items-center accordion-header" id="headingOne">
                            <div class="w-100 accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="">
                                    <h5 className="brandon-Medium mb-0">ADD ADDRESS</h5>
                                </div>
                                <div className="expand-button"></div>

                            </div>
                                {editForm 
                                ?
                                <button className="custom_edit_button mr-5" onClick={()=>{setEditForm(false)}}>EDIT</button>
                                :
                                <div  class="d-flex justify-content-between align-items-center mr-5">
                                    <button onClick={handleCancleEdit}>cancle</button>
                                    <button>Save</button>
                                </div>
                                }
                        </div>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body ">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <hr className="gray-hr"></hr>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h5>STREET</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="login" onChange={handleChange} value={editRestInfo.login}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>LOCALITY</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="email" onChange={handleChange} value={editRestInfo.email}/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h5>PIN CODE</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="phone_number" onChange={handleChange} value={editRestInfo.phone_number}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>ZIP CODE</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="location" onChange={handleChange} value={editRestInfo.location}/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    {editForm
                                    ?
                                    <div>
                                        <h5>* Location Map added</h5>
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Add location map</label>
                                        </div>
                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Share location option</label>
                                        </div>
                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Get direction option</label>
                                        </div>
                                   </div>
                                    }
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

export default RestaurantAddAddressComp;