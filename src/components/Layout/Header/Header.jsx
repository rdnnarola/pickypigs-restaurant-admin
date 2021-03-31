import React, { useEffect, useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import searchicon_gray from "../../../assets/images/search-grey.svg";
import notification_bell from "../../../assets/images/notification-bell.svg";
import userimg from "../../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/generalActions";
import "./Header.scss";
import moment from 'moment';
import { getAllRestaurantDetail } from "../../../redux/actions/restaurantSettingAction";
import { SERVER_URL } from '../../../shared/constant'

const Header = () => {
    const dispatch = useDispatch();
    const history=useHistory();
    let [addButton, SetAddButton] = useState('');

    const handleLogout=()=>{
        dispatch(logoutUser(history))

    }
    useEffect(() => {
        dispatch(getAllRestaurantDetail())
    }, [dispatch]);

    let Restaurant_Setting_Data = useSelector((state) => {
        return state.restaurantSetting
    });

    let {restauraneSetting_Data} = Restaurant_Setting_Data;
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white navbar-admin p-0">
                <div className="logo-navbar d-flex align-items-center justify-content-center position-relative">
                    <NavLink className="navbar-brand mr-0 outline-none" to="/">
                        <img src={logo} className="img-fluid" alt="icon" />
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse nav-collapse  align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/dashboard">DASHBOARD <span className="sr-only">(current)</span></NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/reports">REPORTS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/menu" >MENU BUILDER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/kds" >KDS</NavLink>
                        </li> */}
                    </ul>
                    
                    <div className="d-flex align-items-center nav-rigthcontent">
                        {/* <form className="form-inline my-2 my-lg-0 search-control position-relative mr-5">
                            <input className="form-control mr-sm-2 search-input" type="text" placeholder="Search" aria-label="Search" />
                            <img src={searchicon_gray} className="img-fluid search-icon" alt="icon" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                        {/* <button onMouseEnter={() => SetAddButton('+    ')} onMouseLeave={() => SetAddButton('')}
                            className="btn btn-outline-success my-2 my-sm-0 add-dish-btn mr-4" type="submit">{addButton}Add Dish</button> */}
                        <NavLink to="/manage_dishes" className="btn pinkline-btn text-uppercase rounded-pill mr-4 w-170 f-15" style={{display:'flex',justifyContent:'center',alignItems:'center'}} ><span className="add-icon">Add Dish</span></NavLink>

                        <button className="btn notification-btn p-0 position-relative mr-3">
                            <img src={notification_bell} className="img-fluid" alt="icon"  />
                            <span className="notification-count">2</span>
                        </button>

                        <div className="dropdown">
                            <button className="user-details d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="user-img position-absolute">
                                    {restauraneSetting_Data && restauraneSetting_Data.restaurantProfilePhoto ?
                                        <img className="img-fluid rounded-circle" alt="icon" style={{width:40,height:40}}
                                            src={`${SERVER_URL}/${restauraneSetting_Data && restauraneSetting_Data.restaurantProfilePhoto}`}  />
                                        :
                                        <img src={userimg} className="img-fluid rounded-circle" style={{width:40,height:40}} alt="icon" />
                                    }
                                </div>
                                <div className="user-info">
                                {restauraneSetting_Data && restauraneSetting_Data.name ?
                                    <p className="user-name mb-1">{restauraneSetting_Data && restauraneSetting_Data.name}</p> 
                                        :
                                    <p className="user-name mb-1">Unknown Restaurant</p> 
                                }
                                <p className="user-date mb-0">{moment().format('dddd Do , MMMM YYYY')}</p>
                                </div>
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                                <li><button className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                                {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            
        </>
    )
}

export default Header;