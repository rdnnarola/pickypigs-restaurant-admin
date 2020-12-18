import React from "react";
import AddEditMenuModalComp from "../AddEditMenuModalComp/AddEditMenuModalComp";
import './ManageMenuComponent.scss';
const datas1 = [
    { menu: "Breakfast", day: "Everyday", time: "7:30 AM - 10:00 AM ", available: "Yes", total_item: "13", modified: "2:45 PM" },
    { menu: "Lunch", day: "Everyday", time: "12:30 PM - 2:00 PM", available: "Yes", total_item: "27", modified: "Yesterday, 11:25 AM" },
    { menu: "Dinner", day: "Everyday", time: "7:30 PM - 10:00 PM ", available: "Yes", total_item: "32", modified: "2:45 PM" },
]



const ManageMenuComponent = () => {

    const [addMenuModalShow, setAddMenuModalShow] = React.useState(false);
    const [inputValue,setInputValue]=React.useState("");

    const search=(datas)=>{
        const columns=datas[0]&&Object.keys(datas[0]);
        return datas.filter((data)=>columns.some((column)=>data[column].toString().toLowerCase().indexOf(inputValue.toLowerCase())>-1));
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4>Manage Menus</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 mt-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="left-formgroup d-flex align-items-center">
                            <div className="input-search form-group mr-4 mb-0">
                                <input className="form-control" type="text" onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Search" />
                            </div>
                            <div className="custom-control custom-checkbox pink-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Show deleted menus</label>
                            </div>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3 f-15" onClick={() => setAddMenuModalShow(true)}><span className="add-icon"> ADD MENU</span></button>
                    </div>
                    <div>
                        <AddEditMenuModalComp  show={addMenuModalShow} onHide={() => setAddMenuModalShow(false)}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">MENU NAME</th>
                                    <th className="brandon-Bold " scope="col">DAY</th>
                                    <th className="brandon-Bold " scope="col">TIME</th>
                                    <th className="brandon-Bold " scope="col">AVAILABLE</th>
                                    <th className="brandon-Bold " scope="col">TOTAL ITEMS</th>
                                    <th className="brandon-Bold " scope="col">LATEST MODIFIED</th>
                                    <th className="brandon-Bold " scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {search(datas1) && search(datas1).map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.menu}</td>
                                                <td className="">{data.day}</td>
                                                <td className="">{data.time}</td>
                                                <td className="">{data.available}</td>
                                                <td className="">{data.total_item}</td>
                                                <td className="">{data.modified}</td>
                                                <td className="pt-0 pb-0">
                                                    <select className="form-select actiondropdown-btn" aria-label="Default select example">
                                                        <option defaultValue>Action</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
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

        </>
    )
}

export default ManageMenuComponent;