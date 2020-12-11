import React,{useState} from "react";
import './ManageEasyAddDishComp.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"


const datas1 = [
    { name: "Kina Cream", qty: "0.016", unit: "Kilo ", allergies: "Milk", total_unit: "Milk", recipe_cost: "28.30" },
    { name: "Crayfish Chowder", qty: "5.000", unit: "Kilo", allergies: "Celery", total_unit: "Milk", recipe_cost: "4.00" },
    { name: "Gyoza Pastry", qty: "0.100", unit: "Each", allergies: "Gluten", total_unit: "60 Pack", recipe_cost: "33.90" },
    { name: "Gyoza Pastry", qty: "0.100", unit: "Each", allergies: "Gluten", total_unit: "60 Pack", recipe_cost: "33.90" },
]

const alergy_information=[{name:"Egg",image:Nonveg_icon},{name:"Milk",image:Nonveg_icon},{name:"Celery",image:Nonveg_icon},{name:"Mustard",image:Nonveg_icon},{name:"Lupin",image:Nonveg_icon},{name:"Nuts",image:Nonveg_icon},{name:"Peanuts",image:Nonveg_icon},{name:"Sesame",image:Nonveg_icon},{name:"Molluscs",image:Nonveg_icon},{name:"Crustaceans",image:Nonveg_icon},{name:"Fish",image:Nonveg_icon},{name:"Cereals (Wheat)",image:Nonveg_icon},{name:"Soya",image:Nonveg_icon},{name:"Sulphur dioxide",image:Nonveg_icon}];
const dietary_preference=["Gluten Free","Dairy Free","Meat Lover","Fodmap","Low Sugar","Low Carb","Plant Based","Vegetarian","Pescatarian","Keto"];
const lifestyle_choice=["Pregnant","Vegan","Halal","Kosher","Organic","Locally Sourced"];
const restaurant_features=["Pet Friendly","Child friendly","Live music","Outside sitting","Disabled access","Reservations needed","Bring your own","Large parties accepted","Private dining room","Table service","Bar service","Holding bar","R20","Take away"];
const cooking_method=["Grilling","Steaming","Barbecue","Braising","Roasting","RBaking","Frying","Smoking"];


const ManageEasyAddDishComp = () => {
    const [alergy, setAlergy] = useState([]);
    const [dietary, setDietary] = useState([]);
    const [lifestyle, setLifestyle] = useState([]);
    const [restaurant, setRestaurant] = useState([]); 
    const [cooking, setCooking] = useState([]); 

    const handleDietaryPreference=(e)=>{
        e.preventDefault();
        if(dietary.indexOf(e.target.id) !== -1){
            var Index = dietary.indexOf(e.target.id);
            if(Index>-1){
                setDietary(dietary.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setDietary([...dietary,e.target.id]);
        }
    }
    const handleLifestyle=(e)=>{
        e.preventDefault();
        if(lifestyle.indexOf(e.target.id) !== -1){
            var Index = lifestyle.indexOf(e.target.id);
            if(Index>-1){
                setLifestyle(lifestyle.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setLifestyle([...lifestyle,e.target.id]);
        }
    }
    const handleCooking=(e)=>{
        e.preventDefault();
        if(cooking.indexOf(e.target.id) !== -1){
            var Index = cooking.indexOf(e.target.id);
            if(Index>-1){
                setCooking(cooking.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setCooking([...cooking,e.target.id]);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium d-flex justify-content-between align-items-center">
                        <h4>Manage Easy Add Dish</h4>
                        <div>
                            <p className="mb-0"><span>Last edited : </span>Yesterday 2:30 PM</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 mt-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="left-formgroup d-flex align-items-center">
                            <div className="input-search form-group mr-4 mb-0">
                                <input className="form-control" type="text" placeholder="Search" />
                            </div>
                            <div class="custom-control custom-checkbox pink-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">Show deleted menus</label>
                            </div>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3"><span> ADD MENU</span></button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4">
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
                                                    <div class="custom-control custom-checkbox pink-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck0" />
                                                        <label class="custom-control-label" for="customCheck0"></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )   
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><button>+ Click to add item</button></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className="text-right">Estimated Cost</td>
                                    <td className="text-right">$4.10</td>
                                    <td className="text-center"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <p>DIETARY PREFERENCES</p>
                    <div>
                        {dietary_preference&&dietary_preference.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id={data} 
                                        onClick={handleDietaryPreference} 
                                        className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${dietary.indexOf(data)!==-1 && "btn btn-primary"}`} 
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
                        {lifestyle_choice&&lifestyle_choice.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id={data} 
                                        onClick={handleLifestyle} 
                                        className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${lifestyle.indexOf(data)!==-1 && "btn btn-primary"}`}
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
                        {cooking_method&&cooking_method.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id={data} 
                                        onClick={handleCooking} 
                                        className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${cooking.indexOf(data)!==-1 && "btn btn-primary"}`}
                                    >
                                        {data}
                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}

export default ManageEasyAddDishComp;