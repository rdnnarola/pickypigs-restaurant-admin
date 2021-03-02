import React, { useState, useEffect } from "react";
import './UpdateEasyAddDishComp.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"
import CaloriesMacrosModalComp from "../CaloriesMacrosModalComp/CaloriesMacrosModalComp";
import CheckBoxAutoCompleteComp from "../CheckBoxAutoCompleteComp/CheckBoxAutoCompleteComp";
import { JsonWebTokenError } from "jsonwebtoken";
import { updateSelectedDiscData, getSelectedDiscData } from "../../redux/actions/dishesAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllMenuData } from "../../redux/actions/menuAction";
import CheckBoxAutoCompleteSecondComp from "../CheckBoxAutoCompleteSecondComp/CheckBoxAutoCompleteSecondComp";
import { getCategoryListOfSelectedMenu } from "../../redux/actions/categoryAction";
import { getSubCategoryListOfSelectedCategory } from "../../redux/actions/subcategoryAction";
import { Field, Form, Formik, ErrorMessage, FieldArray, getIn } from 'formik';
import * as Yup from 'yup';
import { getAllAllergyData, getAllDietaryData, getAllLifestyleData, getAllCookingData } from "../../redux/actions/allergyAction";
import { SERVER_URL } from '../../shared/constant'
import CheckBoxAutoCompleteThirdComp from "../CheckBoxAutoCompleteThirdComp/CheckBoxAutoCompleteThirdComp";
import uploadimg_icon from "../../assets/images/uploadimg-icon.svg";
import CustomLoadingComp from "../CustomLoadingComp/CustomLoadingComp";
import moment from "moment";



const styleOf_currency = ["$", "a", "b"]
const numRegExp = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

const UpdateEasyAddDishComp = () => {
    const params = useParams();
    let discId = params.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const [myData, setMyData] = useState([]);
    const [descModal, setDescModal] = useState(false);
    const [addItem, setAddItem] = useState(true);

    useEffect(() => {
        dispatch(getSelectedDiscData(discId));
    }, [dispatch, discId]);

    let selectedDisc_data = useSelector((state) => {
        return state.dishes.selected_Disc
    });

    useEffect(() => {
        dispatch(getAllAllergyData())
        dispatch(getAllDietaryData())
        dispatch(getAllLifestyleData())
        dispatch(getAllCookingData())

    }, [dispatch])
    let allAllergy_data = useSelector((state) => {
        return state.allergy
    });
    let { isLoading, allergy_Data, dietary_Data, lifestyle_Data, cooking_Data } = allAllergy_data;

    const handleAlergy = (e, fieldValue, setFieldValue, fieldname) => {
        e.preventDefault();
        if (fieldValue.indexOf(e.target.id) !== -1) {
            var Index = fieldValue.indexOf(e.target.id);
            if (Index > -1) {
                // setAlergy(fieldValue.slice(0,Index).concat(fieldValue.slice(Index+ 1, fieldValue.length)));
                setFieldValue(fieldname, fieldValue.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setFieldValue(fieldname, [...fieldValue, e.target.id]);
        }
    }
    const galleryImageUploadHandeler = (e, fieldValue, setFieldValue, fieldname) => {
        e.preventDefault();
        if (e.target.files[0]) {
            setFieldValue(fieldname, e.target.files[0]);

        }
    }
    //--------- Getting All Menu Data -------//
    useEffect(() => {
        dispatch(getAllMenuData({ start: 0, delete: 0 }));

    }, [dispatch]);

    let menuData = useSelector((state) => {
        return state.menu.menu_Data
    });
    //--------- Getting All Menu Data Ends -------//


    //--------- Getting All Category Data -------//
    const getCategoryAction = (data) => {
        if (data && data.length > 0 !== "") {
            dispatch(getCategoryListOfSelectedMenu({ menuId: data }));

        } else {
            dispatch(getCategoryListOfSelectedMenu({ menuId: [] }));
        }
    }
    useEffect(() => {
        if (selectedDisc_data && selectedDisc_data[0].menuId !== "") {
            dispatch(getCategoryListOfSelectedMenu({ menuId: selectedDisc_data && selectedDisc_data[0].menuId }));
        } else {
            dispatch(getCategoryListOfSelectedMenu({ menuId: [] }));
        }
    }, [dispatch, selectedDisc_data && selectedDisc_data[0].menuId]);

    let categoryData = useSelector((state) => {
        return state.category.selectedMenuCategoryList
    });
    //--------- Getting All Category Data Ends -------//


    //--------- Getting All Sub-Category Data -------//
    const getSubCategoryAction = (value) => {

        if (value !== "") {
            dispatch(getSubCategoryListOfSelectedCategory(value));
        } else {
            dispatch(getSubCategoryListOfSelectedCategory("5fb6137b358d872b7cce1404"));
        }
    }
    useEffect(() => {

        if (selectedDisc_data && selectedDisc_data[0].categoryId !== "") {
            dispatch(getSubCategoryListOfSelectedCategory(selectedDisc_data && selectedDisc_data[0].categoryId));
        } else {
            dispatch(getSubCategoryListOfSelectedCategory("5fb6137b358d872b7cce1404"));
        }
    }, [dispatch, selectedDisc_data && selectedDisc_data[0].categoryId]);

    let subcategoryData = useSelector((state) => {
        return state.subcategory.selectedCategorySubcategoryList
    });
    //--------- Getting All Sub-Category Data Ends-------//

    const handleDescModal = () => {
        setDescModal(!descModal);
    }

    let myLoading = useSelector((state) => {
        return state.dishes.isLoading
    })

    const initialValues = {
        name: selectedDisc_data && selectedDisc_data[0].name ? selectedDisc_data[0].name : '',
        makes: selectedDisc_data && selectedDisc_data[0].makes ? selectedDisc_data[0].makes : '',
        price: selectedDisc_data && selectedDisc_data[0].price ? selectedDisc_data[0].price : '',
        grossProfit: selectedDisc_data && selectedDisc_data[0].grossProfit ? selectedDisc_data[0].grossProfit : '',
        image: selectedDisc_data && selectedDisc_data[0].image ? selectedDisc_data[0].image : '',
        favorite: selectedDisc_data && selectedDisc_data[0].favorite ? selectedDisc_data[0].favorite : false,
        new: selectedDisc_data && selectedDisc_data[0].new ? selectedDisc_data[0].new : false,
        available: selectedDisc_data && selectedDisc_data[0].available ? selectedDisc_data[0].available : false,
        menuId: selectedDisc_data && selectedDisc_data[0].menuId ? selectedDisc_data[0].menuId : [],
        categoryId: selectedDisc_data && selectedDisc_data[0].categoryId ? selectedDisc_data[0].categoryId : '',
        subcategoryId: selectedDisc_data && selectedDisc_data[0].subcategoryId ? selectedDisc_data[0].subcategoryId : '',
        allergenId: selectedDisc_data && selectedDisc_data[0].allergenId ? selectedDisc_data[0].allergenId : [],
        dietaryId: selectedDisc_data && selectedDisc_data[0].dietaryId ? selectedDisc_data[0].dietaryId : [],
        lifestyleId: selectedDisc_data && selectedDisc_data[0].lifestyleId ? selectedDisc_data[0].lifestyleId : [],
        cookingMethodId: selectedDisc_data && selectedDisc_data[0].cookingMethodId ? selectedDisc_data[0].cookingMethodId : [],
        instructions: selectedDisc_data && selectedDisc_data[0].instructions ? selectedDisc_data[0].instructions : '',
        customisable: selectedDisc_data && selectedDisc_data[0].customisable ? selectedDisc_data[0].customisable : false,
        createNewVersion: selectedDisc_data && selectedDisc_data[0].createNewVersion ? selectedDisc_data[0].createNewVersion : false,
        ingredientSection: {},
        caloriesAndMacros: selectedDisc_data && selectedDisc_data[0].caloriesAndMacros ? selectedDisc_data[0].caloriesAndMacros : '',
        ingredient: selectedDisc_data && selectedDisc_data[0].ingredientSection && selectedDisc_data[0].ingredientSection.dish_ingredients ? selectedDisc_data[0].ingredientSection.dish_ingredients : [],
        priceUnit: selectedDisc_data && selectedDisc_data[0].priceUnit ? selectedDisc_data[0].priceUnit : '',
        deleteIngredients: [],
        description: selectedDisc_data && selectedDisc_data[0].description ? selectedDisc_data[0].description : '',
        description2: selectedDisc_data && selectedDisc_data[0].description ? selectedDisc_data[0].description : '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        makes: Yup.string().required('Serving is required'),
        price: Yup.string().required('Price is required'),
        grossProfit: Yup.string().required('Profit is required'),
        image: Yup.mixed().required('Image is required'),
        favorite: Yup.boolean().oneOf([true, false]),
        new: Yup.boolean().oneOf([true, false]),
        available: Yup.boolean().oneOf([true, false]),
        menuId: Yup.array().required('Please Select Menu'),
        categoryId: Yup.string().required('category is required'),
        subcategoryId: Yup.string().required('subcategory is required'),
        description2: Yup.string().required('description is required'),
        allergenId: Yup.array().required('Please Select allergen'),
        dietaryId: Yup.array().required('Please Select  dietary'),
        lifestyleId: Yup.array().required('Please Select lifestyle'),
        cookingMethodId: Yup.array().required('Please Select cookingMethod'),
        instructions: Yup.string().required('instructions is required'),
        customisable: Yup.boolean().oneOf([true, false]),
        createNewVersion: Yup.boolean().oneOf([true, false]),
        ingredient: Yup.array()
            .of(
                Yup.object().shape({
                    item: Yup.string().required("item required"),
                    qty: Yup.string().required('required').matches(numRegExp, 'Enter Valid Number'),
                    allergeies: Yup.array().required('Please Select allergeies'),
                })
            ).required('Must have Items'),
        caloriesAndMacros: Yup.string().required('required'),
        priceUnit: Yup.string().required('priceUnit is required'),

    });


    const onSubmit = (fields) => {

        let obj = {
            name: fields.name,
            makes: fields.makes,
            priceUnit: fields.priceUnit,
            price: fields.price,
            grossProfit: fields.grossProfit,
            image: fields.image,
            favorite: fields.favorite,
            new: fields.new,
            available: fields.available,
            menuId: fields.menuId,
            categoryId: fields.categoryId,
            subcategoryId: fields.subcategoryId,
            description: fields.description,
            allergenId: fields.allergenId,
            dietaryId: fields.dietaryId,
            lifestyleId: fields.lifestyleId,
            cookingMethodId: fields.cookingMethodId,
            instructions: fields.instructions,
            customisable: fields.customisable,
            createNewVersion: fields.createNewVersion,
            ingredientSection: {
                total: fields.ingredient && fields.ingredient.length >= 0 && fields.ingredient.reduce((prev, next) => prev + next.qty, 0),
                ingredient: fields.ingredient,
                deleteIngredients: fields.deleteIngredients,
            },
            caloriesAndMacros: fields.caloriesAndMacros,
        }
        console.log(obj)

        dispatch(updateSelectedDiscData(discId, obj, history));
    }
    const handleCancleEdit = (resetForm) => {
        history.push('/all_dishes');
        resetForm()
    }
    return (
        <>
            <section className="UpdateEasyAddDishComp-comp">
                <React.Fragment>
                    {myLoading && myLoading ?
                        <CustomLoadingComp />
                        :
                        null
                    }
                </React.Fragment>
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, resetForm, setFieldValue, handleChange, values }) => {
                            return (
                                <Form>
                                    <React.Fragment>
                                        {/* {JSON.stringify(values.description)} */}
                                        {/* || */}
                                        {/* {JSON.stringify(dishesData)} */}
                                        {/* || */}
                                        {/* {JSON.stringify(categoryId)} */}
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="page-heading brandon-Medium d-flex justify-content-between align-items-center">
                                                    <h4>Update Easy Add Dish</h4>
                                                    <div>
                                                        <p className="mb-0 lastedit-txt brandon-Medium"><span>Last edited : </span>
                                                            {selectedDisc_data && selectedDisc_data[0] && selectedDisc_data[0].updatedAt ? moment(selectedDisc_data[0].updatedAt).format(" Do MMMM, YYYY") : "Not Available"}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div>
                                            <div className="row mt-4 pt-1">
                                                <div className="col-md-9">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <p className="mb-4">
                                                                <span className="recipe-msg brandon-Medium">
                                                                    This recipe does not contain its dietary preferences and lifestyle choices. Consider updating before adding to a dish
                                                            </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-4 form-group mb-0 easydish-input dishname-input">
                                                            <label className="gray-txt f-15 brandon-Medium">Dish name</label>
                                                            <Field name="name" placeholder="Dish name" className="form-control" />
                                                            {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                                        </div>
                                                        <div className="col-md-3 form-group mb-0 easydish-serving-input makes-input">
                                                            <label className="gray-txt f-15 brandon-Medium">Makes</label>
                                                            <div className="makesserving-wrapper">
                                                                <Field name="makes" type="number" placeholder="1.000" className="form-control" />
                                                                <span className="serving-txt">Serving</span>
                                                            </div>
                                                            {touched.makes && errors.makes && <div className="error pink-txt f-11">{errors.makes}</div>}
                                                        </div>

                                                        <div className="col-md-3 form-group mb-0 easydish-select-input price-input">
                                                            <label className="gray-txt f-15 brandon-Medium">Price</label>
                                                            <div className="d-flex align-items-center border rounded">

                                                                <Field as="select" name="priceUnit" className="form-control border border-white">
                                                                    {styleOf_currency && styleOf_currency.map((data, index) => {
                                                                        return (
                                                                            <React.Fragment key={index}>
                                                                                <option className="text-capitalize" value={data}>{data}</option>
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </Field>
                                                            |
                                                            <Field name="price" type="number" placeholder="0.00" className="form-control border border-white" />
                                                            </div>
                                                            {touched.price && errors.price && <div className="error pink-txt f-11">{errors.price}</div>}
                                                            {touched.priceUnit && errors.priceUnit && <div className="error pink-txt f-11">{errors.priceUnit}</div>}
                                                        </div>
                                                        <div className="col-md-2 form-group mb-0 easydish-input gross-input">
                                                            <label className="gray-txt f-15 brandon-Medium">Gross Profit</label>
                                                            <Field name="grossProfit" type="number" placeholder="0%" className="form-control" />
                                                            {touched.grossProfit && errors.grossProfit && <div className="error pink-txt f-11">{errors.grossProfit}</div>}
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-wrap mb-4">
                                                        <div className="custom-control custom-checkbox pinkline-checkbox mr-5 pr-4">
                                                            <Field type="checkbox" name="favorite" id="favorite" className="custom-control-input" />
                                                            <label className="custom-control-label f-15 pl-2 brandon-Medium" htmlFor="favorite">Favorite</label>
                                                            {touched.favorite && errors.favorite && <div className="error pink-txt f-11">{errors.favorite}</div>}
                                                        </div>
                                                        <div className="custom-control custom-checkbox pinkline-checkbox mr-5 pr-4">
                                                            <Field type="checkbox" name="new" id="new" className="custom-control-input" />
                                                            <label className="custom-control-label f-15 pl-2 brandon-Medium" htmlFor="new">New</label>
                                                            {touched.new && errors.new && <div className="error pink-txt f-11">{errors.new}</div>}
                                                        </div>
                                                        <div className="custom-control custom-checkbox pinkline-checkbox">
                                                            <Field type="checkbox" name="available" id="available" className="custom-control-input" />
                                                            <label className="custom-control-label f-15 pl-2 brandon-Medium" htmlFor="available">Available</label>
                                                            {touched.available && errors.available && <div className="error pink-txt f-11">{errors.available}</div>}
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mb-4">
                                                        {/* <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Menu</label>
                                                        <CheckBoxAutoCompleteSecondComp 
                                                            className="minwidth-260" 
                                                            placeholder={"Select"} 
                                                            options={menuData&&menuData.menuDetails} 
                                                            name="menuId" 
                                                            value={values.menuId} 
                                                            // onChangeData={setMenuValue}
                                                            // onChangeData={(e)=>{handleMenuChange(e,values.menuId,setFieldValue,"menuId")}}
                                                            // onClick={(e)=>{handleAlergy(e,values.dietaryId,setFieldValue,"dietaryId")}}
                                                            onChangeData={(value)=> {setFieldValue("menuId", value)}}
                                                        />
                                                    </div> */}
                                                        <div className="custom-drodown form-group mr-5 mb-0">
                                                            <label className="gray-txt f-15 brandon-Medium">Menu</label>
                                                            <CheckBoxAutoCompleteSecondComp
                                                                className="minwidth-260 brandon-Medium"
                                                                placeholder={"menu_options"}
                                                                options={menuData && menuData.menuDetails ? menuData.menuDetails : []}
                                                                value={values.menuId}
                                                                onChangeData={(value) => { setFieldValue("menuId", value); setFieldValue("categoryId", ''); setFieldValue("subcategoryId", ''); getCategoryAction(value); }}
                                                            />
                                                            {touched.menuId && errors.menuId && <div className="error pink-txt f-11">{errors.menuId}</div>}
                                                        </div>
                                                        <div className="custom-drodown form-group mr-5 mb-0">
                                                            <label className="gray-txt f-15 brandon-Medium">Category</label>
                                                            <Field as="select" name="categoryId" onChange={(e) => { setFieldValue("categoryId", e.target.value); getSubCategoryAction(e.target.value); setFieldValue("subcategoryId", ''); }} className="brandon-Medium form-control lightgray-border selectdropdown-btn minwidth-260">
                                                                <option value="">Select</option>
                                                                {categoryData && categoryData.map((data, index) => {
                                                                    return (
                                                                        <React.Fragment key={index}>
                                                                            <option value={data._id}>{data.name}</option>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </Field>
                                                            {touched.categoryId && errors.categoryId && <div className="error pink-txt f-11">{errors.categoryId}</div>}
                                                        </div>
                                                        <div className="custom-drodown form-group mr-4 mb-0">
                                                            <label className="gray-txt f-15 brandon-Medium">Sub-Category</label>
                                                            <Field as="select" name="subcategoryId" onChange={(e) => { setFieldValue("subcategoryId", e.target.value); }} className="brandon-Medium form-control lightgray-border selectdropdown-btn minwidth-260">
                                                                <option value="">Select</option>
                                                                {subcategoryData && subcategoryData.map((data, index) => {
                                                                    return (
                                                                        <React.Fragment key={index}>
                                                                            <option value={data._id}>{data.name}</option>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </Field>
                                                            {touched.subcategoryId && errors.subcategoryId && <div className="error pink-txt f-11">{errors.subcategoryId}</div>}
                                                        </div>
                                                        {/* <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Category</label>
                                                        <select name="categoryId" onChange={handleManageAddDish} className="form-control lightgray-border selectdropdown-btn minwidth-260" aria-label="Default select example">
                                                            <option value="">Select</option>
                                                            {categoryData && categoryData.map((data, index)=>{
                                                                return(
                                                                    <React.Fragment key={index}>
                                                                        <option value={data._id}>{data.name}</option>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </select>
                                                    </div> */}
                                                        {/* <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Sub-Category</label>
                                                        <select name="subcategoryId" onChange={handleManageAddDish} value={dishesData.subcategoryId} className="form-control lightgray-border selectdropdown-btn minwidth-260" aria-label="Default select example">
                                                            <option value="">Select</option>
                                                            {subcategoryData && subcategoryData.map((data, index)=>{
                                                                return(
                                                                    <React.Fragment key={index}>
                                                                        <option value={data._id}>{data.name}</option>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </select>
                                                    </div> */}
                                                    </div>
                                                    <div className="w-100 mb-4 pb-3 position-relative add-description-wrapper">
                                                        <button type="button" className="w-100 add-description-btn brandon-Bold" onClick={handleDescModal}>ADD DESCRIPTION<span className="brandon-regular">+</span></button>
                                                        {descModal &&
                                                            <div className="my_shadow mb-3 bg-white w-100 add-description-subwrapper" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                                                                <div className="d-flex add-description-head justify-content-between align-items-center">
                                                                    <h6 className="brandon-Bold text-uppercase">Add Description</h6>
                                                                    <div className="add-description-inputbtn">
                                                                        <button type="reset" className="cancel-btn brandon-Medium" onClick={() => { handleDescModal(); setFieldValue("description2", values.description) }}>Cancel</button>
                                                                        <button type="button" className="save-btn ml-3 brandon-Medium" onClick={() => { handleDescModal(); setFieldValue("description", values.description2) }}>Save</button>
                                                                    </div>
                                                                </div>
                                                                <Field component='textarea' name="description2" rows='5' className="form-control add-description-textarea" placeholder="Type Here" />
                                                            </div>
                                                        }
                                                        {touched.description2 && errors.description2 && <div className="error pink-txt f-11">{errors.description2}</div>}

                                                    </div>

                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">

                                                        <form>
                                                            <div className="form-group">
                                                                <div className="fileUpload text-center my_shadow bg-white d-flex flex-column align-items-center justify-content-center ml-auto">
                                                                    {values.image ?
                                                                        typeof values.image === 'string' || values.image instanceof String ?
                                                                            <img src={`${SERVER_URL}/${values.image}`} width="82px" height="82px" className="img-fluid mb-3" alt={values && values.name ? values.name : "image"} />
                                                                            :
                                                                            <img src={URL.createObjectURL(values.image)} width="82px" height="82px" className="img-fluid mb-3" alt="image" />

                                                                        :
                                                                        // <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-image-upload-icon-photo-upload-icon-png-image_5279795.jpg" className="img-fluid" width="150px" alt="image_upload" />
                                                                        <img src={uploadimg_icon} width="82px" height="82px" className="img-fluid mb-3" alt="image" />
                                                                    }
                                                                    
                                                                    <span className="f-15 gray-txt brandon-Medium">Upload Image <br /> or drag and drop image here</span>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        name="image"
                                                                        className="form-control-file userprofile-control upload"
                                                                        // onChange={(e)=>{galleryImageUploadHandeler(e,values.image,setFieldValue,"image")}}
                                                                        onChange={(e) => { setFieldValue("image", e.target.files[0]) }}
                                                                        onCan
                                                                    />

                                                                    {/* <br></br>
                                                                    <span className="brandon-Medium text-center">Upload Image <br></br>or drag and drop image here</span> */}
                                                                </div>
                                                            </div>
                                                        </form>
                                                        {touched.image && errors.image && <div className="error pink-txt f-11">{errors.image}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FieldArray name="ingredient">
                                            {({ insert, remove, push }) => (
                                                <React.Fragment>
                                                    <div className="row mb-4 pb-2">
                                                        <div className="col-sm-12">
                                                            <div className="table-responsive my_custom_table mb-4 add-dish-table">
                                                                <table className="table table-striped table-main">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="brandon-Bold" scope="col">ITEM</th>
                                                                            <th className="brandon-Bold " scope="col">ALLERGIES</th>
                                                                            <td className=""></td>
                                                                            <th className="brandon-Bold text-right" scope="col">QTY</th>
                                                                            <th className="brandon-Bold text-center" scope="col">CUSTOMISABLE</th>
                                                                            <th className="brandon-Bold text-right" scope="col">Action</th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {values.ingredient && values.ingredient.length > 0 ?
                                                                            <React.Fragment>

                                                                                {values.ingredient && values.ingredient.map((data, index) => {
                                                                                    return (
                                                                                        <React.Fragment key={index}>
                                                                                            {addItem ?
                                                                                                <React.Fragment key={index}>
                                                                                                    <tr >
                                                                                                        <td>{data.item}</td>
                                                                                                        <td className="">
                                                                                                            {data.allergenlist && data.allergenlist.map((data, index) => {
                                                                                                                return (
                                                                                                                    <React.Fragment key={index}>
                                                                                                                        {(index ? ' , ' : '') + data.name}
                                                                                                                    </React.Fragment>
                                                                                                                )
                                                                                                            })}
                                                                                                        </td>
                                                                                                        <td className=""></td>

                                                                                                        <td className="text-right">{data.qty} %</td>
                                                                                                        <td className="text-center">
                                                                                                            <div className="custom-control custom-checkbox pink-checkbox pinkgray-checkbox-style">
                                                                                                                <input type="checkbox" disabled className="custom-control-input" id={index} defaultChecked={data.customisable} />
                                                                                                                <label className="custom-control-label" htmlFor={index}></label>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="text-right"></td>
                                                                                                    </tr>
                                                                                                </React.Fragment>

                                                                                                :
                                                                                                <React.Fragment >
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <Field className="form-control" name={`ingredient.${index}.item`} placeholder="item" type="text" />
                                                                                                            <ErrorMessage className="pink-txt f-11" name={`ingredient.${index}.item`} />
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <CheckBoxAutoCompleteThirdComp placeholder={"Allergy Values"}
                                                                                                                options={allergy_Data && allergy_Data.data ? allergy_Data.data : []} name={`ingredient.${index}.allergeies`}
                                                                                                                value={data.allergeies}
                                                                                                                onChangeData={(value) => { setFieldValue(`ingredient.${index}.allergeies`, value) }}
                                                                                                            />
                                                                                                            <ErrorMessage className="pink-txt f-11" name={`ingredient.${index}.allergeies`} />

                                                                                                        </td>
                                                                                                        <td className=""></td>
                                                                                                        <td>
                                                                                                            <Field className="form-control" name={`ingredient.${index}.qty`} placeholder="Qty" type="number" />
                                                                                                            <ErrorMessage className="pink-txt f-11" name={`ingredient.${index}.qty`} />
                                                                                                        </td>
                                                                                                        <td className="text-center">
                                                                                                            <div className="custom-control custom-checkbox pink-checkbox pinkgray-checkbox-style">
                                                                                                                <Field
                                                                                                                    name={`ingredient.${index}.customisable`}
                                                                                                                    type="checkbox"
                                                                                                                    className="custom-control-input"
                                                                                                                    id={`ingredient.${index}.customisable`}
                                                                                                                />
                                                                                                                <label className="custom-control-label" htmlFor={`ingredient.${index}.customisable`}></label>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="text-center">
                                                                                                            {data._id && data._id ?
                                                                                                                <button type="button" className="secondary actionclose-btn m-auto" onClick={() => { remove(index); setFieldValue("deleteIngredients", [...values.deleteIngredients, data._id]) }}>X</button>
                                                                                                                :
                                                                                                                <button type="button" className="secondary actionclose-btn m-auto" onClick={() => { remove(index) }}>X</button>
                                                                                                            }
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                </React.Fragment>

                                                                                            }
                                                                                        </React.Fragment>
                                                                                    )
                                                                                }
                                                                                )
                                                                                }

                                                                            </React.Fragment>
                                                                            :
                                                                            null
                                                                        }
                                                                    </tbody>
                                                                    <tfoot>
                                                                        <tr className="item-cost">
                                                                            <td>
                                                                                <span className="d-flex align-items-center">
                                                                                    <span className="itemsplus-icon">+</span>
                                                                                    {addItem ?
                                                                                        <button type="button" className="additems-btn brandon-Medium" onClick={() => { setAddItem(false) }}>Click to add item</button>
                                                                                        :
                                                                                        <React.Fragment>
                                                                                            <button type="button" className="additems-btn" onClick={() => { push({ item: '', qty: '', allergeies: [], customisable: false }) }}>Click to add item</button>
                                                                                            {/* <button onClick={() => {setAddItem(true)}}>save</button> */}
                                                                                            <button className="cancel-btn" onClick={() => { setAddItem(true); setFieldValue("deleteIngredients", []); setFieldValue("ingredient", selectedDisc_data && selectedDisc_data[0].ingredientSection && selectedDisc_data[0].ingredientSection.dish_ingredients) }}>Cancel</button>
                                                                                        </React.Fragment>
                                                                                    }
                                                                                </span>
                                                                            </td>
                                                                            <td className=""></td>
                                                                            <td className="text-right brandon-Medium">Estimated Cost</td>
                                                                            <td className="text-right brandon-Bold">{values && values.ingredient && values.ingredient.reduce((prev, next) => prev + next.qty, 0)}%</td>
                                                                            <td className=""></td>
                                                                            <td className=""></td>

                                                                        </tr>
                                                                    </tfoot>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </React.Fragment>
                                            )}

                                        </FieldArray>
                                        {touched.ingredient && typeof errors.ingredient === 'string' && <div className="error pink-txt f-11">{errors.ingredient}</div>}



                                        <div className="row">
                                            <div className="col-sm-12">
                                                <p className="brandon-Medium txt-darkgreen fw-600 f-14">ALLERGEN INFORMATION</p>
                                                {/* {JSON.stringify(values.allergenInformation)} */}
                                                {
                                                    isLoading ?
                                                        <React.Fragment>
                                                            <div className="d-flex align-items-center">
                                                                <div className="spinner-border m-3" role="status"></div>
                                                                <div className="visually-hidden">Please Wait Loading...</div>
                                                            </div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {allergy_Data && allergy_Data.data && allergy_Data.data.length > 0 ?
                                                                <React.Fragment>
                                                                    <div className="allergen-btn-wrapper d-flex align-items-start flex-wrap">
                                                                        {allergy_Data && allergy_Data.data && allergy_Data.data.map((data, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>

                                                                                    <React.Fragment>
                                                                                        <button
                                                                                            id={data._id}
                                                                                            onClick={(e) => { handleAlergy(e, values.allergenId, setFieldValue, "allergenId") }}
                                                                                            type="button"
                                                                                            className={`allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center ${values.allergenId && values.allergenId.indexOf(data._id) !== -1 && "active"}`}
                                                                                        >
                                                                                            <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
                                                                                                <img src={`${SERVER_URL}/${data.image}`} className="img-fluid" />
                                                                                            </div>
                                                                                            <span className={`mb-0 f-12 txt-lightgray brandon-Medium`}>{data.name}</span>
                                                                                        </button>
                                                                                    </React.Fragment>

                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    {touched.allergenId && errors.allergenId && <div className="error pink-txt f-11">{errors.allergenId}</div>}
                                                                </React.Fragment>
                                                                :
                                                                <p>No Data Available...</p>
                                                            }
                                                        </React.Fragment>
                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-2">
                                                <p className="brandon-Medium txt-darkgreen fw-600 f-14">DIETARY PREFERENCES</p>
                                                {
                                                    isLoading ?
                                                        <React.Fragment>
                                                            <div className="d-flex align-items-center">
                                                                <div className="spinner-border m-3" role="status"></div>
                                                                <div className="visually-hidden">Please Wait Loading...</div>
                                                            </div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {dietary_Data && dietary_Data.data && dietary_Data.data.length > 0 ?
                                                                <React.Fragment>
                                                                    <div className="dietary-wrapper d-flex flex-wrap">
                                                                        {dietary_Data && dietary_Data.data && dietary_Data.data.map((data, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>

                                                                                    <React.Fragment>
                                                                                        <button
                                                                                            id={data._id}
                                                                                            type="button"
                                                                                            onClick={(e) => { handleAlergy(e, values.dietaryId, setFieldValue, "dietaryId") }}
                                                                                            className={`tags-btn mr-4 mb-4 brandon-Medium ${values.dietaryId && values.dietaryId.indexOf(data._id) !== -1 && "active"}`}
                                                                                        >
                                                                                            {data.name}
                                                                                        </button>
                                                                                    </React.Fragment>

                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    {touched.dietaryId && errors.dietaryId && <div className="error pink-txt f-11">{errors.dietaryId}</div>}
                                                                </React.Fragment>
                                                                :
                                                                <p>No Data Available...</p>
                                                            }
                                                        </React.Fragment>
                                                }
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <p className="brandon-Medium txt-darkgreen fw-600 f-14">LIFESTYLE CHOICE</p>
                                                {
                                                    isLoading ?
                                                        <React.Fragment>
                                                            <div className="d-flex align-items-center">
                                                                <div className="spinner-border m-3" role="status"></div>
                                                                <div className="visually-hidden">Please Wait Loading...</div>
                                                            </div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {lifestyle_Data && lifestyle_Data.data && lifestyle_Data.data.length > 0 ?
                                                                <React.Fragment>
                                                                    <div className="lifestyle-wrapper d-flex flex-wrap">
                                                                        {lifestyle_Data && lifestyle_Data.data && lifestyle_Data.data.map((data, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>

                                                                                    <React.Fragment>
                                                                                        <button
                                                                                            id={data._id}
                                                                                            type="button"
                                                                                            onClick={(e) => { handleAlergy(e, values.lifestyleId, setFieldValue, "lifestyleId") }}
                                                                                            className={`tags-btn mr-4 mb-4 brandon-Medium ${values.lifestyleId && values.lifestyleId.indexOf(data._id) !== -1 && "active"}`}
                                                                                        >
                                                                                            {data.name}
                                                                                        </button>
                                                                                    </React.Fragment>

                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    {touched.lifestyleId && errors.lifestyleId && <div className="error pink-txt f-11">{errors.lifestyleId}</div>}
                                                                </React.Fragment>
                                                                :
                                                                <p>No Data Available...</p>
                                                            }
                                                        </React.Fragment>
                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3 mb-3 pb-1">
                                                <p className="brandon-Medium txt-darkgreen fw-600 f-14">COOKING METHOD</p>
                                                {
                                                    isLoading ?
                                                        <React.Fragment>
                                                            <div className="d-flex align-items-center">
                                                                <div className="spinner-border m-3" role="status"></div>
                                                                <div className="visually-hidden">Please Wait Loading...</div>
                                                            </div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {cooking_Data && cooking_Data.data && cooking_Data.data.length > 0 ?
                                                                <React.Fragment>
                                                                    <div className="lifestyle-wrapper d-flex flex-wrap">
                                                                        {cooking_Data && cooking_Data.data && cooking_Data.data.map((data, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>

                                                                                    <React.Fragment>
                                                                                        <button
                                                                                            id={data._id}
                                                                                            type="button"
                                                                                            onClick={(e) => { handleAlergy(e, values.cookingMethodId, setFieldValue, "cookingMethodId") }}
                                                                                            className={`tags-btn mr-4 mb-4 brandon-Medium ${values.cookingMethodId && values.cookingMethodId.indexOf(data._id) !== -1 && "active"}`}
                                                                                        >
                                                                                            {data.name}
                                                                                        </button>
                                                                                    </React.Fragment>

                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    {touched.cookingMethodId && errors.cookingMethodId && <div className="error pink-txt f-11">{errors.cookingMethodId}</div>}
                                                                </React.Fragment>
                                                                :
                                                                <p>No Data Available...</p>
                                                            }
                                                        </React.Fragment>
                                                }
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-12 mb-4 pb-2">
                                                <CaloriesMacrosModalComp
                                                    name="caloriesAndMacros"
                                                    onChangeData={(value) => { setFieldValue("caloriesAndMacros", value); }}
                                                    value={values.caloriesAndMacros}
                                                />
                                            </div>
                                            {touched.caloriesAndMacros && errors.caloriesAndMacros && <div className="error pink-txt f-11">{errors.caloriesAndMacros}</div>}


                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mb-4 pb-2">
                                                <div className="my_shadow bg-white w-100 instructions-wrapper">
                                                    <div className="d-flex justify-content-between align-items-center instructions-heading">
                                                        <h2 className="text-uppercase f-14 brandon-Bold p-4">INSTRUCTIONS</h2>
                                                    </div>
                                                    <Field component='textarea' rows='5' name="instructions" className="form-control add-description-textarea" placeholder="Type Here" />
                                                    {touched.instructions && errors.instructions && <div className="error pink-txt f-11 ml-3">{errors.instructions}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 d-flex align-items-center justify-content-end">
                                                <div className="custom-control custom-checkbox pinkline-checkbox mr-1">
                                                    <Field type="checkbox" name="customisable" id="customisable" className="custom-control-input" />
                                                    <label className="custom-control-label brandon-Medium" htmlFor="customisable">Customisable</label>
                                                    {touched.customisable && errors.customisable && <div className="error pink-txt f-11">{errors.customisable}</div>}
                                                </div>
                                                <div className="custom-control custom-checkbox pinkline-checkbox ml-4 mr-2">
                                                    <Field type="checkbox" name="createNewVersion" id="createNewVersion" className="custom-control-input" />
                                                    <label className="custom-control-label brandon-Medium" htmlFor="createNewVersion">Create New Version</label>
                                                    {touched.createNewVersion && errors.createNewVersion && <div className="error pink-txt f-11">{errors.createNewVersion}</div>}
                                                </div>
                                                <button className="btn lightgraynoline-btn text-uppercase rounded-pill ml-5" type="reset" onClick={() => { handleCancleEdit(resetForm) }} >CANCEL</button>
                                                <button className="btn pink-btn text-uppercase rounded-pill ml-3" type="submit" >Save</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </Form>
                            );
                        }}
                    </Formik>
                </React.Fragment>
            </section>
        </>
    )
}

export default UpdateEasyAddDishComp;