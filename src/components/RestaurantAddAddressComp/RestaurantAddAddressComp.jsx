import React, { useState } from "react";
import './RestaurantAddAddressComp.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import {updateRestaurantInfoDetail} from '../../redux/actions/restaurantSettingAction'
import GoogleMapTestComp from "../../view/RestaurantDetailPage/GoogleMapTestComp/GoogleMapTestComp";
import { SERVER_URL,API_KEY } from '../../shared/constant'

const RestaurantAddAddressComp = (props) => {
    let {street,zipcode,locality,pincode,addLocationMap,getDirectionOption,shareLocationOption}=props.addressdata
    const dispatch=useDispatch();
    const [editForm, setEditForm] = useState(true);
    
    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
    }

    let Restaurant_Location = useSelector((state) => {
        return state.googleData
      });
    let {address_Data}=Restaurant_Location
    const getSelectedLocationData=(Restaurant_Location)=>{
       let data= Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("postal_code") !== -1)
       console.log(data.long_name)

    }
    const initialValues = {
        street:street?street:'',
        zipcode:zipcode?zipcode:'',
        locality:locality?locality:'',
        pincode:pincode?pincode:'',
        addLocationMap:addLocationMap?addLocationMap:false,
        getDirectionOption:getDirectionOption?getDirectionOption:false,
        shareLocationOption:shareLocationOption?shareLocationOption:false,
       
    }

    const validationSchema  = Yup.object().shape({
        street:Yup.string().required('street Name is required'),
        zipcode:Yup.number().required('zipcode is required'),
        locality:Yup.string().required('locality is required'),
        pincode:Yup.number().required('pincode is required'),
        addLocationMap:Yup.boolean().oneOf([true,false]),
        getDirectionOption:Yup.boolean().oneOf([true,false]),
        shareLocationOption:Yup.boolean().oneOf([true,false]),

     });

    const onSubmit=(fields)=>{
        dispatch(updateRestaurantInfoDetail({address:fields}));
        setEditForm(true)
    }
    return (
        <>
            <section className="RestaurantAddAddressComp">
                {/* {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("postal_code") !== -1) )}
                {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("country") !== -1) )}
                {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("sublocality_level_1") !== -1) )}
                {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("administrative_area_level_2") !== -1) )}
 */}

                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, resetForm, setFieldValue,handleChange,values }) => {
                            return (
                                <Form>
                                    <div className="row RestaurantAddAddressComp-container main-accordion-wrapper">
                                        <div className="col-sm-12">
                                            <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExample3">
                                                <div className="accordion-item">
                                                    <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingThree">
                                                        <div>
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">ADD ADDRESS</h5>
                                                            </div>
                                                            <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
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
                                                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
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
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.street?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.street}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">No Data Availble...</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="street" placeholder="Enter Name here" className="form-control-inputtext form-control"/>
                                                                                {touched.street && errors.street && <div className="error pink-txt f-11">{errors.street}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">LOCALITY</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.locality?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.locality}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">No Data Availble...</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="locality" placeholder="Enter Name here" className="form-control-inputtext form-control"/>
                                                                                {touched.locality && errors.locality && <div className="error pink-txt f-11">{errors.locality}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-4">
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">PIN CODE</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.pincode?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.pincode}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">No Data Availble...</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="pincode" type="number" placeholder="Enter Name here" className="form-control-inputtext form-control"/>
                                                                                {touched.pincode && errors.pincode && <div className="error pink-txt f-11">{errors.pincode}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">ZIP CODE</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.zipcode?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.zipcode}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">No Data Availble...</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="zipcode" type="number" placeholder="Enter Name here" className="form-control-inputtext form-control"/>
                                                                                {touched.zipcode && errors.zipcode && <div className="error pink-txt f-11">{errors.zipcode}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-2 pt-2">
                                                                {editForm
                                                                    ?
                                                                    <div className="col-sm-12">
                                                                            {props.addressdata&&props.addressdata.addLocationMap?
                                                                                <h5 className="accordion-label f-15 gray-txt mb-0">* Location Map added</h5>
                                                                            :
                                                                                <h5 className="accordion-label f-15 gray-txt mb-0">* Location Map Not added</h5>
                                                                            }
                                                                    </div>
                                                                    :
                                                                    <div className="col-sm-12 flex-wrap d-flex">
                                                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                                                            <Field type="checkbox" name="addLocationMap" id="customCheck1"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label" htmlFor="customCheck1">Add location map</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                                                            <Field type="checkbox" name="shareLocationOption" id="customCheck2"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label" htmlFor="customCheck2">Share location option</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox pink-checkbox mr-3">
                                                                            <Field type="checkbox" name="getDirectionOption" id="customCheck3"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label" htmlFor="customCheck3">Get direction option</label>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className="row" >
                                                                {editForm
                                                                        ?
                                                                        null
                                                                        :
                                                                    <div className="col-sm-12" style={{height:350,width:'100%'}}>
                                                                        <GoogleMapTestComp
                                                                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                                                            loadingElement={<div style={{ height: `100%` }} />}
                                                                            containerElement={<div style={{ height: `100%` }} />}
                                                                            mapElement={<div style={{ height: `100%` }} />}
                                                                        />
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

export default RestaurantAddAddressComp;