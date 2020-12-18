import React from "react";
import AddEditSubCategoryModalComp from "../AddEditSubCategoryModalComp/AddEditSubCategoryModalComp";
import './ManageSubCategoriesComponent.scss';
const datas1 = [
    { name: "Sub Category - 1", available: "Yes", total_item: "13", modified: "2:45 PM" },
    { name: "Sub Category - 2", available: "Yes", total_item: "27", modified: "Yesterday, 11:25 AM" },
    { name: "Sub Category - 3", available: "Yes", total_item: "32", modified: "5th Thur, Nov-2020" },
    { name: "Sub Category - 4", available: "Yes", total_item: "13", modified: "4th Wed, Nov-2020" },
    { name: "Sub Category - 5", available: "Yes", total_item: "27", modified: "Yesterday, 11:25 AM" },
]


const ManageSubCategoriesComponent = () => {
    const [addSubCategoryModalShow, setAddSubCategoryModalShow] = React.useState(false);

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4>Manage Sub Categories</h4>
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
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3 f-15" onClick={() => setAddSubCategoryModalShow(true)}><span className="add-icon">Add New</span></button>
                    </div>
                    <div>
                        <AddEditSubCategoryModalComp show={addSubCategoryModalShow} onHide={() => setAddSubCategoryModalShow(false)}/>
                    </div>
                </div>
            </div>
            <div className="table-responsive my_custom_table mb-4">
                <table className="table table-striped table-main">
                    <thead>
                        <tr>
                            <th className="brandon-Bold" scope="col">NAME</th>
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

        </>
    )
}

export default ManageSubCategoriesComponent;