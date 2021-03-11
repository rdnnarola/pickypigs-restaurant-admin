import React, { useState } from "react";
import './RestaurantFeaturesComp.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { updateRestaurantInfoDetail } from '../../redux/actions/restaurantSettingAction'
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker, TimePicker } from '@material-ui/pickers';
import moment from 'moment'


const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const urlRegex = RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

const RestaurantFeaturesComp = (props) => {
    let { openingTimings, website, bookings, socialMedia } = props.detaildata
    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState(true);


    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
    }

    const initialValues = {

        websiteUrl: website && website.websiteUrl ? website && website.websiteUrl : [],
        websiteUrl2: "",
        isAddToProfilePage: website && website.isAddToProfilePage ? website && website.isAddToProfilePage : false,

        isTime24Hours: openingTimings && openingTimings.isTime24Hours ? openingTimings && openingTimings.isTime24Hours : false,
        isMultiTime: openingTimings && openingTimings.isMultiTime ? openingTimings && openingTimings.isMultiTime : false,
        timeArray: openingTimings && openingTimings.time ? openingTimings && openingTimings.time :
            [
                {
                    day: "Sunday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                },
                {
                    day: "Monday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                },
                {
                    day: "Tuesday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                },
                {
                    day: "Wednesday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                },
                {
                    day: "Thursday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                },
                {
                    day: "Friday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                },
                {
                    day: "Saturday",
                    isSelected: false,
                    timeList: [
                        {
                            startTime: "07:00",
                            endTime: "08:00"
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00"
                        }
                    ]
                }
            ],


        isAvailable: bookings && bookings.isAvailable ? bookings && bookings.isAvailable : false,
        isWebsite: bookings && bookings.isWebsite ? bookings && bookings.isWebsite : false,
        isEmail: bookings && bookings.isEmail ? bookings && bookings.isEmail : false,
        isCall: bookings && bookings.isCall ? bookings && bookings.isCall : false,
        bookingswebsiteUrl: bookings && bookings.websiteUrl ? bookings && bookings.websiteUrl : [],
        bookingswebsiteUrl2: "",
        bookingsemail: bookings && bookings.email ? bookings && bookings.email : [],
        bookingsemail2: '',
        bookingsphoneNumber: bookings && bookings.phoneNumber ? bookings && bookings.phoneNumber : [],
        bookingsphoneNumber2: '',

        isSocialAvailable: socialMedia && socialMedia.isAvailable ? socialMedia && socialMedia.isAvailable : false,
        isFacebook: socialMedia && socialMedia.isFacebook ? socialMedia && socialMedia.isFacebook : false,
        isTwitter: socialMedia && socialMedia.isTwitter ? socialMedia && socialMedia.isTwitter : false,
        isInstagram: socialMedia && socialMedia.isInstagram ? socialMedia && socialMedia.isInstagram : false,
        facebookUrl: socialMedia && socialMedia.facebookUrl ? socialMedia && socialMedia.facebookUrl : [],
        facebookUrl2: '',
        twitterUrl: socialMedia && socialMedia.twitterUrl ? socialMedia && socialMedia.twitterUrl : [],
        twitterUrl2: '',
        instagramUrl: socialMedia && socialMedia.instagramUrl ? socialMedia && socialMedia.instagramUrl : [],
        instagramUrl2: '',
    }

    const validationSchema = Yup.object().shape({
        timeArray: Yup.array().required('Please Select Timings'),
        // bookingsphoneNumber2: Yup.string().min(10, "Min 10 Digits").max(10, "Max 10 Digits").matches(phoneRegex, "Invalid Phone Number"),
        // bookingsphoneNumber2: Yup.string(),
        bookingsemail2: Yup.string().email('Email must be a valid email'),
        bookingswebsiteUrl2: Yup.string().matches(urlRegex, "Enter A valid URL"),
        facebookUrl2: Yup.string().matches(urlRegex, "Enter A valid URL"),
        twitterUrl2: Yup.string().matches(urlRegex, "Enter A valid URL"),
        instagramUrl2: Yup.string().matches(urlRegex, "Enter A valid URL"),
        websiteUrl2: Yup.string().matches(urlRegex, "Enter A valid URL"),
    });



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

    const onSubmit = (fields) => {
        let obj = {
            bookings: {
                isAvailable: fields.isAvailable,
                isWebsite: fields.isWebsite,
                isEmail: fields.isEmail,
                isCall: fields.isCall,
                websiteUrl: fields.bookingswebsiteUrl,
                email: fields.bookingsemail,
                phoneNumber: fields.bookingsphoneNumber,
            },
            openingTimings: {
                isTime24Hours: fields.isTime24Hours,
                isMultiTime: fields.isMultiTime,
                time: fields.timeArray,
            },

            socialMedia: {
                isAvailable: fields.isSocialAvailable,
                isFacebook: fields.isFacebook,
                isTwitter: fields.isTwitter,
                isInstagram: fields.isInstagram,
                facebookUrl: fields.facebookUrl,
                twitterUrl: fields.twitterUrl,
                instagramUrl: fields.instagramUrl,
            },
            website: {
                websiteUrl: fields.websiteUrl,
                isAddToProfilePage: fields.isAddToProfilePage
            }

        }
        dispatch(updateRestaurantInfoDetail(obj));
        setEditForm(true)
    }

    return (
        <>
            <section className="RestaurantFeaturesComp">
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, resetForm, setFieldValue, handleChange, values }) => {
                            return (
                                <Form>
                                    <div className="row RestaurantFeaturesComp-container main-accordion-wrapper">
                                        <div className="col-sm-12">
                                            <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExample">
                                                <div className="accordion-item">
                                                    <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingFour">
                                                        <div >
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">RESTAURANT DETAILS</h5>
                                                            </div>
                                                            <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
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
                                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body ">
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr"></hr>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <p className="f-15 mb-2 brandon-Medium">Opening Timings</p>
                                                                </div>
                                                                {editForm
                                                                    ?
                                                                    <div className="col-sm-12 d-flex flex-wrap">
                                                                        <React.Fragment>
                                                                            {values.isTime24Hours &&
                                                                                <p className="f-13 gray-txt mr-4">*Time is in 24h format</p>
                                                                            }
                                                                        </React.Fragment>
                                                                        <React.Fragment>
                                                                            {values.isMultiTime &&
                                                                                <p className="f-13 gray-txt">*Multi time</p>
                                                                            }
                                                                        </React.Fragment>
                                                                    </div>
                                                                    :
                                                                    <div className="col-sm-12 mb-4 d-flex flex-wrap">
                                                                        <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-5">
                                                                            <Field type="checkbox" name="isTime24Hours" id="isTime24Hours" className="custom-control-input" />
                                                                            <label className="custom-control-label gray-control-label f-13" htmlFor="isTime24Hours">Set the time format in 24h (eg: 15:30)</label>
                                                                        </div>
                                                                        <div className="checkbox-setting custom-control custom-checkbox pink-checkbox">
                                                                            <Field type="checkbox" name="isMultiTime" id="isMultiTime" className="custom-control-input" />
                                                                            <label className="custom-control-label gray-control-label f-13" htmlFor="isMultiTime">Multi time</label>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                            {/* {JSON.stringify(values.timeArray)} */}
                                                            {/* {JSON.stringify(openingTimings.isTime24Hours) }                                                             */}

                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    {editForm ?
                                                                        props.detaildata && props.detaildata.openingTimings && props.detaildata.openingTimings.time && props.detaildata.openingTimings.time.map((data, index) => {
                                                                            return (
                                                                                <div>
                                                                                    { data.isSelected &&

                                                                                        <React.Fragment key={index}>
                                                                                            <div className="opening-month-time d-flex align-items-center flex-wrap mb-3">
                                                                                                {/* <div className="custom-control custom-checkbox pink-checkbox mr-4">
                                                                                        <Field type="checkbox" name={`timeArray.${index}.isSelected`} id={data.day}  className="custom-control-input"/>
                                                                                        <label className="custom-control-label gray-control-label f-15" htmlFor={data.day}>{data.day}</label>
                                                                                    </div> */}
                                                                                                <div style={{ width: 100 }}>
                                                                                                    <p className="f-15 mb-0 brandon-Medium">{data.day}</p>

                                                                                                </div>
                                                                                                <div className={`timeing-main-wrapper d-flex align-items-center ${data.isSelected && "active"}`}>
                                                                                                    <React.Fragment>
                                                                                                        <div className="custom-timepicker mb-0 form-group d-flex align-items-center" style={{ width: 90 }}>
                                                                                                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                <TimePicker
                                                                                                                    inputVariant="outlined"
                                                                                                                    ampm={!openingTimings.isTime24Hours}
                                                                                                                    disabled={true}
                                                                                                                    value={`Thu Dec 31 2020 ${data.timeList && data.timeList[0].startTime} `}
                                                                                                                />
                                                                                                            </MuiPickersUtilsProvider>
                                                                                                        </div>
                                                                                                        <div className="timeing-dash">
                                                                                                        </div>
                                                                                                        <div className="custom-timepicker mb-0 form-group d-flex align-items-center" style={{ width: 90 }}>
                                                                                                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                <TimePicker
                                                                                                                    inputVariant="outlined"
                                                                                                                    ampm={!openingTimings.isTime24Hours}
                                                                                                                    disabled={true}
                                                                                                                    value={`Thu Dec 31 2020 ${data.timeList && data.timeList[0].endTime} `}
                                                                                                                />
                                                                                                            </MuiPickersUtilsProvider>
                                                                                                        </div>
                                                                                                    </React.Fragment>

                                                                                                    {openingTimings && openingTimings.isMultiTime &&
                                                                                                        <React.Fragment>
                                                                                                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&amp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                                                                                            <div className="custom-timepicker mb-0 form-group d-flex align-items-center" style={{ width: 90 }}>
                                                                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                    <TimePicker
                                                                                                                        inputVariant="outlined"
                                                                                                                        ampm={!openingTimings.isTime24Hours}
                                                                                                                        disabled={true}
                                                                                                                        value={`Thu Dec 31 2020 ${data.timeList && data.timeList[1].startTime} `}
                                                                                                                    />
                                                                                                                </MuiPickersUtilsProvider>
                                                                                                            </div>
                                                                                                            <div className="timeing-dash">
                                                                                                            </div>
                                                                                                            <div className="custom-timepicker mb-0 form-group d-flex align-items-center" style={{ width: 90 }}>
                                                                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                    <TimePicker
                                                                                                                        inputVariant="outlined"
                                                                                                                        ampm={!openingTimings.isTime24Hours}
                                                                                                                        disabled={true}
                                                                                                                        value={`Thu Dec 31 2020 ${data.timeList && data.timeList[1].endTime} `}
                                                                                                                    />
                                                                                                                </MuiPickersUtilsProvider>
                                                                                                            </div>
                                                                                                        </React.Fragment>
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                        </React.Fragment>
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })

                                                                        :
                                                                        <div>
                                                                            {values.timeArray && values.timeArray.map((data, index) => {
                                                                                return (
                                                                                    <React.Fragment key={index}>
                                                                                        <div className="opening-month-time d-flex align-items-center flex-wrap mb-3">
                                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4" style={{ width: 120 }}>
                                                                                                <Field type="checkbox" name={`timeArray.${index}.isSelected`} id={data.day} className="custom-control-input" />
                                                                                                <label className="custom-control-label gray-control-label f-15" htmlFor={data.day}>{data.day}</label>
                                                                                            </div>

                                                                                            <div className={`timeing-main-wrapper d-flex align-items-center ${data.isSelected && "active"}`}>


                                                                                                <React.Fragment>
                                                                                                    <React.Fragment >
                                                                                                        <div className="custom-timepicker mb-0 form-group d-flex align-items-center active">
                                                                                                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                <KeyboardTimePicker
                                                                                                                    id="from-time-picker" placeholder="From"
                                                                                                                    inputVariant="outlined"
                                                                                                                    ampm={!values.isTime24Hours}
                                                                                                                    // mask="__:__ _M" 
                                                                                                                    value={`Thu Dec 31 2020 ${data.timeList && data.timeList[0].startTime} `}
                                                                                                                    onChange={date => setFieldValue(`timeArray.${index}.timeList.${0}.startTime`, moment(date).format('HH:mm'), false)}
                                                                                                                    KeyboardButtonProps={{
                                                                                                                        'aria-label': 'change time',
                                                                                                                    }}
                                                                                                                />
                                                                                                            </MuiPickersUtilsProvider>
                                                                                                        </div>
                                                                                                        <div className="timeing-dash">
                                                                                                        </div>
                                                                                                        <div className="custom-timepicker mb-0 form-group d-flex align-items-center">
                                                                                                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                <KeyboardTimePicker
                                                                                                                    id="from-time-picker" placeholder="From"
                                                                                                                    inputVariant="outlined"
                                                                                                                    ampm={!values.isTime24Hours}
                                                                                                                    // mask="__:__ _M" 
                                                                                                                    value={`Thu Dec 31 2020 ${data.timeList && data.timeList[0].endTime} `}
                                                                                                                    onChange={date => setFieldValue(`timeArray.${index}.timeList.${0}.endTime`, moment(date).format('HH:mm'), false)}
                                                                                                                    KeyboardButtonProps={{
                                                                                                                        'aria-label': 'change time',
                                                                                                                    }}
                                                                                                                />
                                                                                                            </MuiPickersUtilsProvider>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                    {values.isMultiTime &&
                                                                                                        <React.Fragment >
                                                                                                            <div className="to-txt">&nbsp;&nbsp;&nbsp;&nbsp;&amp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                                                                                            <div className="custom-timepicker mb-0 form-group d-flex align-items-center">
                                                                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                    <KeyboardTimePicker
                                                                                                                        id="from-time-picker" placeholder="From"
                                                                                                                        inputVariant="outlined"
                                                                                                                        ampm={!values.isTime24Hours}
                                                                                                                        // mask="__:__ _M" 
                                                                                                                        value={`Thu Dec 31 2020 ${data.timeList && data.timeList[1].startTime} `}
                                                                                                                        onChange={date => setFieldValue(`timeArray.${index}.timeList.${1}.startTime`, moment(date).format('HH:mm'), false)}
                                                                                                                        KeyboardButtonProps={{
                                                                                                                            'aria-label': 'change time',
                                                                                                                        }}
                                                                                                                    />
                                                                                                                </MuiPickersUtilsProvider>
                                                                                                            </div>
                                                                                                            <div className="timeing-dash">
                                                                                                            </div>
                                                                                                            <div className="custom-timepicker mb-0 form-group d-flex align-items-center">
                                                                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                                                                    <KeyboardTimePicker
                                                                                                                        id="from-time-picker" placeholder="From"
                                                                                                                        inputVariant="outlined"
                                                                                                                        ampm={!values.isTime24Hours}
                                                                                                                        // mask="__:__ _M"                                                                                                                        
                                                                                                                        value={`Thu Dec 31 2020 ${data.timeList && data.timeList[1].endTime} `}
                                                                                                                        onChange={date => setFieldValue(`timeArray.${index}.timeList.${1}.endTime`, moment(date).format('HH:mm'), false)}
                                                                                                                        KeyboardButtonProps={{
                                                                                                                            'aria-label': 'change time',
                                                                                                                        }}
                                                                                                                    />
                                                                                                                </MuiPickersUtilsProvider>
                                                                                                            </div>
                                                                                                        </React.Fragment>
                                                                                                    }
                                                                                                    {/* {values.timeArray.length == 0 && errors.timeArray && <div className="error pink-txt f-11">{errors.timeArray}</div>} */}

                                                                                                </React.Fragment>

                                                                                            </div>
                                                                                        </div>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })
                                                                            }
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr" />
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col-sm-12 mb-2">
                                                                    <p className="f-15 mb-3 brandon-Medium">Website (optional)</p>
                                                                    <div className="row">
                                                                        {editForm ?
                                                                            <div className="col-sm-12">
                                                                                {website && website.websiteUrl && website.websiteUrl.length > 0 ?
                                                                                    website && website.websiteUrl.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <div className="col-sm-12 position-relative">
                                                                                    <div className="addinput-control custom-lightinputbox position-relative">
                                                                                        <Field name="websiteUrl2" placeholder="http://" className="form-control-input form-control f-15" />
                                                                                        <button type="button"
                                                                                            onClick={() => { handleInputBoxDataUpdate(values.websiteUrl2, values.websiteUrl, setFieldValue, "websiteUrl"); setFieldValue("websiteUrl2", "") }}
                                                                                            className="add-trans-button f-15" disabled={!values.websiteUrl2 || errors.websiteUrl2}>Add</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-sm-12">
                                                                                    {touched.websiteUrl2 && errors.websiteUrl2 && <div className="error pink-txt f-11 mb-2">{errors.websiteUrl2}</div>}
                                                                                </div>
                                                                                <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">

                                                                                    {
                                                                                        values && values.websiteUrl.map((data, index) => {
                                                                                            return (
                                                                                                <React.Fragment key={index}>
                                                                                                    <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                        <p className="f-14 mb-1">{data}</p>
                                                                                                        <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.websiteUrl, setFieldValue, "websiteUrl") }}>x</button>
                                                                                                    </div>
                                                                                                </React.Fragment>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </div>

                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                    {editForm
                                                                        ?
                                                                        <div className="col-sm-12 pl-0">
                                                                            <React.Fragment>
                                                                                {values.isAddToProfilePage &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Added to profile page</p>
                                                                                }
                                                                            </React.Fragment>
                                                                        </div>
                                                                        :
                                                                        <div className="col-sm-12 mt-2">
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox pl-2">
                                                                                <Field type="checkbox" name="isAddToProfilePage" id="isAddToProfilePage" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-15" htmlFor="isAddToProfilePage">Add to profile page</label>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr" />
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col-sm-12 mb-2">
                                                                    <p className="f-15 mb-2 brandon-Medium">Bookings</p>

                                                                    {editForm
                                                                        ?
                                                                        <div className="col-sm-12 d-flex flex-wrap pl-0">
                                                                            <React.Fragment>
                                                                                {values.isAvailable &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Available</p>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.isWebsite &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Website</p>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.isEmail &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Email</p>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.isCall &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Call</p>
                                                                                }
                                                                            </React.Fragment>
                                                                        </div>
                                                                        :
                                                                        <div className="col-sm-12 d-flex flex-wrap mt-3">
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox pl-2 mr-4">
                                                                                <Field type="checkbox" name="isAvailable" id="isAvailable" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isAvailable">Available</label>
                                                                            </div>
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4">
                                                                                <Field type="checkbox" name="isWebsite" id="isWebsite" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isWebsite">Website</label>
                                                                            </div>
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4">
                                                                                <Field type="checkbox" name="isEmail" id="isEmail" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isEmail">Email</label>
                                                                            </div>
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4">
                                                                                <Field type="checkbox" name="isCall" id="isCall" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isCall">Call</label>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    <div className="mt-4">
                                                                        {editForm ?
                                                                            <div>
                                                                                <h5 className="text-capitalize f-15">Provided URL (your own website or third party website</h5>
                                                                                {bookings && bookings.websiteUrl && bookings.websiteUrl.length > 0 ?
                                                                                    bookings && bookings.websiteUrl.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <p className="gray-txt f-13 mb-2">Provide URL (your own website or third party website</p>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 position-relative">
                                                                                        <div className="addinput-control custom-lightinputbox position-relative">
                                                                                            <Field name="bookingswebsiteUrl2" placeholder="http://" className="form-control-input form-control f-15" />
                                                                                            { }
                                                                                            <button type="button"
                                                                                                onClick={() => { handleInputBoxDataUpdate(values.bookingswebsiteUrl2, values.bookingswebsiteUrl, setFieldValue, "bookingswebsiteUrl"); setFieldValue("bookingswebsiteUrl2", "") }}
                                                                                                className="add-trans-button f-15" disabled={!values.bookingswebsiteUrl2 || errors.bookingswebsiteUrl2}>Add</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        {touched.bookingswebsiteUrl2 && errors.bookingswebsiteUrl2 && <div className="error pink-txt f-11 mb-2">{errors.bookingswebsiteUrl2}</div>}
                                                                                    </div>
                                                                                    <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">
                                                                                        {
                                                                                            values && values.bookingswebsiteUrl.map((data, index) => {
                                                                                                return (
                                                                                                    <React.Fragment key={index}>
                                                                                                        <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                            <p className="f-14 mb-1">{data}</p>
                                                                                                            <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.bookingswebsiteUrl, setFieldValue, "bookingswebsiteUrl") }}>x</button>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>

                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        {editForm ?
                                                                            <div>
                                                                                <h5 className="text-capitalize f-15">Provide Email</h5>
                                                                                {bookings && bookings.email && bookings.email.length > 0 ?
                                                                                    bookings && bookings.email.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <p className="gray-txt f-13 mb-2">Provide Email</p>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 position-relative">
                                                                                        <div className="addinput-control custom-lightinputbox position-relative addinput-w-360">
                                                                                            <Field name="bookingsemail2" placeholder="email@email.com" className="form-control-input form-control" />
                                                                                            <button type="button"
                                                                                                onClick={() => { handleInputBoxDataUpdate(values.bookingsemail2, values.bookingsemail, setFieldValue, "bookingsemail"); setFieldValue("bookingsemail2", "") }}
                                                                                                className="add-trans-button f-15" disabled={!values.bookingsemail2 || errors.bookingsemail2}>Add</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        {touched.bookingsemail2 && errors.bookingsemail2 && <div className="error pink-txt f-11 mb-2">{errors.bookingsemail2}</div>}
                                                                                    </div>

                                                                                    <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">
                                                                                        {
                                                                                            values && values.bookingsemail.map((data, index) => {
                                                                                                return (
                                                                                                    <React.Fragment key={index}>
                                                                                                        <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                            <p className="f-14 mb-1">{data}</p>
                                                                                                            <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.bookingsemail, setFieldValue, "bookingsemail") }}>x</button>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>

                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        {editForm ?
                                                                            <div>
                                                                                <h5 className="text-capitalize f-15">Phone Number</h5>
                                                                                {bookings && bookings.phoneNumber && bookings && bookings.phoneNumber.length > 0 ?
                                                                                    bookings && bookings.phoneNumber.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <p className="gray-txt f-13 mb-2">Phone Number</p>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 position-relative">
                                                                                        <div className="addinput-control custom-lightinputbox position-relative addinput-w-360">
                                                                                            <Field name="bookingsphoneNumber2" type="number" placeholder="Phone Number" className="form-control-input form-control" />
                                                                                            { }
                                                                                            <button type="button"
                                                                                                onClick={() => { handleInputBoxDataUpdate(values.bookingsphoneNumber2, values.bookingsphoneNumber, setFieldValue, "bookingsphoneNumber"); setFieldValue("bookingsphoneNumber2", "") }}
                                                                                                className="add-trans-button f-15" disabled={!values.bookingsphoneNumber2 || errors.bookingsphoneNumber2} >Add</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        {touched.bookingsphoneNumber2 && errors.bookingsphoneNumber2 && <div className="error pink-txt f-11 mb-2">{errors.bookingsphoneNumber2}</div>}
                                                                                    </div>
                                                                                    <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">
                                                                                        {
                                                                                            values && values.bookingsphoneNumber.map((data, index) => {
                                                                                                return (
                                                                                                    <React.Fragment key={index}>
                                                                                                        <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                            <p className="f-14 mb-1">{data}</p>
                                                                                                            <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.bookingsphoneNumber, setFieldValue, "bookingsphoneNumber") }}>x</button>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>

                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr" />
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col-sm-12 mb-2">
                                                                    <p className="f-15 mb-2 brandon-Medium">Social Media</p>

                                                                    {editForm
                                                                        ?
                                                                        <div className="col-sm-12 d-flex flex-wrap pl-0">
                                                                            <React.Fragment>
                                                                                {values.isSocialAvailable &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Available</p>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.isFacebook &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Facebook</p>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.isTwitter &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Twitter</p>
                                                                                }
                                                                            </React.Fragment>
                                                                            <React.Fragment>
                                                                                {values.isInstagram &&
                                                                                    <p className="f-13 gray-txt mr-4 mb-0">*Instagram</p>
                                                                                }
                                                                            </React.Fragment>
                                                                        </div>
                                                                        :
                                                                        <div className="col-sm-12 d-flex flex-wrap mt-3">
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox pl-2 mr-4">
                                                                                <Field type="checkbox" name="isSocialAvailable" id="isSocialAvailable" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isSocialAvailable">Available</label>
                                                                            </div>
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4">
                                                                                <Field type="checkbox" name="isFacebook" id="isFacebook" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isFacebook">Facebook</label>
                                                                            </div>
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4">
                                                                                <Field type="checkbox" name="isTwitter" id="isTwitter" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isTwitter">Twitter</label>
                                                                            </div>
                                                                            <div className="checkbox-setting custom-control custom-checkbox pink-checkbox mr-4">
                                                                                <Field type="checkbox" name="isInstagram" id="isInstagram" className="custom-control-input" />
                                                                                <label className="custom-control-label gray-control-label f-13" htmlFor="isInstagram">Instagram</label>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    <div className="mt-4">
                                                                        {editForm ?
                                                                            <div>
                                                                                <h5 className="text-capitalize f-15">Facebook</h5>
                                                                                {socialMedia && socialMedia.facebookUrl && socialMedia.facebookUrl.length > 0 ?
                                                                                    socialMedia && socialMedia.facebookUrl.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <p className="gray-txt f-13 mb-2">Facebook</p>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 position-relative">
                                                                                        <div className="addinput-control custom-lightinputbox position-relative">
                                                                                            <Field name="facebookUrl2" placeholder="http://" className="form-control-input form-control" />
                                                                                            { }
                                                                                            <button type="button"
                                                                                                onClick={() => { handleInputBoxDataUpdate(values.facebookUrl2, values.facebookUrl, setFieldValue, "facebookUrl"); setFieldValue("facebookUrl2", "") }}
                                                                                                className="add-trans-button f-15" disabled={!values.facebookUrl2 || errors.facebookUrl2}>Add</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        {touched.facebookUrl2 && errors.facebookUrl2 && <div className="error pink-txt f-11">{errors.facebookUrl2}</div>}
                                                                                    </div>
                                                                                    <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">
                                                                                        {
                                                                                            values && values.facebookUrl.map((data, index) => {
                                                                                                return (
                                                                                                    <React.Fragment key={index}>
                                                                                                        <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                            <p className="f-14 mb-1">{data}</p>
                                                                                                            <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.facebookUrl, setFieldValue, "facebookUrl") }}>x</button>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>

                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        {editForm ?
                                                                            <div>
                                                                                <h5 className="text-capitalize f-15">Twitter</h5>
                                                                                {socialMedia && socialMedia.twitterUrl && socialMedia.twitterUrl.length > 0 ?
                                                                                    socialMedia && socialMedia.twitterUrl.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <p className="gray-txt f-13 mb-2">Twitter</p>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 position-relative">
                                                                                        <div className="addinput-control custom-lightinputbox position-relative">
                                                                                            <Field name="twitterUrl2" placeholder="http://" className="form-control-input form-control" />
                                                                                            <button type="button"
                                                                                                onClick={() => { handleInputBoxDataUpdate(values.twitterUrl2, values.twitterUrl, setFieldValue, "twitterUrl"); setFieldValue("twitterUrl2", "") }}
                                                                                                className="add-trans-button f-15" disabled={!values.twitterUrl2 || errors.twitterUrl2}>Add</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        {touched.twitterUrl2 && errors.twitterUrl2 && <div className="error pink-txt f-11 mb-2">{errors.twitterUrl2}</div>}
                                                                                    </div>
                                                                                    <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">

                                                                                        {
                                                                                            values && values.twitterUrl.map((data, index) => {
                                                                                                return (
                                                                                                    <React.Fragment key={index}>
                                                                                                        <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                            <p className="f-14 mb-1">{data}</p>
                                                                                                            <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.twitterUrl, setFieldValue, "twitterUrl") }}>x</button>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>

                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        {editForm ?
                                                                            <div>
                                                                                <h5 className="text-capitalize f-15">Instagram</h5>
                                                                                {socialMedia && socialMedia.instagramUrl && socialMedia && socialMedia.instagramUrl.length > 0 ?
                                                                                    socialMedia && socialMedia.instagramUrl.map((data, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <p className="form-control-plaintext gray-txt">{data}</p>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                    :
                                                                                    <p className="form-control-plaintext gray-txt">-</p>
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <React.Fragment >
                                                                                <p className="gray-txt f-13 mb-2">Instagram</p>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 position-relative">
                                                                                        <div className="addinput-control custom-lightinputbox position-relative">
                                                                                            <Field name="instagramUrl2" placeholder="http://" className="form-control-input form-control" />
                                                                                            { }
                                                                                            <button type="button"
                                                                                                onClick={() => { handleInputBoxDataUpdate(values.instagramUrl2, values.instagramUrl, setFieldValue, "instagramUrl"); setFieldValue("instagramUrl2", "") }}
                                                                                                className="add-trans-button f-15" disabled={!values.instagramUrl2 || errors.instagramUrl2}>Add</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-12">
                                                                                        {touched.instagramUrl2 && errors.instagramUrl2 && <div className="error pink-txt f-11 mb-2">{errors.instagramUrl2}</div>}
                                                                                    </div>

                                                                                    <div className="col-sm-12 selectapplies-tag d-flex align-items-center flex-wrap">

                                                                                        {
                                                                                            values && values.instagramUrl.map((data, index) => {
                                                                                                return (
                                                                                                    <React.Fragment key={index}>
                                                                                                        <div className="d-flex flex-wrap justify-content-between align-items-center selectapplies-taglabel">
                                                                                                            <p className="f-14 mb-1">{data}</p>
                                                                                                            <button className="remove-tag" type="button" onClick={() => { handleInputBoxDataRemove(data, values.instagramUrl, setFieldValue, "instagramUrl") }}>x</button>
                                                                                                        </div>
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
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

export default RestaurantFeaturesComp;