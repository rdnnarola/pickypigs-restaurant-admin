import React from "react";
import './BreakfastMenuComponent.scss';
const datas1 = [
    { item: "Manuka Honey Glazed Pork Ribs", allergy: "Milk", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Beef Tataki", allergy: "-", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Butter Cup Pate", allergy: "-", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
]
const datas2 = [
    { item: "Cray Fish Slider", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Ika Mata", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Salt & Pepper Sauid", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
]
const datas3 = [
    { item: "Kina Gyoza", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Wagyu Gyoza", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Paua & Prawn Gyoza", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
    { item: "Paua & Prawn Gyoza", allergy: "", stockcost: "4.71", saleprice: "21.00", available: "1:30 PM" },
]
const BreakfastMenuComponent = () => {
    return (
        <>

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4>BreakFast</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 mt-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="custom-control custom-checkbox pink-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Show description</label>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill">EDIT MENU</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">FROM THE LAND</th>
                                    <th className="brandon-Bold text-center" scope="col">ALLERGIES</th>
                                    <th className="brandon-Bold text-right" scope="col">STOCK COST ($)</th>
                                    <th className="brandon-Bold text-right" scope="col">SALE PRICE ($)</th>
                                    <th className="brandon-Bold text-center" scope="col">AVAILABLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas1 && datas1.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.item}</td>
                                                <td className="text-center">{data.allergy === "" ? "-" : data.allergy}</td>
                                                <td className="text-right">&#36; {data.stockcost}</td>
                                                <td className="text-right">&#36; {data.saleprice}</td>
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
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">FROM THE LAND</th>
                                    <th className="brandon-Bold text-center" scope="col">ALLERGIES</th>
                                    <th className="brandon-Bold text-right" scope="col">STOCK COST ($)</th>
                                    <th className="brandon-Bold text-right" scope="col">SALE PRICE ($)</th>
                                    <th className="brandon-Bold text-center" scope="col">AVAILABLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas2 && datas2.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.item}</td>
                                                <td className="text-center">{data.allergy === "" ? "-" : data.allergy}</td>
                                                <td className="text-right">&#36; {data.stockcost}</td>
                                                <td className="text-right">&#36; {data.saleprice}</td>
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
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead className="accordion-toggle collapsed mt-2 ml-5 " id="accordion1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
                                <tr>
                                    <th className="brandon-Bold" scope="col">GYOZA</th>
                                    <th className="brandon-Bold text-center" scope="col">ALLERGIES</th>
                                    <th className="brandon-Bold text-right" scope="col">STOCK COST ($)</th>
                                    <th className="brandon-Bold text-right" scope="col">SALE PRICE ($)</th>
                                    <th className="brandon-Bold text-center" scope="col">AVAILABLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <React.Fragment>
                                    <tr >
                                        <td scope="col">SUB CATEGORY - 1</td>
                                        <td scope="col"></td>
                                        <td scope="col"></td>
                                        <td scope="col"> </td>
                                        <td scope="col" className="expand-button"></td>
                                    </tr>

                                    {datas3 && datas3.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <tr id="collapseOne" className="collapse in p-3 hide-table-padding">
                                                    <td>{data.item}</td>
                                                    <td className="text-center">{data.allergy === "" ? "-" : data.allergy}</td>
                                                    <td className="text-right">&#36; {data.stockcost}</td>
                                                    <td className="text-right">&#36; {data.saleprice}</td>
                                                    <td className="text-center">
                                                        <input type="checkbox" />
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                </React.Fragment>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BreakfastMenuComponent;