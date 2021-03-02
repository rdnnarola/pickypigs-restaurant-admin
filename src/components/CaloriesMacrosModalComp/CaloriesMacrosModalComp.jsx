import React, { useState } from "react";
import { Modal, Button, } from "react-bootstrap";
import './CaloriesMacrosModalComp.scss';
import nutritionFactsicon from "../../assets/images/NutritionFacts-icon.svg";
import plusicon from "../../assets/images/plus-icon.svg";
import { Field, Form, Formik, ErrorMessage, FieldArray } from 'formik';
import rightarrow from "../../assets/images/right-arrow.svg";
import * as Yup from 'yup';


const numRegExp = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
const CaloriesMacrosModalComp = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
        total: '',
        fat: {
            weight: '',
            fatUnit: "g",
        },
        totalFat: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        saturatedFat: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        transFat: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        polyunsaturatedFat: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        monounsaturatedFat: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        cholesterol: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        sodium: {
            weight: '',
            weightUnit: "g",
            percentage: '',
        },
        totalCarbohydrate: {
            totalWeight: '',
            weightUnit: "g",
            totalPercentage: '',
        },
        dietaryFiber: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        },
        sugars: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        },
        protien: {
            totalWeight: '',
            weightUnit: "g",
            totalPercentage: '',
        },
        vitaminD: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        },
        calcium: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        },
        iron: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        },
        potassium: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        },
        vitaminA: {
            weight: '',
            weightUnit: "IU",
            percentage: ''
        },
        vitaminC: {
            weight: '',
            weightUnit: "mg",
            percentage: ''
        }
    };
    const initialValues2 = {
        total: props.value.total ? props.value.total : '',
        fat: {
            weight: props.value && props.value.fat ? props.value.fat.weight : '',
            fatUnit: "g",
        },
        totalFat: {
            weight: props.value && props.value.fat && props.value.fat.totalFat && props.value.fat.totalFat.weight ? props.value.fat.totalFat.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.fat && props.value.fat.totalFat && props.value.fat.totalFat.percentage ? props.value.fat.totalFat.percentage : '',
        },
        saturatedFat: {
            weight: props.value && props.value.fat && props.value.fat.saturatedFat && props.value.fat.saturatedFat.weight ? props.value.fat.saturatedFat.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.fat && props.value.fat.saturatedFat && props.value.fat.saturatedFat.percentage ? props.value.fat.saturatedFat.percentage : '',
        },
        transFat: {
            weight: props.value && props.value.fat && props.value.fat.transFat && props.value.fat.transFat.weight ? props.value.fat.transFat.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.fat && props.value.fat.transFat && props.value.fat.transFat.percentage ? props.value.fat.transFat.percentage : '',
        },
        polyunsaturatedFat: {
            weight: props.value && props.value.fat && props.value.fat.polyunsaturatedFat && props.value.fat.polyunsaturatedFat.weight ? props.value.fat.polyunsaturatedFat.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.fat && props.value.fat.polyunsaturatedFat && props.value.fat.polyunsaturatedFat.percentage ? props.value.fat.polyunsaturatedFat.percentage : '',
        },
        monounsaturatedFat: {
            weight: props.value && props.value.fat && props.value.fat.monounsaturatedFat && props.value.fat.monounsaturatedFat.weight ? props.value.fat.monounsaturatedFat.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.fat && props.value.fat.monounsaturatedFat && props.value.fat.monounsaturatedFat.percentage ? props.value.fat.monounsaturatedFat.percentage : '',
        },
        cholesterol: {
            weight: props.value && props.value.cholesterol && props.value.cholesterol.weight ? props.value.cholesterol.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.cholesterol && props.value.cholesterol.percentage ? props.value.cholesterol.percentage : '',
        },
        sodium: {
            weight: props.value && props.value.sodium && props.value.sodium.weight ? props.value.sodium.weight : '',
            weightUnit: "g",
            percentage: props.value && props.value.sodium && props.value.sodium.percentage ? props.value.sodium.percentage : '',
        },
        totalCarbohydrate: {
            totalWeight: props.value && props.value.totalCarbohydrate && props.value.totalCarbohydrate.totalWeight ? props.value.totalCarbohydrate.totalWeight : '',
            weightUnit: "g",
            totalPercentage: props.value && props.value.totalCarbohydrate && props.value.totalCarbohydrate.totalPercentage ? props.value.totalCarbohydrate.totalPercentage : '',
        },
        dietaryFiber: {
            weight: props.value && props.value.totalCarbohydrate && props.value.totalCarbohydrate.dietaryFiber && props.value.totalCarbohydrate.dietaryFiber.weight ? props.value.totalCarbohydrate.dietaryFiber.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.totalCarbohydrate && props.value.totalCarbohydrate.dietaryFiber && props.value.totalCarbohydrate.dietaryFiber.percentage ? props.value.totalCarbohydrate.dietaryFiber.percentage : '',
        },
        sugars: {
            weight: props.value && props.value.totalCarbohydrate && props.value.totalCarbohydrate.sugars && props.value.totalCarbohydrate.sugars.weight ? props.value.totalCarbohydrate.sugars.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.totalCarbohydrate && props.value.totalCarbohydrate.sugars && props.value.totalCarbohydrate.sugars.percentage ? props.value.totalCarbohydrate.sugars.percentage : '',
        },
        protien: {
            totalWeight: props.value && props.value.protien && props.value.protien.totalWeight ? props.value.protien.totalWeight : '',
            weightUnit: "g",
            totalPercentage: props.value && props.value.protien && props.value.protien.totalPercentage ? props.value.protien.totalPercentage : '',
        },
        vitaminD: {
            weight: props.value && props.value.protien && props.value.protien.vitaminD && props.value.protien.vitaminD.weight ? props.value.protien.vitaminD.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.protien && props.value.protien.vitaminD && props.value.protien.vitaminD.percentage ? props.value.protien.vitaminD.percentage : '',
        },
        calcium: {
            weight: props.value && props.value.protien && props.value.protien.calcium && props.value.protien.calcium.weight ? props.value.protien.calcium.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.protien && props.value.protien.calcium && props.value.protien.calcium.percentage ? props.value.protien.calcium.percentage : '',
        },
        iron: {
            weight: props.value && props.value.protien && props.value.protien.iron && props.value.protien.iron.weight ? props.value.protien.iron.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.protien && props.value.protien.iron && props.value.protien.iron.percentage ? props.value.protien.iron.percentage : '',
        },
        potassium: {
            weight: props.value && props.value.protien && props.value.protien.potassium && props.value.protien.potassium.weight ? props.value.protien.potassium.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.protien && props.value.protien.potassium && props.value.protien.potassium.percentage ? props.value.protien.potassium.percentage : '',
        },
        vitaminA: {
            weight: props.value && props.value.protien && props.value.protien.vitaminA && props.value.protien.vitaminA.weight ? props.value.protien.vitaminA.weight : '',
            weightUnit: "IU",
            percentage: props.value && props.value.protien && props.value.protien.vitaminA && props.value.protien.vitaminA.percentage ? props.value.protien.vitaminA.percentage : '',
        },
        vitaminC: {
            weight: props.value && props.value.protien && props.value.protien.vitaminC && props.value.protien.vitaminC.weight ? props.value.protien.vitaminC.weight : '',
            weightUnit: "mg",
            percentage: props.value && props.value.protien && props.value.protien.vitaminC && props.value.protien.vitaminC.percentage ? props.value.protien.vitaminC.percentage : '',
        }
    }


    const validationSchema = Yup.object().shape({
        total: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        fat: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),

        totalFat: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        saturatedFat: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        transFat: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        polyunsaturatedFat: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        monounsaturatedFat: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        cholesterol: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        sodium: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),

        totalCarbohydrate: Yup.object().shape({
            totalWeight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            totalPercentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),

        dietaryFiber: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        sugars: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),


        protien: Yup.object().shape({
            totalWeight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            totalPercentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        vitaminD: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        calcium: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        iron: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        potassium: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        vitaminA: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
        }),
        vitaminC: Yup.object().shape({
            weight: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
            percentage: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),

        })

    });
    const handleCancleEdit = (resetForm) => {
        handleClose();
        resetForm()
    }

    const onSubmit = (fields) => {

        let obj = {
            total: fields.total,
            fat: {
                weight: fields.fat.weight,
                fatUnit: fields.fat.fatUnit,
                totalFat: fields.totalFat,
                saturatedFat: fields.saturatedFat,
                transFat: fields.transFat,
                polyunsaturatedFat: fields.polyunsaturatedFat,
                monounsaturatedFat: fields.monounsaturatedFat,
            },
            cholesterol: fields.cholesterol,
            sodium: fields.sodium,
            totalCarbohydrate: {
                totalWeight: fields.totalCarbohydrate.totalWeight,
                weightUnit: fields.totalCarbohydrate.weightUnit,
                totalPercentage: fields.totalCarbohydrate.totalPercentage,
                dietaryFiber: fields.dietaryFiber,
                sugars: fields.sugars,
            },
            protien: {
                totalWeight: fields.protien.totalWeight,
                weightUnit: fields.protien.weightUnit,
                totalPercentage: fields.protien.totalPercentage,
                vitaminD: fields.vitaminD,
                calcium: fields.calcium,
                iron: fields.iron,
                potassium: fields.potassium,
                vitaminA: fields.vitaminA,
                vitaminC: fields.vitaminC,

            }
        }
        props.onChangeData(obj);
        handleClose();
    }

    return (
        <>
            <section className="CaloriesMacrosModalComp-comp">
                <div className="rs-allergiesinfomodalbtn">
                    <Button variant="primary" onClick={handleShow}>
                        <p className="d-flex align-items-center mb-0 icontext-content">
                            <div className="d-flex align-items-center w-100">
                                <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                                <div className="d-flex align-items-center w-100 justify-content-between rs-allergiesinfomodal-sub">
                                    <span className="pl-4 ml-2 text-left rs-allergiesinfomodal-name brandon-Medium f-13">Nutrition Facts<br></br><span className="brandon-Bold f-17">Calories & Macros</span></span>
                                    <div><img src={plusicon} alt="" className="img-fluid" /></div>
                                </div>
                            </div>
                        </p>
                        <p className="rs-allergiesinfomodalbtn-detail mb-0 text-left f-13 brandon-Medium">View additional details</p>
                    </Button>
                </div>


                <Modal backdrop="static" centered className="mainmodal-wrapper rs-discallergiesinfomadel" show={show} onHide={handleClose} animation={false} >
                    <Modal.Header className="border-bottom-0 align-items-center">
                        <Modal.Title className="w-100">
                            <p className="d-flex align-items-center mb-0 rsd-icontext-content">
                                <div className="d-flex align-items-center w-100">
                                    <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                                    <div className="d-flex align-items-center w-100 justify-content-between rsd-allergiesinfomodal-sub">
                                        <span className="pl-4 ml-2 text-left rsd-allergiesinfomodal-name">Amount per serving<br></br><b>Calories & Macros</b></span>
                                        {/* <div className="mt-3"><span><b>
                                        <input name="myData"
                                        type="text"/>
                                        </b></span></div> */}
                                    </div>
                                </div>
                            </p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <React.Fragment>
                            <Formik enableReinitialize={true} initialValues={initialValues2} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ errors, touched, resetForm, setFieldValue, handleChange, values }) => {
                                    return (
                                        <Form>
                                            <React.Fragment>
                                                <div className="mt-3">
                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                        <Field className="mg-input" name="total" placeholder="00.00" />
                                                    </div>
                                                    {touched.total && errors.total && <div className="error pink-txt f-11">{errors.total}</div>}
                                                </div>
                                                <div>
                                                    <hr className="mt-0 mb-0"></hr>
                                                </div>
                                                <div className="total-fat d-flex justify-content-between flex-wrap mt-3">
                                                    <p className="mb-1 brandon-Medium">Total Fat</p>
                                                    <p scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                        <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                            <Field className="mg-input" name="fat.weight" placeholder="00.00" />
                                                            <Field className="mg-input-txt" name="fat.fatUnit" readOnly={true} type="text" placeholder="mg" />
                                                        </div>
                                                        {touched.fat && touched.fat.weight && errors.fat && errors.fat.weight && <div className="error pink-txt f-11">{errors.fat && errors.fat.weight}</div>}
                                                    </p>
                                                    {/* <p className="mb-1 brandon-Medium">20.84 g</p> */}
                                                </div>
                                                <div className="table-responsive rscategory-detail">
                                                    <table className="table mb-4">
                                                        <tbody>
                                                            <tr>
                                                                <td scope="col" colSpan="3" className="gray-txt fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1 text-right">% Daily Values *</td>

                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Total Fat</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="totalFat.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="totalFat.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.totalFat && touched.totalFat.weight && errors.totalFat && errors.totalFat.weight && <div className="error pink-txt f-11">{errors.totalFat && errors.totalFat.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="totalFat.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.totalFat && touched.totalFat.percentage && errors.totalFat && errors.totalFat.percentage && <div className="error pink-txt f-11">{errors.totalFat && errors.totalFat.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Saturated Fat</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="saturatedFat.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="saturatedFat.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.saturatedFat && touched.saturatedFat.weight && errors.saturatedFat && errors.saturatedFat.weight && <div className="error pink-txt f-11">{errors.saturatedFat && errors.saturatedFat.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="saturatedFat.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.saturatedFat && touched.saturatedFat.percentage && errors.saturatedFat && errors.saturatedFat.percentage && <div className="error pink-txt f-11">{errors.saturatedFat && errors.saturatedFat.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Trans Fat</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="transFat.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="transFat.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.transFat && touched.transFat.weight && errors.transFat && errors.transFat.weight && <div className="error pink-txt f-11">{errors.transFat && errors.transFat.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="transFat.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.transFat && touched.transFat.percentage && errors.transFat && errors.transFat.percentage && <div className="error pink-txt f-11">{errors.transFat && errors.transFat.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Polyunsaturated Fat</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="polyunsaturatedFat.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="polyunsaturatedFat.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.polyunsaturatedFat && touched.polyunsaturatedFat.weight && errors.polyunsaturatedFat && errors.polyunsaturatedFat.weight && <div className="error pink-txt f-11">{errors.polyunsaturatedFat && errors.polyunsaturatedFat.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="polyunsaturatedFat.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.polyunsaturatedFat && touched.polyunsaturatedFat.percentage && errors.polyunsaturatedFat && errors.polyunsaturatedFat.percentage && <div className="error pink-txt f-11">{errors.polyunsaturatedFat && errors.polyunsaturatedFat.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Monounsaturated Fat</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="monounsaturatedFat.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="monounsaturatedFat.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.monounsaturatedFat && touched.monounsaturatedFat.weight && errors.monounsaturatedFat && errors.monounsaturatedFat.weight && <div className="error pink-txt f-11">{errors.monounsaturatedFat && errors.monounsaturatedFat.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="monounsaturatedFat.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.monounsaturatedFat && touched.monounsaturatedFat.percentage && errors.monounsaturatedFat && errors.monounsaturatedFat.percentage && <div className="error pink-txt f-11">{errors.monounsaturatedFat && errors.monounsaturatedFat.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="border-top-0 p-1"></td>
                                                                <td className="border-top-0 p-1"></td>
                                                                <td className="border-top-0 p-1"></td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Cholesterol</b></td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-2">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field className="mg-input" name="cholesterol.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="cholesterol.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.cholesterol && touched.cholesterol.weight && errors.cholesterol && errors.cholesterol.weight && <div className="error pink-txt f-11">{errors.cholesterol && errors.cholesterol.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field name="cholesterol.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.cholesterol && touched.cholesterol.percentage && errors.cholesterol && errors.cholesterol.percentage && <div className="error pink-txt f-11">{errors.cholesterol && errors.cholesterol.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Sodium</b></td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field className="mg-input" name="sodium.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="sodium.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.sodium && touched.sodium.weight && errors.sodium && errors.sodium.weight && <div className="error pink-txt f-11">{errors.sodium && errors.sodium.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field name="sodium.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.sodium && touched.sodium.percentage && errors.sodium && errors.sodium.percentage && <div className="error pink-txt f-11">{errors.sodium && errors.sodium.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Total Carbohydrate</b></td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field className="mg-input" name="totalCarbohydrate.totalWeight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="totalCarbohydrate.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.totalCarbohydrate && touched.totalCarbohydrate.totalWeight && errors.totalCarbohydrate && errors.totalCarbohydrate.totalWeight && <div className="error pink-txt f-11">{errors.totalCarbohydrate && errors.totalCarbohydrate.totalWeight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field name="totalCarbohydrate.totalPercentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.totalCarbohydrate && touched.totalCarbohydrate.totalPercentage && errors.totalCarbohydrate && errors.totalCarbohydrate.totalPercentage && <div className="error pink-txt f-11">{errors.totalCarbohydrate && errors.totalCarbohydrate.totalPercentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Dietary Fiber</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="dietaryFiber.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="dietaryFiber.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.dietaryFiber && touched.dietaryFiber.weight && errors.dietaryFiber && errors.dietaryFiber.weight && <div className="error pink-txt f-11">{errors.dietaryFiber && errors.dietaryFiber.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="dietaryFiber.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.dietaryFiber && touched.dietaryFiber.percentage && errors.dietaryFiber && errors.dietaryFiber.percentage && <div className="error pink-txt f-11">{errors.dietaryFiber && errors.dietaryFiber.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left pb-3">Sugars</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="sugars.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="sugars.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.sugars && touched.sugars.weight && errors.sugars && errors.sugars.weight && <div className="error pink-txt f-11">{errors.sugars && errors.sugars.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="sugars.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.sugars && touched.sugars.percentage && errors.sugars && errors.sugars.percentage && <div className="error pink-txt f-11">{errors.sugars && errors.sugars.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Protien</b></td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field className="mg-input" name="protien.totalWeight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="protien.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.protien && touched.protien.totalWeight && errors.protien && errors.protien.totalWeight && <div className="error pink-txt f-11">{errors.protien && errors.protien.totalWeight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-2 pb-1">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end input-dark">
                                                                        <Field name="protien.totalPercentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.protien && touched.protien.totalPercentage && errors.protien && errors.protien.totalPercentage && <div className="error pink-txt f-11">{errors.protien && errors.protien.totalPercentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin D</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="vitaminD.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="vitaminD.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.vitaminD && touched.vitaminD.weight && errors.vitaminD && errors.vitaminD.weight && <div className="error pink-txt f-11">{errors.vitaminD && errors.vitaminD.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="vitaminD.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.vitaminD && touched.vitaminD.percentage && errors.vitaminD && errors.vitaminD.percentage && <div className="error pink-txt f-11">{errors.vitaminD && errors.vitaminD.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Calcium</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="calcium.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="calcium.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.calcium && touched.calcium.weight && errors.calcium && errors.calcium.weight && <div className="error pink-txt f-11">{errors.calcium && errors.calcium.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="calcium.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.calcium && touched.calcium.percentage && errors.calcium && errors.calcium.percentage && <div className="error pink-txt f-11">{errors.calcium && errors.calcium.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Iron</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="iron.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="iron.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.iron && touched.iron.weight && errors.iron && errors.iron.weight && <div className="error pink-txt f-11">{errors.iron && errors.iron.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="iron.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.iron && touched.iron.percentage && errors.iron && errors.iron.percentage && <div className="error pink-txt f-11">{errors.iron && errors.iron.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Potassium</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="potassium.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="potassium.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.potassium && touched.potassium.weight && errors.potassium && errors.potassium.weight && <div className="error pink-txt f-11">{errors.potassium && errors.potassium.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="potassium.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.potassium && touched.potassium.percentage && errors.potassium && errors.potassium.percentage && <div className="error pink-txt f-11">{errors.potassium && errors.potassium.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin A</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="vitaminA.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="vitaminA.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.vitaminA && touched.vitaminA.weight && errors.vitaminA && errors.vitaminA.weight && <div className="error pink-txt f-11">{errors.vitaminA && errors.vitaminA.weight}</div>}
                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="vitaminA.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.vitaminA && touched.vitaminA.percentage && errors.vitaminA && errors.vitaminA.percentage && <div className="error pink-txt f-11">{errors.vitaminA && errors.vitaminA.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" className="gray-txt fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin C</td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field className="mg-input" name="vitaminC.weight" placeholder="00.00" />
                                                                        <Field className="mg-input-txt" name="vitaminC.weightUnit" readOnly={true} type="text" placeholder="mg" />
                                                                    </div>
                                                                    {touched.vitaminC && touched.vitaminC.weight && errors.vitaminC && errors.vitaminC.weight && <div className="error pink-txt f-11">{errors.vitaminC && errors.vitaminC.weight}</div>}

                                                                </td>
                                                                <td scope="col" className="gray-txt fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                                                    <div className="recipt-editwraper d-flex align-items-center justify-content-end">
                                                                        <Field name="vitaminC.percentage" className="mg-input" placeholder="00.00" />%
                                                                    </div>
                                                                    {touched.vitaminC && touched.vitaminC.percentage && errors.vitaminC && errors.vitaminC.percentage && <div className="error pink-txt f-11">{errors.vitaminC && errors.vitaminC.percentage}</div>}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                    <hr className="mt-0 mb-0"></hr>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <p className="contributes-detailtxt gray-txt f-14">
                                                        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                                                    </p>
                                                    <button className="btn lightgraynoline-btn text-uppercase rounded-pill" type="reset" onClick={() => { handleCancleEdit(resetForm); }}>cancle</button>
                                                    <button className="btn pinkline-btn text-uppercase rounded-pill ml-3 min-width-120" type="submit">Save</button>
                                                </div>
                                                {/* {JSON.stringify(values)} */}
                                            </React.Fragment>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </React.Fragment>
                    </Modal.Body>
                    {/* <Modal.Footer>
                    <p>Voluptua sed diam lorem sanctus ipsum sed sanctus nonumy. Accusam sea tempor labore accusam diam labore no sea amet, at sed et et takimata et et voluptua duo. Aliquyam et.</p>
                </Modal.Footer> */}
                </Modal>

            </section>

        </>
    )
}

export default CaloriesMacrosModalComp;