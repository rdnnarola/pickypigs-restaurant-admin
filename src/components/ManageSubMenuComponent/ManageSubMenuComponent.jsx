import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getAllSubMenuData,hideSelectedSubMenuData,duplicateSelectedSubMenuData} from "../../redux/actions/submenuAction"
import AddEditSubMenuModalComp from "../AddEditSubMenuModalComp/AddEditSubMenuModalComp";
import DeleteSubMenuModalComp from "../DeleteSubMenuModalComp/DeleteSubMenuModalComp";
import moment from "moment";
import './ManageSubMenuComponent.scss';
import daycalculate from "../FormikExample/daycalculate";



const ManageSubMenuComponent = () => {
    const dispatch=useDispatch();
    const [addSubMenuModalShow, setAddSubMenuModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [inputValue,setInputValue]=useState("");
    const [subMenuId,setSubMenuId]=useState('')
    const [showDeleted, setShowDeleted] = useState(false);

    // const search=(datas)=>{
    //     const columns=datas[0]&&Object.keys(datas[0]);
    //     return datas.filter((data)=>columns.some((column)=>data[column].toString().toLowerCase().indexOf(inputValue.toLowerCase())>-1));
    // }

    useEffect(()=>{
        if(showDeleted){
            dispatch(getAllSubMenuData({search:inputValue,start:0,type:"submenu"}));
        }else{
            dispatch(getAllSubMenuData({search:inputValue,start:0,type:"submenu",delete:0}));
        }
    },[dispatch,inputValue,showDeleted]);

    let subMenuData = useSelector((state)=>{
        return state.submenu
    });

    let {isLoading,subMenu_Data}=subMenuData;
    
    function tConv24(time24) {
        var ts = time24;
        var H = +ts.substr(0, 2);
        var h = (H % 12) || 12;
        h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
        var ampm = H < 12 ? " AM" : " PM";
        ts = h + ts.substr(2, 3) + ampm;
        return ts;
      };

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4>Manage Sub Menus</h4>
                        {/* {newArray.sort().join()} */}
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
                                <input type="checkbox" checked={showDeleted} onChange={(e)=>{setShowDeleted(e.target.checked)}} className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Show deleted SubMenus</label>
                            </div>
                        </div>
                        <button className="btn pinkline-btn text-uppercase rounded-pill mr-3 f-15" onClick={() => {setAddSubMenuModalShow(true);setSubMenuId(null)}}><span className="add-icon"> ADD SUB MENU</span></button>
                    </div>
                    <div>
                        <AddEditSubMenuModalComp  show={addSubMenuModalShow} onHide={() => setAddSubMenuModalShow(false)} submenuid={subMenuId} showDeleted={showDeleted}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">SUB-MENU NAME</th>
                                    <th className="brandon-Bold " scope="col">DAY</th>
                                    <th className="brandon-Bold " scope="col">TIME</th>
                                    <th className="brandon-Bold " scope="col">AVAILABLE</th>
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
                                        <td colSpan="7" className="text-center" >
                                            <div className="spinner-border m-3" role="status"></div>
                                            <div className="visually-hidden">Please Wait Loading...</div>
                                        </td>
                                    </tr>
                                    :
                                    <React.Fragment>
                                        {
                                            subMenu_Data && subMenu_Data.menuDetails.length>0
                                            ?
                                            <React.Fragment>
                                                {subMenu_Data&& subMenu_Data.menuDetails.map((data, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <tr className={`${!data.isActive&&"bg-warning"}`}>
                                                                <td className="text-capitalize">{data.name}</td>
                                                                <td className="">{data.availability?daycalculate(data.availability):"-"}</td>
                                                                <td className="">{tConv24(data.timeFrom)} - {tConv24(data.timeTo)}</td>
                                                                <td className="">{data.available?"Yes":"No"}</td>
                                                                <td className="">{data.dishesDetail.length}</td>
                                                                <td className="">{data.updatedAt ?moment(data.updatedAt).format(" Do MMMM, YYYY"): "-" }</td>
                                                                <td className="pt-0 pb-0">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-secondary dropdown-toggle actiondropdown-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Action
                                                                        </button>
                                                                        <ul className="dropdown-menu actiondropdown-list" aria-labelledby="dropdownMenuButton">
                                                                            <li><button className="dropdown-item" onClick={() => {setAddSubMenuModalShow(true);setSubMenuId(data._id)}} >Update</button></li>
                                                                            {data.isDeleted===0?
                                                                                <li><button className="dropdown-item" onClick={() => {setDeleteModalShow(true);setSubMenuId(data._id)}}>Delete</button></li>
                                                                            :
                                                                                <li><button className="dropdown-item" >Restore Menu</button></li>
                                                                            }
                                                                            <li><button className="dropdown-item" onClick={()=>{dispatch(hideSelectedSubMenuData(data._id,{isActive:!data.isActive},showDeleted))}}>{data.isActive?"Hide":"UnHide"}</button></li>
                                                                            <li><button className="dropdown-item" onClick={()=>{dispatch(duplicateSelectedSubMenuData(data._id,{},showDeleted))}}>Duplicate</button></li>
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
                                                    <td colSpan="7" className="text-center">No Data Available</td>
                                                </tr>
                                            </React.Fragment>
                                        }
                                    </React.Fragment>
                                }
                            </tbody>
                        </table>
                        <DeleteSubMenuModalComp show={deleteModalShow} onHide={() => setDeleteModalShow(false)} selectedid={subMenuId} showDeleted={showDeleted}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageSubMenuComponent;