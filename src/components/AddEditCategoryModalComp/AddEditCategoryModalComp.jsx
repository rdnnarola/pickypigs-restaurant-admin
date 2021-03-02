import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Modal, Button } from 'react-bootstrap';
import { addCategoryData,getSelectedCategoryData,updateSelectedCategoryData} from "../../redux/actions/categoryAction";
import { getAllMenuData} from "../../redux/actions/menuAction";
import './AddEditCategoryModalComp.scss';

const AddEditCategoryModalComp = (props) => {
    const dispatch=useDispatch();
    let id  = props.categoryid&&props.categoryid;
    let isAddMode = !id;

    const initialValues = {
        name:'',
        menuId:'',
    }
    const validationSchema  = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        menuId: Yup.string().required('Menu is required'),
    });

    useEffect(() => {
        if (props.show) {
            if (!isAddMode) {
                dispatch(getSelectedCategoryData(props.categoryid));
            }
            dispatch(getAllMenuData({start:0,delete:0}));
        }
       
    }, [dispatch,props.show,props.categoryid]);

    let selectedCategoryData = useSelector((state)=>{
        return state.category.selectedCategory
    });   
    let menuData = useSelector((state)=>{
        return state.menu.menu_Data
    });
    

    let initialValues2={
        name:selectedCategoryData.name,
        menuId:menuData && menuData.menuDetails.find(o => o._id === selectedCategoryData.menuId)?selectedCategoryData.menuId:'',
        // menuId:selectedCategoryData.menuId,
    }
    // console.log(menuData && menuData.menuDetails.find(o => o._id === selectedCategoryData.menuId));


    const onSubmit=(fields, { setStatus })=>{
        setStatus();
        if (isAddMode) {
            createCategory(fields);
        } else {
            updateCategory(id,fields,);
        }
    }

    function createCategory(fields) {
        dispatch(addCategoryData(fields));
        props.onHide();
    }

    function updateCategory(id,fields) {
        dispatch(updateSelectedCategoryData(id,fields));
        props.onHide();
    }

    
    
    const nameExist=(name)=>{
        return props.mydata.some(function(el) {
            return el.name === name;
          });
    }
    
    return (
        <>
            <Modal
                {...props}
                backdrop="static"
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                className="mainmodal-wrapper"
                centered
            >
                <Modal.Header className="align-items-center">
                    <Modal.Title className="brandon-Medium" id="contained-modal-title-vcenter">
                        Add / Edit Category{JSON.stringify( menuData && menuData.menuDetails.find(o => o._id === selectedCategoryData&&selectedCategoryData.menuId))}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik enableReinitialize={true} initialValues={isAddMode?initialValues:initialValues2} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {({ errors, touched, isSubmitting, setFieldValue,handleChange }) => {
                            return (
                                <Form>
                                    <div>
                                        <div className="form-group easydish-input dishname-input w-100 custom-lightinputbox">
                                            <label className="gray-txt f-15">Category Name</label>
                                            <Field name="name"  placeholder="Enter here" className="form-control f-15" />
                                            {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                        </div>
                                    
                                        <div className="custom-drodown form-group ">
                                            <label className="gray-txt f-15">Menu</label>
                                            <Field as="select" name="menuId" className="form-control lightgray-border selectdropdown-btn gray-txt f-15">
                                                <option value="">Select</option>
                                                {menuData && menuData.menuDetails.map((data, index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <option className="text-capitalize" value={data._id}>{data.name}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </Field>
                                            {touched.menuId && errors.menuId && <div className="error pink-txt f-11">{errors.menuId}</div>}
                                        </div>
                                    </div>
                                    <div className="border-top-0 pt-4 pb-4 d-flex justify-content-end">
                                        <button className="btn lightgraynoline-btn text-uppercase border-radius-25 min-width-120" type="reset" onClick={props.onHide}>CANCLE</button>
                                        <button className="btn pinkline-btn text-uppercase border-radius-25 min-width-120 ml-2" type="submit" disabled={isSubmitting}>{isAddMode?"ADD":"UPDATE"}</button>
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

export default AddEditCategoryModalComp;