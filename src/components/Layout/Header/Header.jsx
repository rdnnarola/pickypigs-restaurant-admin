import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import searchicon_gray from "../../../assets/images/search-grey.svg";
import notification_bell from "../../../assets/images/notification-bell.svg";
import userimg from "../../../assets/images/user.png";
import "./Header.scss";

const Header = () => {
    let [addButton, SetAddButton] = useState('');

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white navbar-admin p-0">
                <div className="logo-navbar d-flex align-items-center justify-content-center position-relative">
                    <NavLink className="navbar-brand mr-0 outline-none" to="/">
                        <img src={logo} className="img-fluid" alt="icon" />
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse nav-collapse d-flex align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">DASHBOARD <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reports">REPORTS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/menu" >MENU BUILDER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/kds" >KDS</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center nav-rigthcontent">
                        <form className="form-inline my-2 my-lg-0 search-control position-relative mr-5">
                            <input className="form-control mr-sm-2 search-input" type="text" placeholder="Search" aria-label="Search" />
                            <img src={searchicon_gray} className="img-fluid search-icon" alt="icon" />
                            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        </form>
                        <button onMouseEnter={() => SetAddButton('+    ')} onMouseLeave={() => SetAddButton('')}
                            className="btn btn-outline-success my-2 my-sm-0 add-dish-btn mr-4" type="submit">{addButton}Add Dish</button>
                        <button className="btn notification-btn p-0 position-relative mr-3">
                            <img src={notification_bell} className="img-fluid" alt="icon"  />
                            <span className="notification-count">2</span>
                        </button>
                        <button className="user-details d-flex align-items-center">
                            <div className="user-img position-absolute">
                                <img src={userimg} className="img-fluid" alt="icon" />
                            </div>
                            <div className="user-info">
                               <p className="user-name mb-1">Andreas Brixen</p> 
                               <p className="user-date mb-0">Wednesday 19, March 2020</p>
                            </div>
                        </button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header;