import React,{useState,useEffect} from "react";
import './AddEditMenuModalComp.scss';
import { Modal, Button } from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux";
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider,KeyboardTimePicker} from '@material-ui/pickers';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CheckBoxAutoCompleteComp from "../CheckBoxAutoCompleteComp/CheckBoxAutoCompleteComp";
import moment from 'moment'
import { addMenuData, getSelectedMenuData, updateSelectedMenuData } from "../../redux/actions/menuAction";


const alergy_information = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const styleOf_menu=["drinks","Meal","breakfast","lunch","dinner","dessert","buffet"]

const AddEditMenuModalComp = (props) => {
    const [selectedDate, handleDateChange] = useState(new Date());

    const dispatch=useDispatch();
    let id  = props.menuid&&props.menuid;
    let isAddMode = !id;

    const initialValues = {
        name:'',
        timeFrom:null,
        timeTo:null,
        type:"menu",
        availability:[],
        styleOfmenu:''
    }

    const validationSchema  = Yup.object().shape({
        name:Yup.string().required('Name is required'),
        timeFrom:Yup.date().nullable().required('Time Is Required'),
        timeTo:Yup.date().nullable().required('Time Is Required'),
        availability:Yup.array().required('Please Select Availablity'),
        styleOfmenu:Yup.string().required('Please Select Menu Style'),
    });

    useEffect(() => {
        if (props.show) {
            if (!isAddMode) {
                dispatch(getSelectedMenuData(props.menuid));
            }
        }
    }, [dispatch,props.show,props.menuid]);

    let menuData = useSelector((state)=>{
        return state.menu.selectedMenu
    });

    let initialValues2={
        name:menuData.name,
        timeFrom:`Thu Dec 31 2020 ${menuData.timeFrom} GMT+0530`,
        timeTo:`Thu Dec 31 2020 ${menuData.timeTo} GMT+0530`,
        type:menuData.type,
        availability:menuData.availability,
        styleOfmenu:menuData.styleOfmenu
    }

    const onSubmit=(fields, { setStatus })=>{
        setStatus();
        if (isAddMode) {
            createMenuRequest(fields);
        } else {
            updateMenuRequest(id,fields,);
        }
    }

    function createMenuRequest(fields) {
      
        dispatch(addMenuData({...fields,timeFrom:moment(fields.timeFrom).format( 'HH:mm'),timeTo:moment(fields.timeTo).format( 'HH:mm')},props.showDeleted));
        props.onHide();
    }

    function updateMenuRequest(id,fields) {
        dispatch(updateSelectedMenuData(id,{...fields,timeFrom:moment(fields.timeFrom).format( 'HH:mm'),timeTo:moment(fields.timeTo).format( 'HH:mm')},props.showDeleted));
        props.onHide();
    }

    return (
        <>
            <Modal
                {...props}
                backdrop="static"
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="mainmodal-wrapper"
            >
                <Modal.Header className="align-items-center">
                    <Modal.Title className="brandon-Medium" id="contained-modal-title-vcenter">
                        Add / Edit Menu
                            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik enableReinitialize={true} initialValues={isAddMode?initialValues:initialValues2} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {({ errors, touched,values, isSubmitting, setFieldValue,handleChange }) => {
                            return (
                                <Form>
                                    <div>
                                        <div className="form-group easydish-input dishname-input w-100 custom-lightinputbox">
                                            <label className="gray-txt f-15">Menu Name</label>
                                            <Field  name="name" placeholder="Enter here" className="form-control f-15" />
                                            {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                        </div>
                                        <div className="custom-drodown form-group ">
                                            <label className="gray-txt f-15">Availability</label>
                                            <CheckBoxAutoCompleteComp className="minwidth-260" placeholder={"Select"}  
                                                name="availability" options={alergy_information} value={values.availability} 
                                                onChangeData={value => setFieldValue("availability", value)}
                                            />
                                            {touched.availability && errors.availability && <div className="error pink-txt f-11">{errors.availability}</div>}
                                        </div>
                                        <div>
                                            <label className="gray-txt f-15">Time</label>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="custom-timepicker form-group ">
                                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                                            <KeyboardTimePicker
                                                                id="from-time-picker" placeholder="From"
                                                                inputVariant="outlined"
                                                                disabled={true}
                                                                mask="__:__ _M" value={values.timeFrom}
                                                                onChange={date  => setFieldValue("timeFrom", date,false)}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change time',
                                                                }}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                        {touched.timeFrom && errors.timeFrom && <div className="error pink-txt f-11">{errors.timeFrom}</div>}
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="custom-timepicker form-group ">
                                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                                            <KeyboardTimePicker
                                                                id="to-time-pickera" placeholder="To" 
                                                                inputVariant="outlined"
                                                                value={values.timeTo}  mask="__:__ _M"
                                                                onChange={value => setFieldValue("timeTo", value)}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change time',
                                                                }}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                        {touched.timeTo && errors.timeTo && <div className="error pink-txt f-11">{errors.timeTo}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="custom-drodown form-group ">
                                            <label className="gray-txt f-15">Style of Menu</label>
                                            <Field as="select" name="styleOfmenu" className="text-capitalize form-control lightgray-border selectdropdown-btn gray-txt f-15">
                                                <option value="">Select</option>
                                                {styleOf_menu && styleOf_menu.map((data, index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <option className="text-capitalize" value={data}>{data}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </Field>
                                            {touched.styleOfmenu && errors.styleOfmenu && <div className="error pink-txt f-11">{errors.styleOfmenu}</div>}
                                        </div>
                                    </div>
                                    <div className="border-top-0 pt-4 pb-4 d-flex justify-content-end">
                                        <button className="btn lightgraynoline-btn text-uppercase border-radius-25 min-width-120" type="reset" onClick={props.onHide}>CANCLE</button>
                                        <button className="btn pinkline-btn text-uppercase border-radius-25 min-width-120 ml-2" type="submit">{isAddMode?"ADD":"UPDATE"}</button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                                    
                        {/* <Formik
                            initialValues={{ name: '', availability:[],
                           
                            timeFrom:"2020-12-31T11:00:00.320Z",timeTo:new Date(),styleOfmenu:'' }}
                            validationSchema={validationSchemaForLogin}
                            onSubmit={(values) => {
                                alert(JSON.stringify(values, null, 2));
                                console.log(values)
                                handleLoginForm(values)
                            }}
                        >
                            {({
                                values, errors, touched, handleChange, handleBlur,setFieldValue, isSubmitting,
                            }) => (
                                <Form>
                    <div>
                        <div className="form-group easydish-input dishname-input w-100 custom-lightinputbox">
                            <label className="gray-txt f-15">Menu Name</label>
                            <Field name="name" placeholder="Enter here" className="form-control f-15" />
                            {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                        </div>
                        <div>
                        
                             <label className="gray-txt f-15">Availability</label>
                            <CheckBoxAutoCompleteComp 
                            className="minwidth-260"  
                            placeholder={"Select"}  
                            name="availability"
                            options={alergy_information} 
                            value={values.availability} 
                            onChangeData={value => setFieldValue("availability", value)}/>

                        </div>
                       
                        <span className="gray-txt f-15">Time{moment(values.timeFrom).format( 'HH:mm')}</span>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="custom-drodown form-group ">
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <KeyboardTimePicker
                                            id="from-time-picker"
                                            label="From"
                                            placeholder="08:00 AM"
                                            mask="__:__ _M"
                                            inputVariant="outlined"
                                            value={values.timeFrom}
                                            onChange={date  => setFieldValue("timeFrom", date,false)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                    {touched.timeFrom && errors.timeFrom && <div className="error pink-txt f-11">{errors.timeFrom}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="custom-drodown form-group ">
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <KeyboardTimePicker
                                            id="to-time-pickera"
                                            label="To"
                                            value={values.timeTo}
                                            onChange={value => setFieldValue("timeTo", value,)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                    {touched.timeTo && errors.timeTo && <div className="error pink-txt f-11">{errors.timeTo}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="custom-drodown form-group ">
                            <label className="gray-txt f-15">Style of Menu</label>
                            <Field as="select" name="styleOfmenu" className="form-control lightgray-border selectdropdown-btn gray-txt f-15">
                                <option value="">Select</option>
                                <option value="one">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Field>
                            {touched.styleOfmenu && errors.styleOfmenu && <div className="error pink-txt f-11">{errors.styleOfmenu}</div>}
                        </div>
                    </div>
                    <div className="border-top-0 pt-0">
                        <button className="btn lightgraynoline-btn text-uppercase border-radius-25 min-width-120" type="reset" onClick={props.onHide}>CANCLE</button>
                        <button className="btn pinkline-btn text-uppercase border-radius-25 min-width-120" type="submit" >ADD</button>
                    </div>
                                </Form>
                            )}
                        </Formik> */}
                    

                </Modal.Body>
              
            </Modal>

        </>
    )
}

export default AddEditMenuModalComp;