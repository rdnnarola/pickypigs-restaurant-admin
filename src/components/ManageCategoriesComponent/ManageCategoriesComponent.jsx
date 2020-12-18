import React from "react";
import AddEditCategoryModalComp from "../AddEditCategoryModalComp/AddEditCategoryModalComp";
import './ManageCategoriesComponent.scss';
const datas1 = [
    { "name": "Grilled", "available": "Yes", "total_item": "13", "modified": "2:45 PM" },
    { "name": "Gyoza", "available": "Yes", "total_item": "27", "modified": "Yesterday, 11:25 AM" },
    { "name": "Fries", "available": "Yes", "total_item": "32", "modified": "5th Thur, Nov-2020" },
    { "name": "Co4ee", "available": "Yes", "total_item": "13", "modified": "4th Wed, Nov-2020" },
    { "name": "Lemonades", "available": "Yes", "total_item": "27", "modified": "Yesterday, 11:25 AM" },
]





const ManageCategoriesComponent = () => {
    const [addCategoryModalShow, setAddCategoryModalShow] = React.useState(false);

    return (
        <>

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4>Manage Categories</h4>
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
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3 w-170 f-15" onClick={() => setAddCategoryModalShow(true)}><span className="add-icon">Add Category</span></button>
                    </div>
                    <div>
                        <AddEditCategoryModalComp show={addCategoryModalShow} onHide={() => setAddCategoryModalShow(false)}/>
                    </div>
                </div>
            </div>

            <div className="table-responsive my_custom_table mb-4">
                <table className="table table-striped table-main">
                    <thead>
                        <tr>
                            <th className="brandon-Bold" scope="col">CATEGORY NAME</th>
                            <th className="brandon-Bold " scope="col">&nbsp;&nbsp;&nbsp;</th>
                            <th className="brandon-Bold " scope="col">&nbsp;&nbsp;&nbsp;</th>
                            <th className="brandon-Bold " scope="col">&nbsp;&nbsp;&nbsp;</th>
                            <th className="brandon-Bold " scope="col">&nbsp;&nbsp;&nbsp;</th>
                            <th className="brandon-Bold " scope="col">AVAILABLE</th>
                            <th className="brandon-Bold " scope="col">TOTAL ITEMS</th>
                            <th className="brandon-Bold " scope="col">LATEST MODIFIED</th>
                            <th className="brandon-Bold " scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas1 && datas1.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr >
                                        <td>{data.name}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>{data.available}</td>
                                        <td>{data.total_item}</td>
                                        <td>{data.modified}</td>
                                        <td className="pt-0 pb-0">
                                            <select className="form-select actiondropdown-btn" aria-label="Default select example">
                                                <option defaultValue>Action</option>
                                                <option value="1">Update</option>
                                                <option value="2">Delete</option>
                                            </select>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ManageCategoriesComponent;