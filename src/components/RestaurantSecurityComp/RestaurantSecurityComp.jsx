import React, { useState } from "react";
import './RestaurantSecurityComp.scss';

const RestaurantSecurityComp=()=>{
    const [editForm,setEditForm]=useState(true);
    const [restInfo,setRestInfo]=useState({
        admin:"RESTA1",
        name:"M.Joe",
        location:"Street, Area, Country",
    });
    const [editRestInfo,setEditRestInfo]=useState({
        admin:"RESTA1",
        name:"",
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
        <section className="RestaurantSecurityComp-container">
            <div>
                <div className="p-4 my_shadow accordion" id="accordionExample">
                    <div className="accordion-item">
                        <div className="d-flex justify-content-between align-items-center accordion-header" id="headingOne">
                            <div className="w-100 accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="">
                                    <h5 className="brandon-Medium mb-0">SECURITY</h5>
                                </div>
                                <div className="expand-button"></div>

                            </div>
                                {editForm 
                                ?
                                <button className="custom_edit_button mr-5" onClick={()=>{setEditForm(false)}}>EDIT</button>
                                :
                                <div  className="d-flex justify-content-between align-items-center mr-5">
                                    <button onClick={handleCancleEdit}>cancle</button>
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
                                        <h5>CURRENT PASSWORD</h5>
                                        <input type="password" readOnly={editForm}  className={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="admin" onChange={handleChange} value={editRestInfo.admin}/>
                                    </div>
                                    <div className="col-md-6">
                                        {!editForm&&
                                            <React.Fragment>
                                                <h5>NEW PASSWORD</h5>
                                                <input type="password" readOnly={editForm}  className={` ${editForm?"form-control-plaintext":"form-control-inputtext"}`} name="name" onChange={handleChange} value={editRestInfo.name}/>
                                            </React.Fragment>
                                        }
                                        </div>
                                </div>

                                <div className="row mb-4">
                                    {editForm
                                    ?
                                    <div>
                                        <h5>* Two factor authentication by phone number</h5>
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Two factor authentication by phone number</label>
                                        </div>
                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Two factor authentication by email</label>
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

export default RestaurantSecurityComp;