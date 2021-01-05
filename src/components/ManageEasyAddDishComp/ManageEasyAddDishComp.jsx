import React, { useState } from "react";
import './ManageEasyAddDishComp.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"
import CaloriesMacrosModalComp from "../CaloriesMacrosModalComp/CaloriesMacrosModalComp";
import CheckBoxAutoCompleteComp from "../CheckBoxAutoCompleteComp/CheckBoxAutoCompleteComp";


const datas1 = [
    { name: "Kina Cream", qty: "0.016", unit: "Kilo ", allergies: "Milk", total_unit: "Milk", recipe_cost: "28.30" },
    { name: "Crayfish Chowder", qty: "5.000", unit: "Kilo", allergies: "Celery", total_unit: "Milk", recipe_cost: "4.00" },
    { name: "Gyoza Pastry", qty: "0.100", unit: "Each", allergies: "Gluten", total_unit: "60 Pack", recipe_cost: "33.90" },
    { name: "Gyoza Pastry", qty: "0.100", unit: "Each", allergies: "Gluten", total_unit: "60 Pack", recipe_cost: "33.90" },
]

const alergy_information = [{ name: "Egg", image: Nonveg_icon }, { name: "Milk", image: Nonveg_icon }, { name: "Celery", image: Nonveg_icon }, { name: "Mustard", image: Nonveg_icon }, { name: "Lupin", image: Nonveg_icon }, { name: "Nuts", image: Nonveg_icon }, { name: "Peanuts", image: Nonveg_icon }, { name: "Sesame", image: Nonveg_icon }, { name: "Molluscs", image: Nonveg_icon }, { name: "Crustaceans", image: Nonveg_icon }, { name: "Fish", image: Nonveg_icon }, { name: "Cereals (Wheat)", image: Nonveg_icon }, { name: "Soya", image: Nonveg_icon }, { name: "Sulphur dioxide", image: Nonveg_icon }];
const dietary_preference = ["Gluten Free", "Dairy Free", "Meat Lover", "Fodmap", "Low Sugar", "Low Carb", "Plant Based", "Vegetarian", "Pescatarian", "Keto"];
const lifestyle_choice = ["Pregnant", "Vegan", "Halal", "Kosher", "Organic", "Locally Sourced"];
const restaurant_features = ["Pet Friendly", "Child friendly", "Live music", "Outside sitting", "Disabled access", "Reservations needed", "Bring your own", "Large parties accepted", "Private dining room", "Table service", "Bar service", "Holding bar", "R20", "Take away"];
const cooking_method = ["Grilling", "Steaming", "Barbecue", "Braising", "Roasting", "RBaking", "Frying", "Smoking"];
const menu_options = ['Option 1', 'Option 2','Option 3', 'Option 4','Option 5', 'Option 6','Option 7', 'Option 8'];


const ManageEasyAddDishComp = () => {
    const [alergy, setAlergy] = useState([]);
    const [dietary, setDietary] = useState([]);
    const [lifestyle, setLifestyle] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [cooking, setCooking] = useState([]);
    const [descModal, setDescModal] = useState(false);

    const [menuValue, setMenuValue] = useState([])
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

    return (
        <>
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
                                <input className="form-control" type="text" placeholder="Search" />
                            </div>
                            <div className="col-md-3 form-group mb-0 easydish-input makes-input">
                                <label className="gray-txt f-15">Makes</label>
                                <div className="makesserving-wrapper">
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <span className="serving-txt">Serving</span>
                                </div>
                            </div>
                            <div className="col-md-3 form-group mb-0 easydish-input price-input">
                                <label className="gray-txt f-15">Price</label>
                                <input className="form-control" type="text" placeholder="Search" />
                            </div>
                            <div className="col-md-2 form-group mb-0 easydish-input gross-input">
                                <label className="gray-txt f-15">Gross Profit</label>
                                <input className="form-control" type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap mb-4">
                            <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Favorite</label>
                            </div>
                            <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">New</label>
                            </div>
                            <div className="custom-control custom-checkbox pink-checkbox mr-5 pr-5">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" htmlFor="customCheck3">Available</label>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="custom-drodown form-group mr-4 mb-0">
                                <label className="gray-txt f-15">Category</label>
                                <CheckBoxAutoCompleteComp className="minwidth-260" placeholder={"menu_options"} clearAll={clearMenugy} options={menu_options} value={menuValue} onChangeData={setMenuValue}/>

                            </div>
                            <div className="custom-drodown form-group mr-4 mb-0">
                                <label className="gray-txt f-15">Category</label>
                                <select className="form-control lightgray-border selectdropdown-btn minwidth-260" aria-label="Default select example">
                                    <option defaultValue>All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="custom-drodown form-group mr-4 mb-0">
                                <label className="gray-txt f-15">Category</label>
                                <select className="form-control lightgray-border selectdropdown-btn minwidth-260" aria-label="Default select example">
                                    <option defaultValue>All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
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
                                    <textarea className="form-control add-description-textarea" id="exampleFormControlTextarea1" rows="5" placeholder="Type Here" />
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


            <div className="row mb-4 pb-2">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4 add-dish-table">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">ITEM</th>
                                    <th className="brandon-Bold " scope="col">QTY</th>
                                    <th className="brandon-Bold " scope="col">UNIT</th>
                                    <th className="brandon-Bold " scope="col">ALLERGIES</th>
                                    <th className="brandon-Bold text-right" scope="col">STOCK UNIT</th>
                                    <th className="brandon-Bold text-right" scope="col">RECIPE COST ($)</th>
                                    <th className="brandon-Bold " scope="col">CUSTOMISABLE</th>

                                </tr>
                            </thead>
                            <tbody>
                                {datas1 && datas1.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.name}</td>
                                                <td className="">{data.qty}</td>
                                                <td className="">{data.unit}</td>
                                                <td className="">{data.allergies}</td>
                                                <td className="text-right">{data.total_unit}</td>
                                                <td className="text-right">${data.recipe_cost}</td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-checkbox pink-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck0" />
                                                        <label className="custom-control-label" htmlFor="customCheck0"></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr className="item-cost">
                                    <td>
                                        <span className="d-flex align-items-center">
                                            <span className="itemsplus-icon">+</span>
                                            <button className="additems-btn">Click to add item</button>
                                        </span>
                                    </td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className="text-right">Estimated Cost</td>
                                    <td className="text-right brandon-Bold">$4.10</td>
                                    <td className="text-center"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

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
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Type Here" />
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
                    <button className="btn pinkline-btn text-uppercase rounded-pill ml-3">CALCULATE</button>
                </div>
            </div>


        </>
    )
}

export default ManageEasyAddDishComp;