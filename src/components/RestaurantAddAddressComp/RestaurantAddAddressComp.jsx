import React, { useEffect, useState } from "react";
import './RestaurantAddAddressComp.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import {updateRestaurantInfoDetail} from '../../redux/actions/restaurantSettingAction'
// import GoogleMapTestComp from "../../view/RestaurantDetailPage/GoogleMapTestComp/GoogleMapTestComp";
// import { SERVER_URL,API_KEY } from '../../shared/constant'
import { getCoordinateData, getGoogleAddressData, getLocatityData, getPostalCodeData, getStreetNameData } from "../../redux/actions/googleAction";
import MyfilterListExample from "../MyfilterListExample/MyfilterListExample";
import MyfilterListExampleCopy from "../MyfilterListExampleCopy/MyfilterListExampleCopy";
// import {MyfilterListExample} from '../MyfilterListExample/MyfilterListExample'

const RestaurantAddAddressComp = (props) => {
    let {googleAddress,street,zipcode,locality,pincode,addLocationMap,getDirectionOption,shareLocationOption,map}=props.addressdata
    const dispatch=useDispatch();
    const [editForm, setEditForm] = useState(true);

    useEffect(()=>{
        dispatch(getCoordinateData(map&&map.coordinates.toString()))
        dispatch(getPostalCodeData(props.addressdata&&props.addressdata.pincode))
        dispatch(getStreetNameData(props.addressdata&&props.addressdata.street))
        dispatch(getLocatityData(props.addressdata&&props.addressdata.locality))
        dispatch(getGoogleAddressData(props.addressdata&&props.addressdata.googleAddress))

    },[dispatch]);
    
    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
        dispatch(getCoordinateData(map&&map.coordinates.toString()))
        dispatch(getPostalCodeData(props.addressdata&&props.addressdata.pincode))
        dispatch(getStreetNameData(props.addressdata&&props.addressdata.street))
        dispatch(getLocatityData(props.addressdata&&props.addressdata.locality))
        dispatch(getGoogleAddressData(props.addressdata&&props.addressdata.googleAddress))
    }

    let Restaurant_Location = useSelector((state) => {
        return state.googleData
      });
    let {isLoading}=Restaurant_Location
    // const getSelectedLocationData=(Restaurant_Location)=>{
    //    let data= Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("postal_code") !== -1)
    //    console.log(data.long_name)
    // }
    const initialValues = {
        street:street?street:'',
        zipcode:zipcode?zipcode:'',
        locality:locality?locality:'',
        pincode:pincode?pincode:'',
        addLocationMap:addLocationMap?addLocationMap:false,
        getDirectionOption:getDirectionOption?getDirectionOption:false,
        shareLocationOption:shareLocationOption?shareLocationOption:false,
        coordinates:map?map.coordinates:[],
        googleAddress:googleAddress?googleAddress:'',
        myPincode:Restaurant_Location&&Restaurant_Location.postalcode?Restaurant_Location&&Restaurant_Location.postalcode:"",
        myStreet:Restaurant_Location&&Restaurant_Location.streetName?Restaurant_Location&&Restaurant_Location.streetName:"",
        myLocality:Restaurant_Location&&Restaurant_Location.localityData?Restaurant_Location&&Restaurant_Location.localityData:"",
        myGoogleAddress:Restaurant_Location&&Restaurant_Location.address_Data?Restaurant_Location&&Restaurant_Location.address_Data:"",

    }

    const validationSchema  = Yup.object().shape({
        // street:Yup.string().required('street Name is required'),
        // locality:Yup.string().required('locality is required'),
        myPincode:Yup.number().required('Pincode is required. Please set a more precise location!'),
        addLocationMap:Yup.boolean().oneOf([true,false]),
        getDirectionOption:Yup.boolean().oneOf([true,false]),
        shareLocationOption:Yup.boolean().oneOf([true,false]),
        // coordinates:Yup.array().required('Please Select MapLocation'),
        googleAddress:Yup.string(),
        myGoogleAddress:Yup.string(),
        myStreet:Yup.string().required('Street Name is required. Please set a more precise location!'),
        myLocality:Yup.string().required('Street Name is required. Please set a more precise location!'),


     });
    const onSubmit=(fields)=>{

        let obj={
            street:fields.myStreet,
            zipcode:fields.myPincode,
            locality:fields.myLocality,
            pincode:fields.myPincode,
            addLocationMap:fields.addLocationMap,
            getDirectionOption:fields.getDirectionOption,
            shareLocationOption:fields.shareLocationOption,
            googleAddress:fields.myGoogleAddress,
            map: {
                type:"point",
                coordinates: Restaurant_Location&&Restaurant_Location.coordinate_data.split(',')
            }
        }

        dispatch(updateRestaurantInfoDetail({address:obj}));
        setEditForm(true)
    }
    return (
        <>
            <section className="RestaurantAddAddressComp">
               {/* {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("route") !== -1) )} */}
               {/*   {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("country") !== -1) )}
                {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("sublocality_level_1") !== -1) )}
                {JSON.stringify(Restaurant_Location&&Restaurant_Location.address_Data&&Restaurant_Location.address_Data.filter(myallergy => myallergy.types.indexOf("administrative_area_level_2") !== -1) )}
 */}
{/* {JSON.stringify( Restaurant_Location&&Restaurant_Location.coordinate_data  )} */}
{/* {JSON.stringify( Restaurant_Location&&Restaurant_Location.postalcode  )} */}


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
                                                                <button className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15" type="reset" onClick={()=>{handleCancleEdit(resetForm);}}>cancel</button>
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
                                                            {editForm?
                                                            null
                                                            :
                                                            <div className="row  mb-4 mt-2">
                                                                <div className="col-sm-12">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">Search Location</h5>
                                                                        <React.Fragment>
                                                                            <MyfilterListExampleCopy/>
                                                                        </React.Fragment>
                                                                       
                                                                        {/* <React.Fragment>
                                                                            <MyfilterListExample coordinates={Restaurant_Location&&Restaurant_Location.coordinate_data}/>
                                                                        </React.Fragment> */}
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                             }
                                                            <div className="row mb-4">
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">Address</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.googleAddress?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.googleAddress}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">-</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="myGoogleAddress" readOnly={true}  placeholder="Enter Address here" className="form-control-inputtext form-control"/>
                                                                                {touched.myGoogleAddress && errors.myGoogleAddress && <div className="error pink-txt f-11">{errors.myGoogleAddress}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">STREET</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.street?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.street}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">-</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="myStreet" placeholder="Street Name" className="form-control-inputtext form-control"/>
                                                                                {touched.myStreet && errors.myStreet && <div className="error pink-txt f-11">{errors.myStreet}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-4">
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">LOCALITY</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.locality?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.locality}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">-</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="myLocality" placeholder="Locality" className="form-control-inputtext form-control"/>
                                                                                {touched.myLocality && errors.myLocality && <div className="error pink-txt f-11">{errors.myLocality}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="rs-info-block">
                                                                        <h5 className="accordion-label">PIN CODE</h5>
                                                                        {editForm?
                                                                            props.addressdata&&props.addressdata.pincode?
                                                                                <p className="form-control-plaintext text-uppercase">{props.addressdata&&props.addressdata.pincode}</p>
                                                                            :
                                                                                <p className="form-control-plaintext text-uppercase">-</p>
                                                                        :
                                                                            <React.Fragment>
                                                                                <Field name="myPincode" type="number" placeholder="Pincode" className="form-control-inputtext form-control"/>
                                                                                {touched.myPincode && errors.myPincode && <div className="error pink-txt f-11">{errors.myPincode}</div>}
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-4 pt-2">
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
                                                                        <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-5">
                                                                            <Field type="checkbox" name="addLocationMap" id="customCheck1"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label f-15" htmlFor="customCheck1">Add location map</label>
                                                                        </div>
                                                                        <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-5">
                                                                            <Field type="checkbox" name="shareLocationOption" id="customCheck2"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label f-15" htmlFor="customCheck2">Share location option</label>
                                                                        </div>
                                                                        <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-5">
                                                                            <Field type="checkbox" name="getDirectionOption" id="customCheck3"  className="custom-control-input"/>
                                                                            <label className="custom-control-label gray-control-label f-15" htmlFor="customCheck3">Get direction option</label>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                            
                                                            <div className="row" >
                                                                {editForm?
                                                                    null
                                                                :
                                                                    values.addLocationMap?
                                                                        <React.Fragment>
                                                                            {Restaurant_Location&&Restaurant_Location.coordinate_data&&
                                                                                <div className="col-sm-12 mb-2" style={{height:350,width:'100%'}}>
                                                                                    <iframe 
                                                                                        style={{border:'none'}} 
                                                                                        src={`http://maps.google.com/maps?q=${Restaurant_Location&&Restaurant_Location.coordinate_data}&z=16&output=embed`}
                                                                                        height="300" 
                                                                                        width="100%"
                                                                                    >
                                                                                    </iframe>
                                                                                </div>
                                                                            }
                                                                        </React.Fragment>
                                                                    :
                                                                        null
                                                                        
                                                                    
                                                                }
                                                            </div>
                                                            {/* <div className="row" >
                                                                {editForm
                                                                        ?
                                                                        null
                                                                        :
                                                                    <div className="col-sm-12 mb-2" style={{height:350,width:'100%'}}>
                                                                        {touched.coordinates && errors.coordinates && <div className="error pink-txt f-11">{errors.coordinates}</div>}

                                                                        <GoogleMapTestComp
                                                                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}

                                                                            loadingElement={<div style={{ height: `100%` }} />}
                                                                            containerElement={<div style={{ height: `100%` }} />}
                                                                            mapElement={<div style={{ height: `100%` }} />}
                                                                        
                                                                            coordinates={Restaurant_Location&&Restaurant_Location.coordinate_data}
                                                                        />
                                                                    </div>
                                                                }
                                                            </div> */}
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