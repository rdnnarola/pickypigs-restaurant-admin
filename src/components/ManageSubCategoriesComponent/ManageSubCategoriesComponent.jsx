import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import moment from "moment";
import {getAllSubCategoryData,hideSelectedSubCategoryData,duplicateSelectedSubCategoryData, setSubcategoryModal, deleteSubcategoryModal} from "../../redux/actions/subcategoryAction";
import AddEditSubCategoryModalComp from "../AddEditSubCategoryModalComp/AddEditSubCategoryModalComp";
import './ManageSubCategoriesComponent.scss';
import DeleteSubCategoryModalComp from "../DeleteSubCategoryModalComp/DeleteSubCategoryModalComp";


const ManageSubCategoriesComponent = () => {
    const dispatch=useDispatch();

    // const [addSubCategoryModalShow, setAddSubCategoryModalShow] = React.useState(false);
    // const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const [inputValue,setInputValue]=useState("");
    const [subCategoryId,setSubCategoryId]=useState('')

    useEffect(()=>{
        dispatch(getAllSubCategoryData({search:inputValue,start:0}));
    },[dispatch,inputValue]);

    let subCategoryData = useSelector((state)=>{
        return state.subcategory
    });
    let {isLoading,subCategory_Data}=subCategoryData;

    const subModalShow = useSelector(state => state.subcategory.subCategoryModal)
    const deleteModalShow = useSelector(state => state.subcategory.deleteSubcategoryModal)

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
                                <input className="form-control" type="text" onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Search" />
                            </div>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3 f-15" onClick={() => {dispatch(setSubcategoryModal(true));setSubCategoryId(null)}}><span className="add-icon">Add New</span></button>
                    </div>
                    <div>
                        <AddEditSubCategoryModalComp show={subModalShow} onHide={() => dispatch(setSubcategoryModal(false))}  mydata={subCategory_Data&&subCategory_Data.menuDetails} subcategoryid={subCategoryId}/>
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
                            {/* <th className="brandon-Bold " scope="col">AVAILABLE</th> */}
                            <th className="brandon-Bold " scope="col">TOTAL ITEMS</th>
                            <th className="brandon-Bold " scope="col">LATEST MODIFIED</th>
                            <th className="brandon-Bold " scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading
                            ?
                            <tr>
                                <td colSpan="9" className="text-center" >
                                    <div className="spinner-border m-3" role="status"></div>
                                    <div className="visually-hidden">Please Wait Loading...</div>
                                </td>
                            </tr>
                            :
                            <React.Fragment>
                                {
                                    subCategory_Data && subCategory_Data.menuDetails.length>0
                                    ?
                                    <React.Fragment>
                                        {subCategory_Data && subCategory_Data.menuDetails.map((data, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <tr className={`${!data.isActive&&"bg-warning"}`}>
                                                        <td className="text-capitalize">{data.name}</td>
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        {/* <td className="text-capitalize">yes</td> */}
                                                        <td>{data.dishesDetail.length}</td>
                                                        <td>{data.updatedAt ?moment(data.updatedAt).format(" Do MMMM, YYYY"): "-"}</td>
                                                        <td className="pt-0 pb-0">
                                                            <div className="dropdown">
                                                                <button className="btn btn-secondary dropdown-toggle actiondropdown-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Action
                                                                </button>
                                                                <ul className="dropdown-menu actiondropdown-list" aria-labelledby="dropdownMenuButton">
                                                                    <li><button className="dropdown-item" onClick={() => {dispatch(setSubcategoryModal(true));setSubCategoryId(data._id)}} >Update</button></li>
                                                                    <li><button className="dropdown-item" onClick={()=>{dispatch(duplicateSelectedSubCategoryData(data._id))}}>Duplicate</button></li>
                                                                    <li><button className="dropdown-item" onClick={()=>{dispatch(hideSelectedSubCategoryData(data._id,{isActive:!data.isActive}))}}>{data.isActive?"Hide":"UnHide"}</button></li>
                                                                    <li><button className="dropdown-item" onClick={() => {dispatch(deleteSubcategoryModal(true));setSubCategoryId(data._id)}}>Delete</button></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            )
                                        })}
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <tr >
                                            <td colSpan="9" className="text-center">No Data Available</td>
                                        </tr>
                                    </React.Fragment>

                                }
                            </React.Fragment>
                        }
                    </tbody>
                </table>
                <DeleteSubCategoryModalComp show={deleteModalShow} onHide={() => dispatch(deleteSubcategoryModal(false))}  selectedid={subCategoryId}/>
            </div>

        </>
    )
}

export default ManageSubCategoriesComponent;