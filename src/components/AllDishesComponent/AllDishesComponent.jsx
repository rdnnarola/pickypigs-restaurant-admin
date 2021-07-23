import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  duplicateSelectedDishData,
  getAllDishesData,
  getAllDisheshData,
  hideSelectedDishData,
} from "../../redux/actions/dishesAction";
import moment from "moment";
import "./AllDishesComponent.scss";
import { getAllMenuData } from "../../redux/actions/menuAction";
// import { getCategoryListOfSelectedMenu} from "../../redux/actions/categoryAction";
import { Link } from "react-router-dom";
import DeleteDishesModalComp from "../DeleteDishesModalComp/DeleteDishesModalComp";

const AllDishesComponent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [menuId, setmenuId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [dishesId, setDishesId] = useState("");
  const [showHide, setShowHide] = useState(false);

  //   useEffect(() => {
  //     dispatch(getAllDishesData({ search: inputValue, start: 0, menu: menuId }));
  //   }, [menuId]);

  useEffect(() => {
    if (showHide) {
      dispatch(
        getAllDishesData({ search: inputValue, start: 0, menu: menuId })
      );
    } else {
      dispatch(
        getAllDisheshData({
          search: inputValue,
          start: 0,
          menu: menuId,
          isActive: true,
        })
      );
    }
  }, [dispatch, inputValue, menuId, showHide]);

  useEffect(() => {
    dispatch(getAllMenuData({ start: 0, delete: 0 }));
  }, [dispatch]);

  let dishesData = useSelector((state) => {
    return state.dishes;
  });

  let { isLoading, dishes_Data } = dishesData;

  const filteredDishesh =
    dishes_Data &&
    dishes_Data.dishDetails.filter((item) => {
      return item.isActive;
    });

  let menuData = useSelector((state) => {
    return state.menu.menu_Data;
  });
  // let categoryData = useSelector((state)=>{
  //     return state.category.selectedMenuCategoryList
  // });
  const handleMenuChange = (value) => {
    setmenuId(value);
    // setCategoryId('')
    // if(value !==""){
    //     dispatch(getCategoryListOfSelectedMenu({menuId:[value]}));
    // }else{
    //     dispatch(getCategoryListOfSelectedMenu({menuId:[]}));
    // }
  };

  // const handleCategoryChange=(e)=>{
  //     if(menuId !==""){
  //         setCategoryId(e.target.value)
  //     }else{
  //         setCategoryId('')
  //     }
  // }
  return (
    <>
      <section>
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
                  <div className="input-search form-group mr-4 mb-0 minwidth-260">
                    <label className="gray-txt f-15">Search</label>
                    <input
                      className="form-control lightgray-border"
                      type="text"
                      onChange={(e) => {
                        setInputValue(e.target.value);
                      }}
                      placeholder="Name"
                    />
                  </div>
                  <div className="custom-drodown form-group mr-4 mb-0">
                    <label className="gray-txt f-15">Menu</label>
                    <select
                      onChange={(e) => {
                        handleMenuChange(e.target.value);
                      }}
                      className="form-control lightgray-border selectdropdown-btn minwidth-260 text-capitalize"
                      aria-label="Default select example"
                    >
                      <option value="">Select</option>
                      {menuData && menuData.menuDetails ? (
                        <React.Fragment>
                          {menuData &&
                            menuData.menuDetails.map((data, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <option
                                    className="text-capitalize"
                                    value={data._id}
                                  >
                                    {data.name}
                                  </option>
                                </React.Fragment>
                              );
                            })}
                        </React.Fragment>
                      ) : null}
                    </select>
                  </div>
                  {/* Show hide / unHide checkbox  */}
                  <div className="custom-control custom-checkbox pink-checkbox showhide-check">
                    <input
                      type="checkbox"
                      checked={showHide}
                      onChange={(e) => {
                        setShowHide(e.target.checked);
                      }}
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Show hide dishes
                    </label>
                  </div>

                  {/* <div className="custom-drodown form-group mr-4 mb-0">
                                        <label className="gray-txt f-15">Category</label>
                                        <select onChange={handleCategoryChange} className="form-control lightgray-border selectdropdown-btn minwidth-260 text-capitalize" aria-label="Default select example">
                                            <option value="">Select</option>
                                            {
                                                menuId&&menuId?
                                                <React.Fragment>
                                                    {categoryData && categoryData.map((data, index)=>{
                                                        return(
                                                            <React.Fragment key={index}>
                                                                <option className="text-capitalize" value={data._id}>{data.name}</option>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                    }
                                                </React.Fragment>
                                                :
                                                null
                                            }
                                            
                                        </select>
                                    </div> */}
                </div>
                <Link
                  to="/manage_dishes"
                  className="btn pinkline-btn text-uppercase rounded-pill mr-3 w-170 f-15"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className="add-icon">Add Dish</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="table-responsive my_custom_table mb-4">
            <table className="table table-striped table-main">
              <thead>
                <tr>
                  <th className="brandon-Bold" scope="col">
                    DISH NAME
                  </th>
                  <th className="brandon-Bold " scope="col">
                    &nbsp;&nbsp;&nbsp;
                  </th>
                  <th className="brandon-Bold " scope="col">
                    ALLERGENS
                  </th>
                  <th className="brandon-Bold " scope="col">
                    AVAILABLE
                  </th>
                  {/* <th className="brandon-Bold " scope="col">TOTAL ITEMS</th> */}
                  <th className="brandon-Bold " scope="col">
                    LATEST MODIFIED
                  </th>
                  <th className="brandon-Bold text-right" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="8" className="text-center">
                      <div className="spinner-border m-3" role="status"></div>
                      <div className="visually-hidden">
                        Please Wait Loading...
                      </div>
                    </td>
                  </tr>
                ) : (
                  <React.Fragment>
                    {dishes_Data && dishes_Data.dishDetails.length > 0 ? (
                      <React.Fragment>
                        {!showHide
                          ? filteredDishesh &&
                            filteredDishesh.map((data, index) => (
                              <React.Fragment key={index}>
                                <tr
                                  className={`${
                                    !data.isActive && "my_custom_bg_hide"
                                  }`}
                                >
                                  <td className="text-capitalize">
                                    {data.name}
                                  </td>
                                  <td>&nbsp;</td>
                                  <td>
                                    {data.allergensDetail &&
                                    data.allergensDetail.length > 0 ? (
                                      <React.Fragment>
                                        {data.allergensDetail &&
                                          data.allergensDetail.map(
                                            (data, index) => {
                                              return (
                                                <React.Fragment key={index}>
                                                  {(index ? " , " : "") +
                                                    data.name}
                                                </React.Fragment>
                                              );
                                            }
                                          )}
                                      </React.Fragment>
                                    ) : (
                                      "Na"
                                    )}
                                  </td>
                                  <td>{data.available ? "Yes" : "No"}</td>
                                  {/* <td>{data.menuDetail&&data.menuDetail.length}</td> */}
                                  <td>
                                    {data.updatedAt
                                      ? moment(data.updatedAt).format(
                                          " Do MMMM, YYYY"
                                        )
                                      : "-"}
                                  </td>
                                  <td className="pt-0 pb-0">
                                    <div className="">
                                      <button
                                        className="btn btn-secondary dropdown-toggle actiondropdown-btn"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Action
                                      </button>
                                      <ul
                                        className="dropdown-menu actiondropdown-list"
                                        aria-labelledby="dropdownMenuButton"
                                      >
                                        <li>
                                          <Link
                                            type="button"
                                            className="dropdown-item"
                                            to={"/manage_dishes/" + data._id}
                                          >
                                            Update
                                          </Link>
                                        </li>
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            onClick={() => {
                                              setDeleteModalShow(true);
                                              setDishesId(data._id);
                                            }}
                                          >
                                            Delete
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            onClick={() => {
                                              dispatch(
                                                duplicateSelectedDishData(
                                                  data._id,
                                                  {}
                                                )
                                              );
                                            }}
                                          >
                                            Duplicate
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            onClick={() => {
                                              dispatch(
                                                hideSelectedDishData(data._id, {
                                                  isActive: !data.isActive,
                                                })
                                              );
                                            }}
                                          >
                                            {data.isActive ? "Hide" : "UnHide"}
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              </React.Fragment>
                            ))
                          : dishes_Data &&
                            dishes_Data.dishDetails.map((data, index) => (
                              <React.Fragment key={index}>
                                <tr
                                  className={`${
                                    !data.isActive && "my_custom_bg_hide"
                                  }`}
                                >
                                  <td className="text-capitalize">
                                    {data.name}
                                  </td>
                                  <td>&nbsp;</td>
                                  <td>
                                    {data.allergensDetail &&
                                    data.allergensDetail.length > 0 ? (
                                      <React.Fragment>
                                        {data.allergensDetail &&
                                          data.allergensDetail.map(
                                            (data, index) => {
                                              return (
                                                <React.Fragment key={index}>
                                                  {(index ? " , " : "") +
                                                    data.name}
                                                </React.Fragment>
                                              );
                                            }
                                          )}
                                      </React.Fragment>
                                    ) : (
                                      "Na"
                                    )}
                                  </td>
                                  <td>{data.available ? "Yes" : "No"}</td>
                                  {/* <td>{data.menuDetail&&data.menuDetail.length}</td> */}
                                  <td>
                                    {data.updatedAt
                                      ? moment(data.updatedAt).format(
                                          " Do MMMM, YYYY"
                                        )
                                      : "-"}
                                  </td>
                                  <td className="pt-0 pb-0">
                                    <div className="">
                                      <button
                                        className="btn btn-secondary dropdown-toggle actiondropdown-btn"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Action
                                      </button>
                                      <ul
                                        className="dropdown-menu actiondropdown-list"
                                        aria-labelledby="dropdownMenuButton"
                                      >
                                        <li>
                                          <Link
                                            type="button"
                                            className="dropdown-item"
                                            to={"/manage_dishes/" + data._id}
                                          >
                                            Update
                                          </Link>
                                        </li>
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            onClick={() => {
                                              setDeleteModalShow(true);
                                              setDishesId(data._id);
                                            }}
                                          >
                                            Delete
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            onClick={() => {
                                              dispatch(
                                                duplicateSelectedDishData(
                                                  data._id,
                                                  {}
                                                )
                                              );
                                            }}
                                          >
                                            Duplicate
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            onClick={() => {
                                              dispatch(
                                                hideSelectedDishData(data._id, {
                                                  isActive: !data.isActive,
                                                })
                                              );
                                            }}
                                          >
                                            {data.isActive ? "Hide" : "UnHide"}
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              </React.Fragment>
                            ))}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <tr>
                          <td colSpan="8" className="text-center">
                            No Data Available
                          </td>
                        </tr>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </tbody>
            </table>
            <DeleteDishesModalComp
              show={deleteModalShow}
              onHide={() => setDeleteModalShow(false)}
              selectedid={dishesId}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllDishesComponent;
