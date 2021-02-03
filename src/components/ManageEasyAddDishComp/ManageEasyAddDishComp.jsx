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



const alergy_information = [{ name: "Egg", image: Nonveg_icon }, { name: "Milk", image: Nonveg_icon }, { name: "Celery", image: Nonveg_icon }, { name: "Mustard", image: Nonveg_icon }, { name: "Lupin", image: Nonveg_icon }, { name: "Nuts", image: Nonveg_icon }, { name: "Peanuts", image: Nonveg_icon }, { name: "Sesame", image: Nonveg_icon }, { name: "Molluscs", image: Nonveg_icon }, { name: "Crustaceans", image: Nonveg_icon }, { name: "Fish", image: Nonveg_icon }, { name: "Cereals (Wheat)", image: Nonveg_icon }, { name: "Soya", image: Nonveg_icon }, { name: "Sulphur dioxide", image: Nonveg_icon }];
const dietary_preference = ["Gluten Free", "Dairy Free", "Meat Lover", "Fodmap", "Low Sugar", "Low Carb", "Plant Based", "Vegetarian", "Pescatarian", "Keto"];
const lifestyle_choice = ["Pregnant", "Vegan", "Halal", "Kosher", "Organic", "Locally Sourced"];
const restaurant_features = ["Pet Friendly", "Child friendly", "Live music", "Outside sitting", "Disabled access", "Reservations needed", "Bring your own", "Large parties accepted", "Private dining room", "Table service", "Bar service", "Holding bar", "R20", "Take away"];
const cooking_method = ["Grilling", "Steaming", "Barbecue", "Braising", "Roasting", "RBaking", "Frying", "Smoking"];
const menu_options = ['Option 1', 'Option 2','Option 3', 'Option 4','Option 5', 'Option 6','Option 7', 'Option 8'];


const ManageEasyAddDishComp = () => {
    const dispatch=useDispatch();
    const history = useHistory();
    const [menuValue, setMenuValue] = useState([])
    const [dishesData,setDishesData]=useState({
        name: "",
        makes: '',
        price: '',
        grossProfit: '',
        image: "image-url",
        favorite: true,
        new: true,
        available: false,
        menuId: [],
        restaurantId: "5ff9373ce5dd68114cdf654b",
        categoryId: "",
        subcategoryId: "",
        description: "",
        allergenId: [],
        dietaryId: [],
        lifestyleId: [],
        instructions: "",
        customisable: true,
        createNewVersion: false,
        ingredientSection: {
            total: '',
            ingredient: []
        },
        caloriesAndMacros: {
            "fat": {
                "items": []
            },
            "TotalCarbohydrate": {
                "items": []
            },
            "Protien": {
                "items": []
            }
        }
    });
    const [alergy, setAlergy] = useState([]);
    const [dietary, setDietary] = useState([]);
    const [lifestyle, setLifestyle] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [cooking, setCooking] = useState([]);
    const [descModal, setDescModal] = useState(false);
    const [addItem, setAddItem] = useState(false);

    const [allergyValue, setAllergyValue] = useState([])
    const clearMenugy=()=>{
        setMenuValue([])
    }

    const handleAllergy = (e) => {
        e.preventDefault();
        if (alergy.indexOf(e.target.id) !== -1) {
            var Index = alergy.indexOf(e.target.id);
            if (Index > -1) {
                setAlergy(alergy.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setAlergy([...alergy, e.target.id]);
        }
    }

    const handleDietaryPreference = (e) => {
        e.preventDefault();
        if (dietary.indexOf(e.target.id) !== -1) {
            var Index = dietary.indexOf(e.target.id);
            if (Index > -1) {
                setDietary(dietary.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setDietary([...dietary, e.target.id]);
        }
    }
    const handleLifestyle = (e) => {
        e.preventDefault();
        if (lifestyle.indexOf(e.target.id) !== -1) {
            var Index = lifestyle.indexOf(e.target.id);
            if (Index > -1) {
                setLifestyle(lifestyle.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setLifestyle([...lifestyle, e.target.id]);
        }
    }
    const handleCooking = (e) => {
        e.preventDefault();
        if (cooking.indexOf(e.target.id) !== -1) {
            var Index = cooking.indexOf(e.target.id);
            if (Index > -1) {
                setCooking(cooking.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setCooking([...cooking, e.target.id]);
        }
    }

    const handleDescModal = () => {
        setDescModal(!descModal);
    }

    //--------- Adding Items And Creating ingredientSection-------//
    const [datas2,setDatas2] = useState([]);
    const [datas3,setDatas3] = useState({
        total:'',
        ingredient:[],
    });
    const [items,setItems] = useState({
        item:'',
        allergeies:[],
        qty:'',
        customisable: true
    });

    const addToDatas=(e)=>{
        e.preventDefault();
         setDatas2([...datas2,{...items,allergeies:allergyValue}]);
         setDatas3({...datas3,ingredient:[...datas2,{...items,allergeies:allergyValue}],total:[...datas2,{...items,allergeies:allergyValue}].length,})
    }
    //--------- Adding Items And Creating ingredientSection Ends-------//

    const handleItemCheckBox=()=>{

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
        }
    },[dispatch,menuValue]);
    let categoryData = useSelector((state)=>{
        return state.category.selectedMenuCategoryList
    });
    //--------- Getting All Category Data Ends -------//


    //--------- Getting All Sub-Category Data -------//
    let subcategoryData = useSelector((state)=>{
        return state.subcategory.selectedCategorySubcategoryList
    });
    useEffect(()=>{
        
        if(dishesData.categoryId ===""){
            dispatch(getSubCategoryListOfSelectedCategory("5fb6137b358d872b7cce1404"));
        }else{
            dispatch(getSubCategoryListOfSelectedCategory(dishesData.categoryId));
        }
    },[dispatch,dishesData.categoryId]);
    //--------- Getting All Sub-Category Data Ends-------//


    const handleManageAddDish=(e)=>{
        setDishesData({
            ...dishesData,
            [e.target.name] : e.target.value
        });
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addDishesData(
            {...dishesData,menuId:menuValue.map(({_id}) => _id),
            ingredientSection:datas3,
            allergenId:alergy,
            dietaryId:dietary,
            lifestyleId:lifestyle},
            history));
    }

    return (
        <>
        {JSON.stringify(dishesData)}
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
                                <input name="name" onChange={handleManageAddDish} className="form-control" type="text" placeholder="Dish name" />
                            </div>
                            <div className="col-md-3 form-group mb-0 easydish-serving-input makes-input">
                                <label className="gray-txt f-15">Makes</label>
                                <div className="makesserving-wrapper">
                                    <input name="makes" onChange={handleManageAddDish} type="number" className="form-control"  placeholder="1.000" />
                                    <span className="serving-txt">Serving</span>
                                </div>
                            </div>
                            
                            <div className="col-md-3 form-group mb-0 easydish-select-input price-input">
                                <label className="gray-txt f-15">Price</label>
                                <div className="d-flex border rounded">
                                    <select className="form-control border border-white ">
                                        <option value="1" >$</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    |
                                    <input name="price" onChange={handleManageAddDish} className="form-control border border-white" type="text" placeholder="0.00" />
                                </div>
                            </div>
                            <div className="col-md-2 form-group mb-0 easydish-input gross-input">
                                <label className="gray-txt f-15">Gross Profit</label>
                                <input name="grossProfit" onChange={handleManageAddDish} className="form-control" type="text" placeholder="0%" />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap mb-4">
                            <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                <input name="favorite" onChange={(e)=>{setDishesData({...dishesData,favorite:e.target.checked})}} type="checkbox" className="custom-control-input" id="customCheck1"  />
                                <label className="custom-control-label" htmlFor="customCheck1">Favorite</label>
                            </div>
                            <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                <input name="new" onChange={(e)=>{setDishesData({...dishesData,new:e.target.checked})}} type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">New</label>
                            </div>
                            <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                <input name="available" onChange={(e)=>{setDishesData({...dishesData,available:e.target.checked})}} type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" htmlFor="customCheck3">Available</label>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="custom-drodown form-group mr-4 mb-0">
                                <label className="gray-txt f-15">Menu</label>
                                <CheckBoxAutoCompleteSecondComp className="minwidth-260" placeholder={"menu_options"} clearAll={clearMenugy} options={menuData&&menuData.menuDetails} value={menuValue} onChangeData={setMenuValue}/>
                            </div>
                            <div className="custom-drodown form-group mr-4 mb-0">
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
                            </div>
                            <div className="custom-drodown form-group mr-4 mb-0">
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
                            </div>
                        </div>
                        <div className=" w-100 mb-5 position-relative add-description-wrapper">
                            <button className="w-100 add-description-btn brandon-Bold" onClick={handleDescModal}>ADD DESCRIPTION<span className="brandon-regular">+</span></button>
                            {descModal &&
                                <div className="my_shadow mb-3 bg-white w-100 add-description-subwrapper" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                                    <div className="d-flex add-description-head justify-content-between align-items-center">
                                        <h6 className="brandon-Bold text-uppercase">Add Description</h6>
                                        <div className="add-description-inputbtn">
                                            <button className="cancel-btn" onClick={handleDescModal}>Cancel</button>
                                            <button className="save-btn ml-3">Save</button>
                                        </div>
                                    </div>
                                    <textarea value={dishesData.description} name="description" onChange={handleManageAddDish} className="form-control add-description-textarea" id="exampleFormControlTextarea1" rows="5" placeholder="Type Here" />
                                </div>
                            }
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                    </div>
                </div>
            </div>
            {/* {JSON.stringify(datas2)} */}

                            {JSON.stringify(datas3)}
            <div className="row mb-4 pb-2">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4 add-dish-table">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">ITEM</th>
                                    <th className="brandon-Bold " scope="col"></th>
                                    <th className="brandon-Bold " scope="col">ALLERGIES</th>
                                    <th className="brandon-Bold text-right" scope="col"></th>
                                    <th className="brandon-Bold text-right" scope="col">QTY</th>
                                    <th className="brandon-Bold text-right" scope="col">CUSTOMISABLE</th>

                                </tr>
                            </thead>
                            <tbody>
                                {datas2 && datas2.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.item}</td>
                                                <td className=""></td>
                                                <td className="">{data.allergeies.join(", ")}</td>
                                                <td className="text-right"></td>
                                                <td className="text-right">{data.qty} %</td>
                                                <td className="text-right">
                                                    <div className="custom-control custom-checkbox pink-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id={index} defaultChecked={data.customisable}/>
                                                        <label className="custom-control-label" htmlFor={index}></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}

                                {
                                    addItem
                                    ?
                                    <React.Fragment>
                                        <tr>
                                            <td>
                                                <label className="gray-txt f-15">Item Name </label>
                                                <input value={items.item} onChange={(e)=>{setItems({...items,item:e.target.value})}} className="form-control" type="text" placeholder="Search" />
                                            </td>
                                            <td></td>
                                            <td>
                                                <label className="gray-txt f-15">Select Allergy</label>
                                                <CheckBoxAutoCompleteComp  placeholder={"Allergy Values"} clearAll={clearMenugy} options={menu_options} value={allergyValue} onChangeData={setAllergyValue}/>
                                            </td>
                                            <td></td>
                                            <td className="text-right">
                                                <label className="gray-txt f-15">Quantity</label>
                                                <input  name="qty" value={items.qty} onChange={(e)=>{setItems({...items,qty:e.target.value})}}   className="form-control" type="number" placeholder="Search" />
                                            </td>
                                            <td className="text-right">
                                                <label className="gray-txt f-15">CUSTOMISABLE</label>
                                                <div className="custom-control custom-checkbox pink-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="ssss" name="customisable" value={items.customisable} onChange={(e)=>{setItems({...items,customisable:e.target.checked})}} />
                                                    <label className="custom-control-label" htmlFor="ssss"></label>
                                                </div>
                                               
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6">
                                                <div className="text-right">
                                                    <button  onClick={addToDatas}>Add</button>
                                                    <button type="reset" onClick={()=>{setAddItem(false)}}>Cancle</button>
                                                </div>
                                            </td>
                                        </tr>
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
                                            <button className="additems-btn" onClick={()=>{setAddItem(true)}}>Click to add item</button>
                                        </span>
                                    </td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className="text-right">Estimated Cost</td>
                                    <td className="text-right brandon-Bold">{datas2.reduce((prev,next) => prev+JSON.parse(next.qty),0)}%</td>
                                    <td className="text-center"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>  
                </div>
            </div>
            {alergy}

            <div className="row">
                <div className="col-sm-12">
                    <p className="text-uppercase allergen-info">ALLERGEN INFORMATION</p>
                    <div className="d-flex flex-wrap">
                        {alergy_information && alergy_information.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <button id={data.name}
                                        onClick={handleAllergy}
                                        className={`btn filter-subwrapper ${alergy.indexOf(data.name) !== -1 && "active btn btn-primary"}`}
                                    >
                                        <div className="filter-icon">
                                            <img src={data.image} className="img-fluid" />
                                        </div>
                                        <p className="mt-1 text-dark text-link f-14">{data.name}</p>
                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12">
                    <p>DIETARY PREFERENCES</p>
                    <div>
                        {dietary_preference && dietary_preference.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <button
                                        id={data}
                                        onClick={handleDietaryPreference}
                                        className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${dietary.indexOf(data) !== -1 && "btn btn-primary"}`}
                                    >
                                        {data}
                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <p>LIFESTYLE CHOICE</p>
                    <div>
                        {lifestyle_choice && lifestyle_choice.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <button
                                        id={data}
                                        onClick={handleLifestyle}
                                        className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${lifestyle.indexOf(data) !== -1 && "btn btn-primary"}`}
                                    >
                                        {data}
                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <p>COOKING METHOD</p>
                    <div>
                        {cooking_method && cooking_method.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <button
                                        id={data}
                                        onClick={handleCooking}
                                        className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${cooking.indexOf(data) !== -1 && "btn btn-primary"}`}
                                    >
                                        {data}
                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <CaloriesMacrosModalComp />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="my_shadow mb-3 bg-white w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>INSTRUCTIONS</h2>
                        </div>
                        <textarea  name="instructions" onChange={handleManageAddDish} className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Type Here" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 d-flex justify-content-end">
                    <div className="custom-control custom-checkbox pink-checkbox ">
                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                        <label className="custom-control-label" htmlFor="customCheck5">Customisable</label>
                    </div>
                    <div className="custom-control custom-checkbox pink-checkbox ml-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck6" />
                        <label className="custom-control-label" htmlFor="customCheck6">Create New Version</label>
                    </div>
                    <button className="btn pinkline-btn text-uppercase rounded-pill ml-3">CANCLE</button>
                    <button className="btn pinkline-btn text-uppercase rounded-pill ml-3" onClick={handleSubmit}>Save</button>
                </div>
            </div>


        </>
    )
}

export default ManageEasyAddDishComp;