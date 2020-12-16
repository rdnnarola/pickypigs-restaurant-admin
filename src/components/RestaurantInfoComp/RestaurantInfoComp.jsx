import React, { useState } from "react";
import './RestaurantInfoComp.scss';

const RestaurantInfoComp=()=>{
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
        <section className="RestaurantInfoComp-container">
            <div>
                <div class="p-4 my_shadow accordion" id="accordionExample">
                    <div class="accordion-item">
                        <div class="d-flex justify-content-between align-items-center accordion-header" id="headingOne">
                            <div class="w-100 accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="">
                                    <h5 className="brandon-Medium mb-0">INFO</h5>
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
                                        <h5>LOGIN</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="login" onChange={handleChange} value={editRestInfo.login}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>EMAI</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="email" onChange={handleChange} value={editRestInfo.email}/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h5>PHONE NUMBE</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="phone_number" onChange={handleChange} value={editRestInfo.phone_number}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>LOCATIO</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="location" onChange={handleChange} value={editRestInfo.location}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>MOBILE NUMBE</h5>
                                        <input type="text" readOnly={editForm}  class={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="mobile_number" onChange={handleChange} value={editRestInfo.mobile_number}/>
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

export default RestaurantInfoComp;