import React,{useState,useEffect} from "react";
import './AddEditSubMenuModalComp.scss';
import { Modal, Button } from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux";
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider,KeyboardTimePicker} from '@material-ui/pickers';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CheckBoxAutoCompleteComp from "../CheckBoxAutoCompleteComp/CheckBoxAutoCompleteComp";
import moment from 'moment'
import { addSubMenuData, getSelectedSubMenuData, updateSelectedSubMenuData } from "../../redux/actions/submenuAction";
import { getAllMenuData} from "../../redux/actions/menuAction";


const alergy_information = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const styleOf_menu=["drinks","Meal","breakfast","lunch","dinner","dessert","buffet"]

const AddEditSubMenuModalComp = (props) => {

    const dispatch=useDispatch();
    let id  = props.submenuid&&props.submenuid;
    let isAddMode = !id;

    const initialValues = {
        name:'',
        timeFrom:null,
        timeTo:null,
        type: "submenu",
        availability:[],
        styleOfmenu:'',
        parentMenu: '',

    }

    const validationSchema  = Yup.object().shape({
        name:Yup.string().required('Title is required'),
        timeFrom:Yup.date().nullable().required('Required'),
        timeTo:Yup.date().nullable().required('Required'),
        availability:Yup.array().required('Title is required'),
        styleOfmenu:Yup.string().required('Title is required'),
        parentMenu:Yup.string().required('Title is required'),

    });

    useEffect(() => {
        if (props.show) {
            if (!isAddMode) {
                dispatch(getSelectedSubMenuData(props.submenuid));
            }
            dispatch(getAllMenuData({start:0}));
        }
    }, [dispatch,props.show,props.submenuid]);

    let subMenuData = useSelector((state)=>{
        return state.submenu.selectedSubMenu
    });

    let menuData = useSelector((state)=>{
        return state.menu.menu_Data
    });

    let initialValues2={
        name:subMenuData.name,
        timeFrom:`Thu Dec 31 2020 ${subMenuData.timeFrom} GMT+0530`,
        timeTo:`Thu Dec 31 2020 ${subMenuData.timeTo} GMT+0530`,
        availability:subMenuData.availability,
        type: "submenu",
        styleOfmenu:subMenuData.styleOfmenu,
        parentMenu: subMenuData.parentMenu
    }

    const onSubmit=(fields, { setStatus })=>{
        setStatus();
        if (isAddMode) {
            createSubMenuRequest(fields);
        } else {
            updateSubMenuRequest(id,fields,);
        }
    }

    function createSubMenuRequest(fields) {
      
        dispatch(addSubMenuData({...fields,timeFrom:moment(fields.timeFrom).format( 'HH:mm'),timeTo:moment(fields.timeTo).format( 'HH:mm')}));
        props.onHide();
    }

    function updateSubMenuRequest(id,fields) {
        dispatch(updateSelectedSubMenuData(id,{...fields,timeFrom:moment(fields.timeFrom).format( 'HH:mm'),timeTo:moment(fields.timeTo).format( 'HH:mm')}));
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
                        Add / Edit Sub Menu
                            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik enableReinitialize={true} initialValues={isAddMode?initialValues:initialValues2} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {({ errors, touched,values, isSubmitting, setFieldValue,handleChange }) => {
                            return (
                                <Form>
                                    <div>
                                        <div className="form-group easydish-input dishname-input w-100 custom-lightinputbox">
                                            <label className="gray-txt f-15">Sub Menu Name</label>
                                            <Field name="name" placeholder="Enter here" className="form-control f-15" />
                                            {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                        </div>
                                        <div className="custom-drodown form-group ">
                                            <label className="gray-txt f-15">Menu Name</label>
                                            <Field as="select" name="parentMenu" className="form-control lightgray-border selectdropdown-btn gray-txt f-15">
                                                <option value="">Select</option>
                                                {menuData && menuData.menuDetails.map((data, index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <option value={data._id}>{data.name}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </Field>
                                            {touched.parentMenu && errors.parentMenu && <div className="error pink-txt f-11">{errors.parentMenu}</div>}
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
                                                    <div className="custom-drodown form-group ">
                                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                                            <KeyboardTimePicker
                                                                id="from-time-picker" placeholder="From"
                                                                inputVariant="outlined"
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
                                                    <div className="custom-drodown form-group ">
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
                                            <label className="gray-txt f-15">Style of Sub Menu</label>
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

                </Modal.Body>
              
            </Modal>

        </>
    )
}

export default AddEditSubMenuModalComp;