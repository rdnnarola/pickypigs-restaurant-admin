import React from "react";
import './AllDishesComponent.scss';
const datas1=[
            {name:"Sub Category - 1",available:"Yes",total_item:"13",modified:"2:45 PM"},
            {name:"Sub Category - 2",available:"Yes",total_item:"27",modified:"Yesterday, 11:25 AM"},
            {name:"Sub Category - 3",available:"Yes",total_item:"32",modified:"5th Thur, Nov-2020"},
            {name:"Sub Category - 4",available:"Yes",total_item:"13",modified:"4th Wed, Nov-2020"},
            {name:"Sub Category - 5",available:"Yes",total_item:"27",modified:"Yesterday, 11:25 AM"},
        ]
               

const AllDishesComponent=()=>{
    return(
        <>
            <section >
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-heading brandon-Medium">
                                <h4>All Dishes</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mt-4 mb-4">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="left-formgroup d-flex align-items-center">
                                    <div className="input-search form-group mr-4 mb-0">
                                        <label>Search</label>
                                        <input className="form-control" type="text" placeholder="Name" />
                                    </div>
                                    <div className="input-search form-group mr-4 mb-0">
                                        <label>Category</label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>All</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="input-search form-group mr-4 mb-0">
                                        <label>Menu</label>
                                        <select class="form-control" aria-label="Default select example">
                                            <option selected>All</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn pinkline-btn text-uppercase rounded-pill mr-3">Add New</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">DISH NAME</th>
                                    <th className="brandon-Bold " scope="col">&nbsp;&nbsp;&nbsp;</th>
                                    <th className="brandon-Bold " scope="col">ALLERGENS</th> 
                                    <th className="brandon-Bold " scope="col">AVAILABLE</th>
                                    <th className="brandon-Bold " scope="col">TOTAL ITEMS</th>
                                    <th className="brandon-Bold " scope="col">LATEST MODIFIED</th>
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
                                                <td>{data.available}</td>
                                                <td>{data.total_item}</td>
                                                <td>{data.modified}</td>
                                                <td className="pt-0 pb-0">
                                                    <select class="form-select actiondropdown-btn" aria-label="Default select example">
                                                        <option selected>Action</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Threeaaaaaaaaaaaa</option>
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
            </section>
            
        </>
    )
}

export default AllDishesComponent;