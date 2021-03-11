import React, { useState } from "react";
import './RestaurantUserDetailComp.scss';

const RestaurantUserDetailComp=()=>{
    const [editForm,setEditForm]=useState(true);
    const [restInfo,setRestInfo]=useState({
        admin:"RESTA1",
        name:"M.Joe",
        location:"Street, Area, Country",
    });
    const [editRestInfo,setEditRestInfo]=useState({
        admin:"RESTA1",
        name:"M.Joe",
        location:"Street, Area, Country",
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
        <section className="RestaurantUserDetailComp-container">
            <div>
                <div className="p-4 my_shadow accordion" id="accordionExample">
                    <div className="accordion-item">
                        <div className="d-flex justify-content-between align-items-center accordion-header" id="headingOne">
                            <div className="w-100 accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="">
                                    <h5 className="brandon-Medium mb-0">INFO</h5>
                                </div>
                                <div className="expand-button"></div>

                            </div>
                                {editForm 
                                ?
                                <button className="custom_edit_button mr-5" onClick={()=>{setEditForm(false)}}>EDIT</button>
                                :
                                <div  className="d-flex justify-content-between align-items-center mr-5">
                                    <button onClick={handleCancleEdit}>cancel</button>
                                    <button>Save</button>
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
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h5>ADMIN</h5>
                                        <input type="text" readOnly={editForm}  className={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="admin" onChange={handleChange} value={editRestInfo.admin}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>USER NAME</h5>
                                        <input type="text" readOnly={editForm}  className={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="name" onChange={handleChange} value={editRestInfo.name}/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h5>LOCATIO</h5>
                                        <input type="text" readOnly={editForm}  className={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="location" onChange={handleChange} value={editRestInfo.location}/>
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