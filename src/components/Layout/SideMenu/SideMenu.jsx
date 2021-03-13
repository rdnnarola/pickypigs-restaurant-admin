import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import manageicon from "../../../assets/images/manage-icon.svg";
import menu_icon from "../../../assets/images/menus_icon.svg";
import category_icon from "../../../assets/images/categories_icon.svg";
import setting_icon from "../../../assets/images/Settings_icon.svg";
import pinkrightarrow from "../../../assets/images/pink-rightarrow.svg";
import './SideMenu.scss';

const SideMenu = () => {
    let [display, SetDisplay] = useState('none')
    return (
        <>
            <div className="sidebar d-flex flex-column">
                <div className="aside-content">
                    <div className="aside-menu">
                        {/* <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={manageicon} className="img-fluid" alt="icon" />
                            </div>
                            <button className="btn btn-none text-primary menu-name" onClick={() => { SetDisplay(display === "none" ? "block" : "none") }}>
                                Manage
                            <span className="arrow_image">
                                    <img src={pinkrightarrow} className={`img-fluid ${display === "block" ? "active" : "none"}`} alt="icon"/>
                                </span>
                            </button>
                        </div> */}
                        <div className={`submenu_area  ${display==="block"?"d-block flex-column":"d-none"}`}>
                            {/* <NavLink to="/breakfast_menu" className="submenu_name">Breakfast</NavLink> */}
                            {/* <NavLink to="/manage_menu" className="submenu_name">Manage Menus</NavLink> */}
                            {/* <NavLink to="/manage_submenu" className="submenu_name">Manage Sub Menus</NavLink> */}
                            {/* <NavLink to="/manage_categories" className="submenu_name">Manage Categories</NavLink> */}
                            {/* <NavLink to="/manage_subcategories" className="submenu_name">Manage Sub Categories</NavLink> */}
                            {/* <NavLink to="/all_dishes" className="submenu_name">All Dishes</NavLink> */}
                            {/* <NavLink to="/manage_dishes" className="submenu_name">Manage Easy Add Dish</NavLink> */}
                            {/* <NavLink to="/restaurant_detail" className="submenu_name">Restaurant Setting</NavLink> */}
                            {/* <NavLink to="/" className="submenu_name">Dietary & Lifestyle</NavLink> */}
                        </div>

                        <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={menu_icon} className="img-fluid" alt="icon"  />
                            </div>
                            <NavLink to="/manage_menu" className="btn btn-none text-primary menu-name">Menus</NavLink>
                        </div>
                        {/* <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={menu_icon} className="img-fluid" alt="icon"  />
                            </div>
                            <NavLink to="/manage_submenu" className="btn btn-none text-primary menu-name">Sub Menus</NavLink>
                        </div> */}
                        <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={category_icon} className="img-fluid" alt="icon"  />
                            </div>
                            <NavLink to="/manage_categories" className="btn btn-none text-primary menu-name">Categories</NavLink>
                        </div>
                        <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={category_icon} className="img-fluid" alt="icon"  />
                            </div>
                            <NavLink to="/manage_subcategories" className="btn btn-none text-primary menu-name">Sub Categories</NavLink>
                        </div>
                        <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={category_icon} className="img-fluid" alt="icon"  />
                            </div>
                            <NavLink to="/all_dishes" className="btn btn-none text-primary menu-name">Manage Dishes</NavLink>
                        </div>
                    </div>
                    <div className="aside-footer">
                        <div className="menu-list d-flex align-items-center">
                            <div className="menu-icon">
                                <img src={setting_icon} className="img-fluid" alt="icon"/>
                            </div>
                            <NavLink to="/restaurant_detail" className="btn btn-none text-primary menu-name">Settings</NavLink>
                        </div>
                        <p className="copyright-txt">Copyrights © nareshbingi.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu;