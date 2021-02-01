import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { Modal, Button } from 'react-bootstrap';
import { Field, Form, Formik, } from 'formik';
import * as Yup from 'yup';
import {addSubCategoryData,getSelectedSubCategoryData, updateSelectedSubCategoryData, updateSubCategoryForm} from "../../redux/actions/subcategoryAction";
import { getAllMenuData} from "../../redux/actions/menuAction";
import { getCategoryListOfSelectedMenu} from "../../redux/actions/categoryAction";
import './AddEditSubCategoryModalComp.scss';



const AddEditSubCategoryModalComp = (props) => {
    const dispatch=useDispatch();
    let id  = props.subcategoryid&&props.subcategoryid;
    let isAddMode = !id;

    const initialValues = {
        name:'',
        categoryId:'',
        menuId:'',
    }
    
    const validationSchema  = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        categoryId: Yup.string().required('Category is required'),
        menuId: Yup.string().required('Menu is required'),
    });

    const onSubmit=(fields, { setStatus })=>{
        setStatus();
        if (isAddMode) {
            createSubCategory(fields);
        } else {
            updateSubCategory(id,fields,);
        }
    }

    function createSubCategory(fields) {
        dispatch(addSubCategoryData(fields));
        props.onHide();
    }

    function updateSubCategory(id,fields) {
        dispatch(updateSelectedSubCategoryData(id,fields));
        props.onHide();
    }
    
    useEffect(() => {
        if (!isAddMode) {
            // get SubCategory 
            if (props.show) {
                dispatch(getSelectedSubCategoryData(props.subcategoryid));
            }
        }
        if (props.show) {
            dispatch(getAllMenuData({start:0}));
        }
    }, [dispatch,props.show,props.subcategoryid]);

    const handleUserChange=(value)=>{
        
        dispatch(getCategoryListOfSelectedMenu({menuId:[value]}));
    }

    let selectedSubCategoryData = useSelector((state)=>{
        return state.subcategory.selectedSubCategory
    });    
    let menuData = useSelector((state)=>{
        return state.menu.menu_Data
    });
    let categoryData = useSelector((state)=>{
        return state.category.selectedMenuCategoryList
    });

    useEffect(() => {
        if (props.show) {
            // get SubCategory 
            if (!isAddMode) {
                dispatch(getCategoryListOfSelectedMenu({menuId:[selectedSubCategoryData.menuId]}));
            }
        }
    }, [dispatch,props.show,selectedSubCategoryData.menuId]);

    let initialValues2={
        name:selectedSubCategoryData.name,
        categoryId:categoryData && categoryData.find(o => o._id === selectedSubCategoryData.categoryId)?selectedSubCategoryData.categoryId:'',
        menuId:menuData && menuData.menuDetails.find(o => o._id === selectedSubCategoryData.menuId)?selectedSubCategoryData.menuId:'',
    }
    
    return (
        <>
        
            <section >
                <div>
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
                                Add / Edit Sub Category 
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Formik enableReinitialize={true} initialValues={isAddMode?initialValues:initialValues2} validationSchema={validationSchema} onSubmit={onSubmit}  >
                                {({values, errors, touched, isSubmitting, setFieldValue,handleChange }) => {
                                   
                                   
                                    return (
                                        <Form>
                                            <div>
                                                <div className="form-group easydish-input dishname-input w-100 custom-lightinputbox">
                                                    <label className="gray-txt f-15">Sub Category Name{}</label>
                                                    <Field name="name"  placeholder="Enter here" className="form-control f-15" />
                                                    {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                                </div>
                                                
                                                <div className="custom-drodown form-group ">
                                                    <label className="gray-txt f-15">Menu</label>
                                                    <Field as="select" name="menuId"  value={values.menuId} 
                                                        onChange={e => {
                                                            handleChange(e)
                                                            let someValue = e.currentTarget.value
                                                            handleUserChange(someValue) 
                                                        }}                                                   
                                                        className="form-control lightgray-border selectdropdown-btn gray-txt f-15">
                                                        <option value="">Select</option>
                                                        {menuData && menuData.menuDetails.map((data, index)=>{
                                                            return(
                                                                <React.Fragment key={index}>
                                                                    <option value={data._id}>{data.name}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </Field>
                                                    {/* {values.menuId&&handleUserChange(values.menuId)} */}

                                                    {touched.menuId && errors.menuId && <div className="error pink-txt f-11">{errors.menuId}</div>}
                                                </div>
                                                {}
                                                <div className="custom-drodown form-group ">
                                                    <label className="gray-txt f-15">Category</label>
                                                    <Field as="select" name="categoryId" className="form-control lightgray-border selectdropdown-btn gray-txt f-15">
                                                        <option value="">Select</option>
                                                        {categoryData && categoryData.map((data, index)=>{
                                                            return(
                                                                <React.Fragment key={index}>
                                                                    <option value={data._id}>{data.name}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </Field>
                                                    {touched.categoryId && errors.categoryId && <div className="error pink-txt f-11">{errors.categoryId}</div>}
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
                </div>
            </section>

        </>
    )
}

export default AddEditSubCategoryModalComp;