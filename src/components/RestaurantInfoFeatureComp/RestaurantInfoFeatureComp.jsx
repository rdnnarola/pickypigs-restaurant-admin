import React, { useEffect, useState } from "react";
import './RestaurantInfoFeatureComp.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurantInfoDetail } from '../../redux/actions/restaurantSettingAction'
import { getAllCuisineData, getAllRestaurantFeaturesData } from "../../redux/actions/allergyAction";

const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const RestaurantInfoFeatureComp = (props) => {
    let { averageCostOfTwoPerson, cardAccept, cashAccept, inclusiveTaxesAndCharges, cuisineType, restaurantFeaturesOptions, appliesOfRestaurant } = props.featuredata
    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState(true);
    useEffect(() => {
        dispatch(getAllRestaurantFeaturesData());
        dispatch(getAllCuisineData())
    }, [dispatch])

    let allAllergy_data = useSelector((state) => {
        return state.allergy
    });
    let { isLoading, restaurantFeatures_Data, cuisine_Data } = allAllergy_data;

    const handleRestaurant = (e, restaurant, setFieldValue) => {
        e.preventDefault();
        if (restaurant.indexOf(e.target.id) !== -1) {
            var Index = restaurant.indexOf(e.target.id);
            if (Index > -1) {
                setFieldValue("restaurantFeaturesOptions", restaurant.filter(myrestaurant => myrestaurant !== e.target.id));
            }
        } else {
            setFieldValue("restaurantFeaturesOptions", [...restaurant, e.target.id]);
        }
    }

    const handleCuisineType = (e, cuisine, setFieldValue) => {
        e.preventDefault();
        if (cuisine.indexOf(e.target.id) !== -1) {
            var Index = cuisine.indexOf(e.target.id);
            if (Index > -1) {
                setFieldValue("cuisineType", cuisine.filter(mycuisine => mycuisine !== e.target.id));
            }
        } else {
            setFieldValue("cuisineType", [...cuisine, e.target.id]);
        }
    }
    const handleInputBoxDataUpdate = (data, values, setFieldValue, filed) => {
        if (values.indexOf(data) !== -1) {
            var Index = values.indexOf(data);
            if (Index > -1) {
                alert("data already")
            }
        } else {
            setFieldValue(filed, [...values, data])
        }

    }

    const handleInputBoxDataRemove = (data, values, setFieldValue, filed) => {
        setFieldValue(filed, values.filter(myallergy => myallergy !== data))
    }

    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
    }

    const initialValues = {
        averageCostOfTwoPerson: props.featuredata && props.featuredata.averageCostOfTwoPerson ? averageCostOfTwoPerson : '',
        cardAccept: props.featuredata && props.featuredata.cardAccept ? cardAccept : false,
        cashAccept: props.featuredata && props.featuredata.cashAccept ? cashAccept : false,
        inclusiveTaxesAndCharges: props.featuredata && props.featuredata.inclusiveTaxesAndCharges ? inclusiveTaxesAndCharges : false,
        cuisineType: props.featuredata && props.featuredata.cuisineType ? cuisineType : [],
        restaurantFeaturesOptions: props.featuredata && props.featuredata.restaurantFeaturesOptions ? restaurantFeaturesOptions : [],
        appliesOfRestaurant: props.featuredata && props.featuredata.appliesOfRestaurant ? appliesOfRestaurant : [],
        appliesOfRestaurant2: "",

    }

    const validationSchema = Yup.object().shape({
        averageCostOfTwoPerson: Yup.string().required('Cost Per TWo Person is required'),
        appliesOfRestaurant: Yup.array().required('Applies Of Restaurant is required'),

    });

    const onSubmit = (fields) => {
        let obj = {
            averageCostOfTwoPerson: fields.averageCostOfTwoPerson,
            cardAccept: fields.cardAccept,
            cashAccept: fields.cashAccept,
            inclusiveTaxesAndCharges: fields.inclusiveTaxesAndCharges,
            cuisineType: fields.cuisineType,
            restaurantFeaturesOptions: fields.restaurantFeaturesOptions,
            appliesOfRestaurant: fields.appliesOfRestaurant,
        }
        dispatch(updateRestaurantInfoDetail({ restaurantFeatures: obj }));
        setEditForm(true)
    }

    return (
        <>
            <section className="RestaurantInfoFeatureComp">
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, resetForm, setFieldValue, handleChange, values }) => {
                            return (
                                <Form>
                                    <div className="row RestaurantInfoComp-container main-accordion-wrapper">
                                        <div className="col-sm-12">
                                            <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExampleFive">
                                                <div className="accordion-item">
                                                    <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingFive">
                                                        <div >
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">RESTAURANT FEATURES</h5>
                                                            </div>
                                                            <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                {editForm &&
                                                                    <div className="ml-5 expand-button position-absolute top-0 right-0"></div>
                                                                }
                                                            </div>
                                                        </div>
                                                        {editForm
                                                            ?
                                                            <button className="custom_edit_button mr-5 brandon-Medium" type="button" onClick={() => { setEditForm(false) }}>EDIT</button>
                                                            :
                                                            <div className="d-flex justify-content-between align-items-center ">
                                                                <button className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15" type="reset" onClick={() => { handleCancleEdit(resetForm); }}>cancel</button>
                                                                <button className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15" type="submit">Save</button>
                                                            </div>
                                                        }
                                                    </div>
                                                    <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExampleFive">
                                                        <div className="accordion-body ">
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr"></hr>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    {editForm
                                                                        ?
                                                                        <div className="d-flex flex-wrap pl-0">
                                                                            <p className="f-15 mb-4 brandon-Medium">Average cost for two persons (approx.)</p>

                                                                            <React.Fragment>
                                                                                {values.averageCostOfTwoPerson &&
                                                                                    <div className="col-sm-12 pl-0">
                                                                                        <p className="f-15 brandon-Medium mb-2 ">Min ${values.averageCostOfTwoPerson}</p>
                                                                                    </div>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.inclusiveTaxesAndCharges &&
                                                                                    <div className="col-sm-12 pl-0">
                                                                                        <p className="f-13 gray-txt mr-4 mb-2 ">*Inclusive taxes and charges if any</p>
                                                                                    </div>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.cashAccept &&
                                                                                    <div className="col-sm-12 pl-0">
                                                                                        <p className="f-13 gray-txt mr-4 mb-2 ">*Cash accept</p>
                                                                                    </div>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.cardAccept &&
                                                                                    <div className="col-sm-12 pl-0">
                                                                                        <p className="f-13 gray-txt mr-4 mb-2 ">*Card Accept</p>
                                                                                    </div>
                                                                                }
                                                                            </React.Fragment>

                                                                        </div>
                                                                        :
                                                                        <div className="d-flex flex-wrap pl-0 mb-3">
                                                                            <p className="f-15 mb-2 brandon-Medium">Provide below average cost for two persons (approx.)</p>
                                                                            <div className="col-sm-12 d-flex flex-wrap align-items-center mt-3 pl-0 approx-costinput-wrapper">
                                                                                <div className="pl-0 approx-costinput position-relative mr-5">
                                                                                    <div className="input-doller-sing">$</div>
                                                                                    <Field name="averageCostOfTwoPerson" type="number" placeholder="$" className="form-control-input form-control " />
                                                                                    {touched.averageCostOfTwoPerson && errors.averageCostOfTwoPerson && <div className="error pink-txt f-11">{errors.averageCostOfTwoPerson}</div>}
                                                                                </div>
                                                                                <div className="custom-control custom-checkbox pink-checkbox mr-4">
                                                                                    <Field type="checkbox" name="inclusiveTaxesAndCharges" id="inclusiveTaxesAndCharges" className="custom-control-input" />
                                                                                    <label className="custom-control-label gray-control-label f-15" htmlFor="inclusiveTaxesAndCharges">Inclusive taxes and charges if any</label>
                                                                                </div>
                                                                                <div className="custom-control custom-checkbox pink-checkbox mr-4">
                                                                                    <Field type="checkbox" name="cashAccept" id="cashAccept" className="custom-control-input" />
                                                                                    <label className="custom-control-label gray-control-label f-15" htmlFor="cashAccept">Cash accept</label>
                                                                                </div>
                                                                                <div className="custom-control custom-checkbox pink-checkbox mr-4">
                                                                                    <Field type="checkbox" name="cardAccept" id="cardAccept" className="custom-control-input" />
                                                                                    <label className="custom-control-label gray-control-label f-15" htmlFor="cardAccept">Card Accept</label>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    }

                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr"></hr>
                                                                </div>
                                                            </div>
                                                            {/* {JSON.stringify(values.cuisineType&&values.cuisineType)} */}
                                                            <div className="row mt-2">
                                                                <div className="col-sm-12">
                                                                    <p className="f-15 mb-4 brandon-Medium">Select cuisine type from below options</p>
                                                                    <div className="option-tag-main d-flex flex-wrap">
                                                                        {cuisine_Data && cuisine_Data.data && cuisine_Data.data.map((data, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>
                                                                                    {editForm ?
                                                                                        <React.Fragment>
                                                                                            <button
                                                                                                id={data._id}
                                                                                                type="button"
                                                                                                className={`option-tag mr-4 mb-4 ${props.featuredata && props.featuredata.cuisineType.indexOf(data._id) !== -1 && "active"}`}
                                                                                            >
                                                                                                {data.name}
                                                                                            </button>
                                                                                        </React.Fragment>
                                                                                        :
                                                                                        <React.Fragment>
                                                                                            <button
                                                                                                id={data._id}
                                                                                                type="button"
                                                                                                onClick={(e) => { handleCuisineType(e, values.cuisineType, setFieldValue) }}
                                                                                                className={`option-tag mr-4 mb-4 ${values.cuisineType && values.cuisineType.indexOf(data._id) !== -1 && "active"}`}
                                                                                            >
                                                                                                {data.name}
                                                                                            </button>
                                                                                        </React.Fragment>
                                                                                    }

                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr"></hr>
                                                                </div>
                                                            </div>

                                                            {/* {JSON.stringify(values.restaurantFeaturesOptions&&values.restaurantFeaturesOptions)} */}

                                                            <div className="row mt-2">
                                                                <div className="col-sm-12">
                                                                    <p className="f-15 mb-4 brandon-Medium">Select Restaurant Features from below options</p>
                                                                    <div className="option-tag-main d-flex flex-wrap">
                                                                        {restaurantFeatures_Data && restaurantFeatures_Data.data && restaurantFeatures_Data.data.map((data, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>
                                                                                    {editForm ?
                                                                                        <React.Fragment>
                                                                                            <button
                                                                                                id={data._id}
                                                                                                type="button"
                                                                                                className={`option-tag mr-4 mb-4 ${props.featuredata && props.featuredata.restaurantFeaturesOptions.indexOf(data._id) !== -1 && "active"}`}
                                                                                            >
                                                                                                {data.name}
                                                                                            </button>
                                                                                        </React.Fragment>
                                                                                        :
                                                                                        <React.Fragment>
                                                                                            <button
                                                                                                id={data._id}
                                                                                                type="button"
                                                                                                onClick={(e) => { handleRestaurant(e, values.restaurantFeaturesOptions, setFieldValue) }}
                                                                                                className={`option-tag mr-4 mb-4 ${values.restaurantFeaturesOptions && values.restaurantFeaturesOptions.indexOf(data._id) !== -1 && "active"}`}
                                                                                            >
                                                                                                {data.name}
                                                                                            </button>
                                                                                        </React.Fragment>
                                                                                    }

                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr"></hr>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                {editForm ?
                                                                    <div className="col-sm-12">
                                                                        <h5 className="f-15 mb-4 brandon-Medium">Select which applies to your restaurant</h5>
                                                                        {props.featuredata && props.featuredata.appliesOfRestaurant && props.featuredata.appliesOfRestaurant.length > 0 ?
                                                                            props.featuredata && props.featuredata.appliesOfRestaurant.map((data, index) => {
                                                                                return (
                                                                                    <React.Fragment key={index}>
                                                                                        <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })
                                                                            :
                                                                            <p className="form-control-plaintext gray-txt">No Data Availble...</p>
                                                                        }
                                                                    </div>
                                                                    :
                                                                    <React.Fragment >
                                                                        <div className="col-sm-12">
                                                                            <p className="f-15 mb-0">Select which applies to your restaurant</p>
                                                                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative mb-2 mt-2 pl-0 pr-0 selectapplies-wrapper custom-lightinputbox">
                                                                                <Field name="appliesOfRestaurant2" placeholder="Enter here" className="form-control-input form-control position-relative" />
                                                                                <button type="button"
                                                                                    onClick={() => { handleInputBoxDataUpdate(values.appliesOfRestaurant2, values.appliesOfRestaurant, setFieldValue, "appliesOfRestaurant"); setFieldValue("appliesOfRestaurant2", "") }}
                                                                                    className="add-trans-button" style={{ color: `${values.appliesOfRestaurant2 && '#cb007b'}` }} disabled={!values.appliesOfRestaurant2}>Add</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">
                                                                            {values.appliesOfRestaurant.length == 0 && errors.appliesOfRestaurant && <div className="error pink-txt f-11">{errors.appliesOfRestaurant}</div>}
                                                                            {
                                                                                values && values.appliesOfRestaurant.map((data, index) => {
                                                                                    return (
                                                                                        <React.Fragment key={index}>
                                                                                            <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                <p className="f-14 mb-1">{data}</p>
                                                                                                <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.appliesOfRestaurant, setFieldValue, "appliesOfRestaurant") }}>x</button>
                                                                                            </div>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>

                                                                    </React.Fragment>
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

export default RestaurantInfoFeatureComp;