import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {duplicateSelectedCategoryData,hideSelectedCategoryData,getAllCategoryData, showAddUpdateCategoryModal, showDeleteCategoryModal} from "../../redux/actions/categoryAction";
import AddEditCategoryModalComp from "../AddEditCategoryModalComp/AddEditCategoryModalComp";
import moment from "moment";
import './ManageCategoriesComponent.scss';
import DeleteCategoryModalComp from "../DeleteCategoryModalComp/DeleteCategoryModalComp";


const ManageCategoriesComponent = () => {
    const dispatch=useDispatch();

    // const [addCategoryModalShow, setAddCategoryModalShow] = useState(false);
    // const [deleteModalShow, setDeleteModalShow] = React.useState(false);

    const [inputValue,setInputValue]=useState("");
    const [categoryId,setCategoryId]=useState('')

    const addCategoryModalShow = useSelector(state => state.category.showAddUpdateCategoryModalData)
    const deleteModalShow = useSelector(state => state.category.showDeleteCategoryModalData)

    useEffect(()=>{
        dispatch(getAllCategoryData({search:inputValue,start:0}));
    },[dispatch,inputValue]);

    let categoryData = useSelector((state)=>{
        return state.category
    });
    let {isLoading,category_Data}=categoryData;

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
                                <input className="form-control" type="text" onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Search" />
                            </div>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3 w-170 f-15"  onClick={() => {dispatch(showAddUpdateCategoryModal(true));setCategoryId(null)}}><span className="add-icon">Add Category</span></button>
                    </div>
                    <div>
                        <AddEditCategoryModalComp show={addCategoryModalShow} onHide={() => dispatch(showAddUpdateCategoryModal(false))} categoryid={categoryId} mydata={category_Data&&category_Data.menuDetails}/>
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
                                    category_Data && category_Data.menuDetails.length>0
                                    ?
                                    <React.Fragment>
                                        {category_Data && category_Data.menuDetails.map((data, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <tr  className={`${!data.isActive&&"my_custom_bg_hide"}`}>
                                                        <td>{data.name}</td>
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        {/* <td>Yes</td> */}
                                                        <td>{data.dishesDetail.length}</td>
                                                        <td >{data.updatedAt ?moment(data.updatedAt).format(" Do MMMM, YYYY"): "-" }</td>
                                                        <td className="pt-0 pb-0">
                                                            <div className="">
                                                                <button className="btn btn-secondary dropdown-toggle actiondropdown-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Action
                                                                </button>
                                                                <ul className="dropdown-menu actiondropdown-list" aria-labelledby="dropdownMenuButton">
                                                                    <li><button className="dropdown-item" onClick={() => {dispatch(showAddUpdateCategoryModal(true));setCategoryId(data._id)}} >Update</button></li>
                                                                    <li><button className="dropdown-item" onClick={()=>{dispatch(duplicateSelectedCategoryData(data._id))}}>Duplicate</button></li>
                                                                    <li><button className="dropdown-item" onClick={()=>{dispatch(hideSelectedCategoryData(data._id,{isActive:!data.isActive}))}}>{data.isActive?"Hide":"UnHide"}</button></li>
                                                                    <li><button className="dropdown-item" onClick={() => {dispatch(showDeleteCategoryModal(true));setCategoryId(data._id)}}>Delete</button></li>
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
                <DeleteCategoryModalComp show={deleteModalShow} onHide={() => dispatch(showDeleteCategoryModal(false))}  selectedid={categoryId}/>

            </div>

        </>
    )
}

export default ManageCategoriesComponent;