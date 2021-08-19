import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateSelectedDishAvailablity } from "../../redux/actions/dishesAction";
import {
  getSelectedMenuDishData,
  showAddUpdateMenuModal,
} from "../../redux/actions/menuAction";
import AddEditMenuModalComp from "../AddEditMenuModalComp/AddEditMenuModalComp";
import CustomLoadingComp from "../CustomLoadingComp/CustomLoadingComp";
import "./BreakfastMenuComponent.scss";

const BreakfastMenuComponent = () => {
  const params = useParams();
  const MenuInfoId = params.menuId;
  const dispatch = useDispatch();

  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    dispatch(getSelectedMenuDishData(MenuInfoId));
    // eslint-disable-next-line
  }, [MenuInfoId]);

  let selectedMenuDiscInfo_data = useSelector((state) => {
    return state.menu.selectedMenuDishData;
  });

  let myLoading = useSelector((state) => {
    return state.menu.isLoading;
  });
  let availablityLoading = useSelector((state) => {
    return state.dishes.updateDishAvailablityLoading;
  });

  const addMenuModalShow = useSelector(
    (state) => state.menu.showAddUpdateMenuModalData
  );

  return (
    <>
      {/* {JSON.stringify(selectedMenuDiscInfo_data)} */}
      {myLoading && myLoading ? <CustomLoadingComp /> : null}
      {availablityLoading && availablityLoading ? <CustomLoadingComp /> : null}
      <div className="row">
        <div className="col-sm-12">
          <div className="page-heading brandon-Medium">
            <h4 className="text-capitalize">
              {selectedMenuDiscInfo_data && selectedMenuDiscInfo_data.name}
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-4 mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="custom-control custom-checkbox pink-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck199"
                defaultChecked={showDesc}
                onClick={(e) => {
                  setShowDesc(e.target.checked);
                }}
              />
              <label className="custom-control-label" htmlFor="customCheck199">
                Show description
              </label>
            </div>
            <button
              onClick={() => {
                dispatch(showAddUpdateMenuModal(true));
              }}
              className="btn pinkline-btn text-uppercase rounded-pill f-15"
            >
              <span className="edit-icon">EDIT MENU</span>
            </button>
          </div>
        </div>
        <AddEditMenuModalComp
          show={addMenuModalShow}
          onHide={() => dispatch(showAddUpdateMenuModal(false))}
          menuid={MenuInfoId ? MenuInfoId : ""}
          showDeleted={false}
        />
      </div>
      {selectedMenuDiscInfo_data &&
      selectedMenuDiscInfo_data.categories &&
      selectedMenuDiscInfo_data.categories.length > 0 ? (
        <React.Fragment>
          {selectedMenuDiscInfo_data &&
            selectedMenuDiscInfo_data.categories &&
            selectedMenuDiscInfo_data.categories.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="table-responsive my_custom_table table-accordion mb-4">
                        <table className="table table-striped table-main">
                          <thead>
                            <tr>
                              <th
                                className="brandon-Bold text-uppercase"
                                scope="col"
                              >
                                {data.name ? data.name : "unknown"}
                              </th>
                              <th
                                className="brandon-Bold text-center"
                                scope="col"
                              >
                                ALLERGIES
                              </th>
                              <th
                                className="brandon-Bold text-right"
                                scope="col"
                              >
                                GROSS PROFIT(%)
                              </th>
                              <th
                                className="brandon-Bold text-right"
                                scope="col"
                              >
                                SALE PRICE ($)
                              </th>
                              <th
                                className="brandon-Bold text-center"
                                scope="col"
                              >
                                AVAILABLE
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data &&
                            data.subcategories &&
                            data.subcategories.length > 0 ? (
                              <React.Fragment>
                                <React.Fragment>
                                  {data &&
                                    data.subcategories &&
                                    data.subcategories
                                      .filter((mydata) => mydata._id == null)
                                      .map((data2, index2) => {
                                        return (
                                          <React.Fragment key={index2}>
                                            {data2 &&
                                            data2.dishes &&
                                            data2.dishes.length > 0 ? (
                                              <React.Fragment>
                                                {data2 &&
                                                  data2.dishes &&
                                                  data2.dishes.map(
                                                    (data3, index3) => {
                                                      return (
                                                        <React.Fragment
                                                          key={index3}
                                                        >
                                                          <tr>
                                                            <td className="text-capitalize">
                                                              {data3.name
                                                                ? data3.name
                                                                : ""}
                                                              {showDesc && (
                                                                <p className="dish-description gray-txt">
                                                                  {data3.description
                                                                    ? data3.description
                                                                    : "Dish Description Not Available"}
                                                                </p>
                                                              )}
                                                            </td>
                                                            <td className="text-center">
                                                              {data3 &&
                                                              data3.allergenList &&
                                                              data3.allergenList
                                                                .length > 0
                                                                ? data3 &&
                                                                  data3.allergenList &&
                                                                  data3.allergenList.map(
                                                                    (
                                                                      allergy,
                                                                      index
                                                                    ) => {
                                                                      return (
                                                                        <React.Fragment
                                                                          key={
                                                                            index
                                                                          }
                                                                        >
                                                                          {index >
                                                                            0 &&
                                                                            " , "}
                                                                          {
                                                                            allergy.name
                                                                          }
                                                                        </React.Fragment>
                                                                      );
                                                                    }
                                                                  )
                                                                : "-"}
                                                            </td>
                                                            <td className="text-right">
                                                              {data3.grossProfit
                                                                ? `${data3.grossProfit}%`
                                                                : "-"}
                                                            </td>
                                                            <td className="text-right">
                                                              {data3.priceUnit
                                                                ? data3.priceUnit
                                                                : "$"}
                                                              {data3.price
                                                                ? data3.price.toFixed(
                                                                    2
                                                                  )
                                                                : "-"}
                                                            </td>
                                                            <td className="text-center">
                                                              <div className="custom-control custom-checkbox pink-checkbox">
                                                                <input
                                                                  type="checkbox"
                                                                  className="custom-control-input"
                                                                  id={data3._id}
                                                                  onClick={(
                                                                    e
                                                                  ) => {
                                                                    dispatch(
                                                                      updateSelectedDishAvailablity(
                                                                        data3._id,
                                                                        {
                                                                          available:
                                                                            e
                                                                              .target
                                                                              .checked,
                                                                        }
                                                                      )
                                                                    );
                                                                  }}
                                                                  defaultChecked={
                                                                    data3.available
                                                                  }
                                                                />
                                                                <label
                                                                  className="custom-control-label"
                                                                  htmlFor={
                                                                    data3._id
                                                                  }
                                                                ></label>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          {/* {showDesc?
                                                                                                    <tr>
                                                                                                        <td colSpan="5" className=" pt-0 pb-0">{data3.description?data3.description:"Dish Description Not Available"}</td>
                                                                                                    </tr>
                                                                                                :
                                                                                                    null
                                                                                                } */}
                                                        </React.Fragment>
                                                      );
                                                    }
                                                  )}
                                              </React.Fragment>
                                            ) : null}
                                          </React.Fragment>
                                        );
                                      })}
                                </React.Fragment>
                                <React.Fragment>
                                  {data &&
                                    data.subcategories &&
                                    data.subcategories
                                      .filter((mydata) => mydata._id !== null)
                                      .map((data2, index2) => {
                                        return (
                                          <React.Fragment key={index2}>
                                            {data2 &&
                                            data2.dishes &&
                                            data2.dishes.length > 0 ? (
                                              <React.Fragment>
                                                <tr className="table-accordion-open bg-white">
                                                  <td
                                                    colSpan="5"
                                                    className="border-top-0"
                                                  >
                                                    <div className="sub-category-data">
                                                      <table className="w-100 table table-striped table-main">
                                                        <thead>
                                                          <tr
                                                            className="accordion-toggle collapsed mt-2 ml-5 "
                                                            id={`accordion${
                                                              index2 + 1
                                                            }`}
                                                            data-toggle="collapse"
                                                            data-parent={`#accordion${
                                                              index2 + 1
                                                            }`}
                                                            href={`#collapse${
                                                              index2 + 1
                                                            }`}
                                                          >
                                                            <th
                                                              scope="col"
                                                              className="font-weight-bold text-uppercase"
                                                            >
                                                              {data2.name
                                                                ? data2.name
                                                                : "Unknown"}
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="text-center"
                                                            ></th>
                                                            <th
                                                              scope="col"
                                                              className="text-right"
                                                            ></th>
                                                            <th
                                                              scope="col"
                                                              className="text-right"
                                                            ></th>
                                                            <th
                                                              scope="col"
                                                              className="text-center expand-button"
                                                            ></th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          {data2 &&
                                                            data2.dishes &&
                                                            data2.dishes.map(
                                                              (
                                                                data3,
                                                                index3
                                                              ) => {
                                                                return (
                                                                  <React.Fragment
                                                                    key={index3}
                                                                  >
                                                                    <tr
                                                                      id={`collapse${
                                                                        index2 +
                                                                        1
                                                                      }`}
                                                                      className="collapse in p-3 hide-table-padding"
                                                                    >
                                                                      <td className="text-capitalize">
                                                                        {data3.name
                                                                          ? data3.name
                                                                          : ""}
                                                                        {showDesc && (
                                                                          <p className="dish-description gray-txt">
                                                                            {data3.description
                                                                              ? data3.description
                                                                              : "Dish Description Not Available"}
                                                                          </p>
                                                                        )}
                                                                      </td>
                                                                      <td className="text-center">
                                                                        {data3 &&
                                                                        data3.allergenList &&
                                                                        data3
                                                                          .allergenList
                                                                          .length >
                                                                          0
                                                                          ? data3 &&
                                                                            data3.allergenList &&
                                                                            data3.allergenList.map(
                                                                              (
                                                                                allergy,
                                                                                index
                                                                              ) => {
                                                                                return (
                                                                                  <React.Fragment
                                                                                    key={
                                                                                      index
                                                                                    }
                                                                                  >
                                                                                    {index >
                                                                                      0 &&
                                                                                      " , "}
                                                                                    {
                                                                                      allergy.name
                                                                                    }
                                                                                  </React.Fragment>
                                                                                );
                                                                              }
                                                                            )
                                                                          : "-"}
                                                                      </td>
                                                                      <td className="text-right">
                                                                        {data3.grossProfit
                                                                          ? `${data3.grossProfit}%`
                                                                          : "-"}
                                                                      </td>
                                                                      <td className="text-right">
                                                                        {data3.priceUnit
                                                                          ? data3.priceUnit
                                                                          : "$"}
                                                                        {data3.price
                                                                          ? data3.price.toFixed(
                                                                              2
                                                                            )
                                                                          : "-"}
                                                                      </td>
                                                                      <td className="text-center">
                                                                        <div className="custom-control custom-checkbox pink-checkbox ml-5 pl-5">
                                                                          <input
                                                                            type="checkbox"
                                                                            className="custom-control-input"
                                                                            id={
                                                                              data3._id
                                                                            }
                                                                            onClick={(
                                                                              e
                                                                            ) => {
                                                                              dispatch(
                                                                                updateSelectedDishAvailablity(
                                                                                  data3._id,
                                                                                  {
                                                                                    available:
                                                                                      e
                                                                                        .target
                                                                                        .checked,
                                                                                  }
                                                                                )
                                                                              );
                                                                            }}
                                                                            defaultChecked={
                                                                              data3.available
                                                                            }
                                                                          />
                                                                          <label
                                                                            className="custom-control-label"
                                                                            htmlFor={
                                                                              data3._id
                                                                            }
                                                                          ></label>
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    {/* {showDesc?
                                                                                                                        <tr id={`collapse${index2+1}`} className="collapse in p-3 hide-table-padding">
                                                                                                                            <td colSpan="5" className="">{data3.description?data3.description:"Dish Description Not Available"}</td>
                                                                                                                        </tr>
                                                                                                                    :
                                                                                                                    <tr id={`collapse${index2+1}`} className="collapse in p-3 hide-table-padding">
                                                                                                                </tr>
                                                                                                                    } */}
                                                                  </React.Fragment>
                                                                );
                                                              }
                                                            )}
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </React.Fragment>
                                            ) : null}
                                          </React.Fragment>
                                        );
                                      })}
                                </React.Fragment>
                              </React.Fragment>
                            ) : (
                              <p>No Dish data Available</p>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="row">
            <div
              className="col-sm-12"
              style={{
                borderRadius: 20,
                boxShadow: "0px 1px 20px 0px #00000018",
              }}
            >
              <p className="text-center p-5 mb-0 m-5">No Data Available</p>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default BreakfastMenuComponent;
