import React, { useState } from "react";
import './RestaurantSecurityComp.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import {updateRestaurantInfoDetail} from '../../redux/actions/restaurantSettingAction'
import showpassword from "../../assets/images/eye_icon.svg";

const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);

const RestaurantSecurityComp = (props) => {
    let {password,twoFactorAuthenticationPhoneNumber,twoFactorAuthenticationEmail}=props.securitydata
    const dispatch=useDispatch();
    const [editForm, setEditForm] = useState(true);
    const [type, setType] = useState("password")

   
    const handlePassword=()=>{
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }
    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
    }

    const initialValues = {
        password:'',
        twoFactorAuthenticationPhoneNumber:twoFactorAuthenticationPhoneNumber?twoFactorAuthenticationPhoneNumber:false,
        twoFactorAuthenticationEmail:twoFactorAuthenticationEmail?twoFactorAuthenticationEmail:false,
       
    }

    const validationSchema  = Yup.object().shape({
        password:Yup
        .string()
        .label('Password')
        .min(8, 'Seems a bit short(Min 8 characters)...')
        .max(24, 'Please try a shorter password(Max 24 characters)...).')
        .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
        twoFactorAuthenticationPhoneNumber:Yup.boolean().oneOf([true,false]),
        twoFactorAuthenticationEmail:Yup.boolean().oneOf([true,false]),
    });

    const onSubmit=(fields)=>{
        let obj={};
        if(fields.password){
            obj={
                password:fields.password,
                twoFactorAuthenticationPhoneNumber:fields.twoFactorAuthenticationPhoneNumber,
                twoFactorAuthenticationEmail:fields.twoFactorAuthenticationEmail
            }
        }else{
            obj={
                twoFactorAuthenticationPhoneNumber:fields.twoFactorAuthenticationPhoneNumber,
                twoFactorAuthenticationEmail:fields.twoFactorAuthenticationEmail
            }
        }
        dispatch(updateRestaurantInfoDetail({security:obj}));
        setEditForm(true)
    }
    return (
        <>
            <section className="RestaurantSecurityComp">
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, resetForm, setFieldValue,handleChange,values }) => {
                            return (
                                <Form>
                                    <div className="row RestaurantSecurityComp-container main-accordion-wrapper">
                                        <div className="col-sm-12">
                                            <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExampleTwo">
                                                <div className="accordion-item">
                                                    <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingOne">
                                                        <div >
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">SECURITY</h5>
                                                            </div>
                                                            <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                {editForm&&
                                                                    <div className="ml-5 expand-button position-absolute top-0 right-0"></div>
                                                                }
                                                            </div>
                                                        </div>
                                                        {editForm
                                                            ?
                                                            <button className="custom_edit_button mr-5 brandon-Medium" type="button" onClick={() => { setEditForm(false) }}>EDIT</button>
                                                            :
                                                            <div className="d-flex justify-content-between align-items-center ">
                                                                <button className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15" type="reset" onClick={()=>{handleCancleEdit(resetForm);}}>cancle</button>
                                                                <button className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15" type="submit">Save</button>
                                                            </div>
                                                        }
                                                    </div>
                                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExampleTwo">
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
                                                                        <input type="password" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`}  value="password" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 position-relative">
                                                                    <div className="rs-info-block">
                                                                        {!editForm&&
                                                                        <React.Fragment>
                                                                            <h5 className="accordion-label">NEW PASSWORD</h5>
                                                                            <Field type={type} name="password"  placeholder="Password" className="form-control-inputtext form-control" />
                                                                            {!editForm&&
                                                                            <div className="showpassword-block" id="password" onClick={() => handlePassword()}>
                                                                                <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                                            </div>
                                                                            }
                                                                            {touched.password && errors.password && <div className="error pink-txt f-11">{errors.password}</div>}
                                                                        </React.Fragment>
                                                                    }
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row mb-2">
                                                                {editForm
                                                                    ?
                                                                    <div className="col-sm-12 d-flex flex-wrap">
                                                                        <React.Fragment>
                                                                            {values.twoFactorAuthenticationPhoneNumber&&
                                                                                <h5 className="f-15 gray-txt mb-0 mr-4">* Two factor authentication by phone number</h5>
                                                                            }
                                                                        </React.Fragment>
                                                                        <React.Fragment>
                                                                            {values.twoFactorAuthenticationEmail&&
                                                                                <h5 className="f-15 gray-txt mb-0">* Two factor authentication by email</h5>
                                                                            }
                                                                        </React.Fragment>
                                                                    </div>
                                                                    :
                                                                    <div className="col-sm-12 d-flex flex-wrap">
                                                                        <div className="custom-control custom-checkbox pink-checkbox mr-4 pr-2">
                                                                            <Field type="checkbox" name="twoFactorAuthenticationPhoneNumber" id="twoFactorAuthenticationPhoneNumber"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label f-15" htmlFor="twoFactorAuthenticationPhoneNumber">Two factor authentication by phone number</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox pink-checkbox">
                                                                            <Field type="checkbox" name="twoFactorAuthenticationEmail" id="twoFactorAuthenticationEmail"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label f-15" htmlFor="twoFactorAuthenticationEmail">Two factor authentication by email</label>
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
                                </Form>
                            );
                        }}
                    </Formik>
                </React.Fragment>
            </section>
        </>
    )
}

export default RestaurantSecurityComp;