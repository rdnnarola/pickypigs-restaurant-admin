import React, { useState,useEffect} from "react";
import './ManageEasyAddDishComp.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"
import CaloriesMacrosModalComp from "../CaloriesMacrosModalComp/CaloriesMacrosModalComp";
import CheckBoxAutoCompleteComp from "../CheckBoxAutoCompleteComp/CheckBoxAutoCompleteComp";
import { JsonWebTokenError } from "jsonwebtoken";
import { addDishesData } from "../../redux/actions/dishesAction";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllMenuData } from "../../redux/actions/menuAction";
import CheckBoxAutoCompleteSecondComp from "../CheckBoxAutoCompleteSecondComp/CheckBoxAutoCompleteSecondComp";
import { getCategoryListOfSelectedMenu } from "../../redux/actions/categoryAction";
import { getSubCategoryListOfSelectedCategory } from "../../redux/actions/subcategoryAction";
import { Field, Form, Formik,ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';
import { getAllAllergyData, getAllDietaryData,getAllLifestyleData,getAllCookingData} from "../../redux/actions/allergyAction";
import {SERVER_URL} from '../../shared/constant'
import CheckBoxAutoCompleteThirdComp from "../CheckBoxAutoCompleteThirdComp/CheckBoxAutoCompleteThirdComp";



const styleOf_currency=["$","a","b"]

const ManageEasyAddDishComp = () => {
    const dispatch=useDispatch();
    const history = useHistory();
    const [menuValue, setMenuValue] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [subcategoryId, setSubcategoryId] = useState('')
    


    const [descModal, setDescModal] = useState(false);
    const [addItem, setAddItem] = useState(false);

    const clearMenugy=()=>{
        setMenuValue([])
    }
    useEffect(() => {
        dispatch(getAllAllergyData())
        dispatch(getAllDietaryData())
        dispatch(getAllLifestyleData())
        dispatch(getAllCookingData())

    },[dispatch])
    let allAllergy_data = useSelector((state) => {
        return state.allergy
    });
    let { isLoading,allergy_Data,dietary_Data,lifestyle_Data,cooking_Data } = allAllergy_data;

    const handleAlergy = (e,fieldValue,setFieldValue,fieldname) => {
        e.preventDefault();
        if (fieldValue.indexOf(e.target.id) !== -1) {
            var Index = fieldValue.indexOf(e.target.id);
            if (Index > -1) {
                // setAlergy(fieldValue.slice(0,Index).concat(fieldValue.slice(Index+ 1, fieldValue.length)));
                setFieldValue(fieldname,fieldValue.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setFieldValue(fieldname,[...fieldValue, e.target.id]);
        }
    }
    const galleryImageUploadHandeler = (e,fieldValue,setFieldValue,fieldname) => {
        e.preventDefault();
        if (e.target.files[0]) {
            setFieldValue(fieldname,e.target.files[0]);
            
        }
    }
   //--------- Getting All Menu Data -------//
    useEffect(()=>{
        dispatch(getAllMenuData({start:0,delete:0}));
        
    },[dispatch]);

    let menuData = useSelector((state)=>{
        return state.menu.menu_Data
    });
    //--------- Getting All Menu Data Ends -------//


    //--------- Getting All Category Data -------//
    useEffect(()=>{
        if(menuValue !==""){
            dispatch(getCategoryListOfSelectedMenu({menuId:menuValue}));

        }else{
            dispatch(getCategoryListOfSelectedMenu({menuId:[]}));
            setSubcategoryId('');
            setCategoryId('');
        }
    },[dispatch,menuValue]);

    let categoryData = useSelector((state)=>{
        return state.category.selectedMenuCategoryList
    });
    //--------- Getting All Category Data Ends -------//


    //--------- Getting All Sub-Category Data -------//
   
    useEffect(()=>{
        
        if(categoryId !==""){
            dispatch(getSubCategoryListOfSelectedCategory(categoryId));
        }else{
            dispatch(getSubCategoryListOfSelectedCategory("5fb6137b358d872b7cce1404"));
            setSubcategoryId('');
        }
    },[dispatch,categoryId,menuValue]);
    
    let subcategoryData = useSelector((state)=>{
        return state.subcategory.selectedCategorySubcategoryList
    });
    //--------- Getting All Sub-Category Data Ends-------//
   
    const handleDescModal = () => {
        setDescModal(!descModal);
    }

 

  
    const initialValues = {
        name:'',
        makes:'',
        price:'',
        grossProfit:'',
        image:'',
        favorite:false,
        new:false,
        available:false,
        menuId:menuValue?menuValue&&menuValue.length>=0&&menuValue.map(({_id}) => _id):'',
        categoryId:categoryId?categoryId:'',
        subcategoryId:subcategoryId?subcategoryId:'',
        description:'',
        allergenId:[],
        dietaryId:[],
        lifestyleId:[],
        cookingMethodId:[],
        instructions:'',
        customisable:false,
        createNewVersion:false,
        ingredientSection:{},
        caloriesAndMacros:{},
        total:"",
        ingredient:[],
        priceUnit:'$',
      
    }

    const validationSchema  = Yup.object().shape({
        name:Yup.string().required('Name is required'),
        makes:Yup.string().required('Serving is required'),
        price:Yup.string().required('Price is required'),
        grossProfit:Yup.string().required('Profit is required'),
        image:Yup.string().required('Image is required'),
        favorite:Yup.boolean().oneOf([true,false]),
        new:Yup.boolean().oneOf([true,false]),
        available:Yup.boolean().oneOf([true,false]),
        menuId:Yup.array().required('Please Select Menu'),
        categoryId:Yup.string().required('category is required'),
        subcategoryId:Yup.string().required('subcategory is required'),
        description:Yup.string().required('description is required'),
        allergenId:Yup.array().required('Please Select allergen'),
        dietaryId:Yup.array().required('Please Select  dietary'),
        lifestyleId:Yup.array().required('Please Select lifestyle'),
        cookingMethodId:Yup.array().required('Please Select cookingMethod'),
        instructions:Yup.string().required('instructions is required'),
        customisable:Yup.boolean().oneOf([true,false]),
        createNewVersion:Yup.boolean().oneOf([true,false]),
        ingredient:Yup.array().required('Please Add ingredient'),
        // ingredient:Yup.array().of(
        //     Yup.object({
                
        //         item:Yup.string().required('category is required'),

        //     })
        // ),

        priceUnit:Yup.string().required('priceUnit is required'),

    });

    const onSubmit=(fields)=>{

        let obj={
            name:fields.name,
            makes:fields.makes,
            priceUnit:fields.priceUnit,
            price:fields.price,
            grossProfit:fields.grossProfit,
            image:fields.image,
            favorite:fields.favorite,
            new:fields.new,
            available:fields.available,
            menuId:menuValue&&menuValue.length>=0&&menuValue.map(({_id}) => _id),
            categoryId:categoryId,
            subcategoryId:subcategoryId,
            description:fields.description,
            allergenId:fields.allergenId,
            dietaryId:fields.dietaryId,
            lifestyleId:fields.lifestyleId,
            cookingMethodId:fields.cookingMethodId,
            instructions:fields.instructions,
            customisable:fields.customisable,
            createNewVersion:fields.createNewVersion,
            ingredientSection:{total:fields.ingredient&&fields.ingredient.length>=0&&fields.ingredient.length,ingredient:fields.ingredient},
        }
        console.log(obj)

        // dispatch(updateRestaurantInfoDetail({address:obj}));
    }

    return (
        <>
        <section className="ManageEasyAddDishComp-comp">
            
            <React.Fragment>
                <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ errors, touched, resetForm, setFieldValue,handleChange,values }) => {
                        return (
                            <Form>
                                <React.Fragment>
                                {/* {JSON.stringify(values)}
                                    ||
                                    {JSON.stringify(dishesData)}
                                    ||
                                    {JSON.stringify(categoryId)} */}
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="page-heading brandon-Medium d-flex justify-content-between align-items-center">
                                                <h4>Manage Easy Add Dish</h4>
                                                <div>
                                                    <p className="mb-0 lastedit-txt brandon-regular"><span>Last edited : </span>Yesterday 2:30 PM</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div className="row mt-4 pt-2">
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <p className="mb-4">
                                                            <span className="recipe-msg">
                                                                This recipe does not contain its dietary preferences and lifestyle choices. Consider updating before adding to a dish
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row mb-4 pb-2">
                                                    <div className="col-md-4 form-group mb-0 easydish-input dishname-input">
                                                        <label className="gray-txt f-15">Dish name</label>
                                                        <Field name="name" placeholder="Dish name" className="form-control"/>
                                                        {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                                    </div>
                                                    <div className="col-md-3 form-group mb-0 easydish-serving-input makes-input">
                                                        <label className="gray-txt f-15">Makes</label>
                                                        <div className="makesserving-wrapper">
                                                            <Field name="makes" type="number" placeholder="1.000" className="form-control"/>
                                                            <span className="serving-txt">Serving</span>
                                                        </div>
                                                        {touched.makes && errors.makes && <div className="error pink-txt f-11">{errors.makes}</div>}
                                                    </div>
                                                    
                                                    <div className="col-md-3 form-group mb-0 easydish-select-input price-input">
                                                        <label className="gray-txt f-15">Price</label>
                                                        <div className="d-flex border rounded">
                                                           
                                                            <Field as="select" name="priceUnit" className="form-control border border-white">
                                                                {styleOf_currency && styleOf_currency.map((data, index)=>{
                                                                    return(
                                                                        <React.Fragment key={index}>
                                                                            <option className="text-capitalize" value={data}>{data}</option>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </Field>
                                                            |
                                                            <Field name="price" type="number" placeholder="0.00" className="form-control border border-white"/>
                                                        </div>
                                                        {touched.price && errors.price && <div className="error pink-txt f-11">{errors.price}</div>}
                                                        {touched.priceUnit && errors.priceUnit && <div className="error pink-txt f-11">{errors.priceUnit}</div>}
                                                    </div>
                                                    <div className="col-md-2 form-group mb-0 easydish-input gross-input">
                                                        <label className="gray-txt f-15">Gross Profit</label>
                                                        <Field name="grossProfit" type="number" placeholder="0%" className="form-control"/>
                                                        {touched.grossProfit && errors.grossProfit && <div className="error pink-txt f-11">{errors.grossProfit}</div>}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-wrap mb-4">
                                                    <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                                        <Field type="checkbox" name="favorite" id="favorite" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="favorite">Favorite</label>
                                                        {touched.favorite && errors.favorite && <div className="error pink-txt f-11">{errors.favorite}</div>}
                                                    </div>
                                                    <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                                        <Field type="checkbox" name="new" id="new" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="new">New</label>
                                                        {touched.new && errors.new && <div className="error pink-txt f-11">{errors.new}</div>}
                                                    </div>
                                                    <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                                        <Field type="checkbox" name="available" id="available" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="available">Available</label>
                                                        {touched.available && errors.available && <div className="error pink-txt f-11">{errors.available}</div>}
                                                    </div>
                                                </div>
                                                <div className="d-flex mb-4">
                                                    {/* <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Menu</label>
                                                        <CheckBoxAutoCompleteSecondComp 
                                                            className="minwidth-260" 
                                                            placeholder={"Select"} 
                                                            clearAll={clearMenugy} 
                                                            options={menuData&&menuData.menuDetails} 
                                                            name="menuId" 
                                                            value={values.menuId} 
                                                            // onChangeData={setMenuValue}
                                                            // onChangeData={(e)=>{handleMenuChange(e,values.menuId,setFieldValue,"menuId")}}
                                                            // onClick={(e)=>{handleAlergy(e,values.dietaryId,setFieldValue,"dietaryId")}}
                                                            onChangeData={(value)=> {setFieldValue("menuId", value)}}
                                                        />
                                                    </div> */}
                                                    <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Menu</label>
                                                        <CheckBoxAutoCompleteSecondComp 
                                                            className="minwidth-260" 
                                                            placeholder={"menu_options"} 
                                                            clearAll={clearMenugy} 
                                                            options={menuData&&menuData.menuDetails?menuData.menuDetails:[]} 
                                                            value={menuValue} 
                                                            onChangeData={(value)=>{setMenuValue(value); setSubcategoryId('');
                                                            setCategoryId('');}}
                                                        />
                                                        {touched.menuId && errors.menuId && <div className="error pink-txt f-11">{errors.menuId}</div>}
                                                    </div>
                                                    <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Category</label>
                                                        <select  name="categoryId" onChange={(e)=>{setCategoryId(e.target.value)}} className="form-control lightgray-border selectdropdown-btn minwidth-260">
                                                            <option value="">Select</option>
                                                            {categoryData && categoryData.map((data, index)=>{
                                                                return(
                                                                    <React.Fragment key={index}>
                                                                        <option value={data._id}>{data.name}</option>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </select>
                                                        {touched.categoryId && errors.categoryId && <div className="error pink-txt f-11">{errors.categoryId}</div>}
                                                    </div>
                                                    <div className="custom-drodown form-group mr-4 mb-0">
                                                        <label className="gray-txt f-15">Sub-Category</label>
                                                        <select  name="subcategoryId" onChange={(e)=>{setSubcategoryId(e.target.value)}} className="form-control lightgray-border selectdropdown-btn minwidth-260">
                                                            <option value="">Select</option>
                                                            {subcategoryData && subcategoryData.map((data, index)=>{
                                                                return(
                                                                    <React.Fragment key={index}>
                                                                        <option value={data._id}>{data.name}</option>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </select>
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
                                                <div className=" w-100 mb-5 position-relative add-description-wrapper">
                                                    <button type="button" className="w-100 add-description-btn brandon-Bold" onClick={handleDescModal}>ADD DESCRIPTION<span className="brandon-regular">+</span></button>
                                                    {descModal &&
                                                        <div className="my_shadow mb-3 bg-white w-100 add-description-subwrapper" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                                                            <div className="d-flex add-description-head justify-content-between align-items-center">
                                                                <h6 className="brandon-Bold text-uppercase">Add Description</h6>
                                                                <div className="add-description-inputbtn">
                                                                    <button type="reset" className="cancel-btn" onClick={()=>{handleDescModal()}}>Cancel</button>
                                                                    <button type="button" className="save-btn ml-3" onClick={handleDescModal}>Save</button>
                                                                </div>
                                                            </div>
                                                            <Field component='textarea' name="description"  rows='5' className="form-control add-description-textarea" placeholder="Type Here" />
                                                        </div>
                                                    }
                                                    {touched.description && errors.description && <div className="error pink-txt f-11">{errors.description}</div>}

                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <form>
                                                        <div className="form-group">
                                                            <div className="fileUpload text-center">
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    name="imageuploadedfile"
                                                                    className="form-control-file userprofile-control upload"
                                                                    onChange={(e)=>{galleryImageUploadHandeler(e,values.image,setFieldValue,"image")}}
                                                                />
                                                                <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-image-upload-icon-photo-upload-icon-png-image_5279795.jpg" className="img-fluid" width="150px" alt="image_upload"/>
                                                                <br></br>
                                                                <span className="brandon-Medium text-center">Upload Image <br></br>or drag and drop image here</span>
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
                                                            <th className="brandon-Bold text-right" scope="col">CUSTOMISABLE</th>
                                                            <th className="brandon-Bold text-right" scope="col">Action</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {values.ingredient&&values.ingredient.length > 0?
                                                        <React.Fragment>
                                                            {values.ingredient&&values.ingredient.map((data, index) => {
                                                                return(
                                                                    <React.Fragment key={index}>
                                                                    <tr>
                                                                        <td>
                                                                            <Field className="form-control" name={`ingredient.${index}.item`} placeholder="item" type="text"/>
                                                                            <ErrorMessage
                          name={`ingredient.${index}.item`}
                          component="div"
                          className="field-error"
                        />
                                                                            {/* {touched.ingredient.item && errors.ingredient.item && <div className="error pink-txt f-11">{errors.ingredient.item}</div>} */}
                                                                     </td>
                                                                        <td>
                                                                            <CheckBoxAutoCompleteThirdComp placeholder={"Allergy Values"} 
                                                                                options={allergy_Data&&allergy_Data.data?allergy_Data.data:[]} name={`ingredient.${index}.allergeies`}
                                                                                value={data.allergeies} 
                                                                                onChangeData={(value)=> {setFieldValue(`ingredient.${index}.allergeies`, value)}}
                                                                            />
                                                                        </td>
                                                                        <td className=""></td>
                                                                        <td>
                                                                            <Field className="form-control" name={`ingredient.${index}.qty`}placeholder="Qty" type="number"/>
                                                                        </td>
                                                                        <td>
                                                                            <div className="custom-control custom-checkbox pink-checkbox">
                                                                                <Field
                                                                                name={`ingredient.${index}.customisable`}
                                                                                type="checkbox"
                                                                                className="custom-control-input"
                                                                                id={`ingredient.${index}.customisable`}
                                                                                />                                   
                                                                                <label className="custom-control-label" htmlFor={`ingredient.${index}.customisable`}></label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <button type="button" className="secondary" onClick={() => remove(index)}>X</button>
                                                                        </td>
                                                                    </tr>
                                                                    </React.Fragment>
                                                                )}
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
                                                                    <button type="button" className="additems-btn" onClick={() => push({ item: '', qty: '',allergeies: [],customisable:false})}>Click to add item</button>
                                                                </span>
                                                            </td>
                                                            <td className=""></td>
                                                            <td className="text-right">Estimated Cost</td>
                                                            <td className="text-right brandon-Bold">{values&&values.ingredient&&values.ingredient.reduce((prev,next) => prev+next.qty,0)}%</td>
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
                                    {touched.ingredient && errors.ingredient && <div className="error pink-txt f-11">{errors.ingredient}</div>}


                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p className="brandon-Medium txt-darkgreen">ALLERGEN INFORMATION</p>
                                            {/* {JSON.stringify(values.allergenInformation)} */}
                                            <div className="allergen-btn-wrapper d-flex align-items-start flex-wrap">
                                                {allergy_Data&&allergy_Data.data&&allergy_Data.data.map((data, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                          
                                                                <React.Fragment>
                                                                    <button
                                                                        id={data._id}
                                                                        onClick={(e)=>{handleAlergy(e,values.allergenId,setFieldValue,"allergenId")}}
                                                                        type="button"
                                                                        className={`allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center ${values.allergenId&&values.allergenId.indexOf(data._id) !== -1 && "active"}`}
                                                                    >
                                                                        <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
                                                                            <img src={`${SERVER_URL}/${data.image}`} className="img-fluid" />
                                                                        </div>
                                                                        <span className={`mb-0 f-12 txt-lightgray`}>{data.name}</span>
                                                                    </button>                             
                                                                </React.Fragment>
                                                          
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </div>
                                            {touched.allergenId && errors.allergenId && <div className="error pink-txt f-11">{errors.allergenId}</div>}
                                        </div>
                                    </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-2">
                                                <p className="brandon-Medium txt-darkgreen">DIETARY PREFERENCES</p>
                                                <div className="dietary-wrapper d-flex flex-wrap">
                                                    {dietary_Data&&dietary_Data.data&&dietary_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                             
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            onClick={(e)=>{handleAlergy(e,values.dietaryId,setFieldValue,"dietaryId")}}
                                                                            className={`tags-btn mr-4 mb-4 ${values.dietaryId&&values.dietaryId.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                                {touched.dietaryId && errors.dietaryId && <div className="error pink-txt f-11">{errors.dietaryId}</div>}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <p className="brandon-Medium txt-darkgreen">LIFESTYLE CHOICE</p>
                                                <div className="lifestyle-wrapper d-flex flex-wrap">
                                                    {lifestyle_Data&&lifestyle_Data.data&&lifestyle_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                               
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            onClick={(e)=>{handleAlergy(e,values.lifestyleId,setFieldValue,"lifestyleId")}}
                                                                            className={`tags-btn mr-4 mb-4 ${values.lifestyleId&&values.lifestyleId.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                           
                                                                    </React.Fragment>
                                                                
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                                {touched.lifestyleId && errors.lifestyleId && <div className="error pink-txt f-11">{errors.lifestyleId}</div>}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <p className="brandon-Medium txt-darkgreen">COOKING METHOD</p>
                                                <div className="lifestyle-wrapper d-flex flex-wrap">
                                                    {cooking_Data&&cooking_Data.data&&cooking_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                               
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            onClick={(e)=>{handleAlergy(e,values.cookingMethodId,setFieldValue,"cookingMethodId")}}
                                                                            className={`tags-btn mr-4 mb-4 ${values.cookingMethodId&&values.cookingMethodId.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                           
                                                                    </React.Fragment>
                                                                
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                                {touched.cookingMethodId && errors.cookingMethodId && <div className="error pink-txt f-11">{errors.cookingMethodId}</div>}
                                            </div>
                                        </div>

                                    
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <CaloriesMacrosModalComp  />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="my_shadow mb-3 bg-white w-100">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h2>INSTRUCTIONS</h2>
                                                </div>
                                                <Field component='textarea' rows='5' name="instructions" className="form-control add-description-textarea" placeholder="Type Here" />
                                                {touched.instructions && errors.instructions && <div className="error pink-txt f-11">{errors.instructions}</div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 d-flex justify-content-end">
                                            <div className="custom-control custom-checkbox pink-checkbox ">
                                                <Field type="checkbox" name="customisable" id="customisable" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customisable">Customisable</label>
                                                {touched.customisable && errors.customisable && <div className="error pink-txt f-11">{errors.customisable}</div>}
                                            </div>
                                            <div className="custom-control custom-checkbox pink-checkbox ml-3">
                                                <Field type="checkbox" name="createNewVersion" id="createNewVersion" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="createNewVersion">Create New Version</label>
                                                {touched.createNewVersion && errors.createNewVersion && <div className="error pink-txt f-11">{errors.createNewVersion}</div>}
                                            </div>
                                            <button className="btn pinkline-btn text-uppercase rounded-pill ml-3" type="reset">CANCLE</button>
                                            <button className="btn pinkline-btn text-uppercase rounded-pill ml-3" type="submit" >Save</button>
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

export default ManageEasyAddDishComp;