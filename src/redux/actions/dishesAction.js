import Axios from "./axios";
import { setAlert } from "./alertAction";
import { logoutUser } from "./generalActions";

export const getAllDishesData = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALLDISHES_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/dish/list`;
      let response = await Axios.post(dataURL, JSON.stringify(data), config);
      dispatch({ type: "GET_ALLDISHES_SUCCESS", payload: response.data });
      // dispatch(setAlert('Success', 'success'));
    } catch (error) {
      dispatch({ type: "GET_ALLDISHES_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

export const getAllDisheshData = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALLDISH_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/dish/list`;
      let response = await Axios.post(
        dataURL,
        JSON.stringify({ ...data }),
        config
      );
      dispatch({ type: "GET_ALLDISH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ALLDISH_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

export const addDishesData = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_DISHES_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = new FormData();
      const file = data.image;
      formData.append("image", file);
      formData.append("name", data.name);
      formData.append("makes", data.makes);
      formData.append("price", data.price);
      formData.append("grossProfit", data.grossProfit);
      formData.append("favorite", data.favorite);
      formData.append("new", data.new);
      formData.append("available", data.available);
      formData.append("menuId", JSON.stringify(data.menuId));
      formData.append("categoryId", data.categoryId);
      formData.append("restaurantId", data.restaurantId);
      formData.append("subcategoryId", data.subcategoryId);
      formData.append("description", data.description);
      formData.append("allergenId", JSON.stringify(data.allergenId));
      formData.append("dietaryId", JSON.stringify(data.dietaryId));
      formData.append("lifestyleId", JSON.stringify(data.lifestyleId));
      formData.append("cookingMethodId", JSON.stringify(data.cookingMethodId));
      formData.append("instructions", data.instructions);
      formData.append("customisable", data.customisable);
      formData.append(
        "createNewVersion",
        JSON.stringify(data.createNewVersion)
      );
      formData.append(
        "ingredientSection",
        JSON.stringify(data.ingredientSection)
      );
      formData.append(
        "caloriesAndMacros",
        JSON.stringify(data.caloriesAndMacros)
      );

      let dataURL = `/restaurant_admin/dish`;
      let response = await Axios.post(dataURL, formData, config);
      dispatch({ type: "ADD_DISHES_SUCCESS", payload: response.data });
      history.push("/all_dishes");
      dispatch(getAllDishesData());
      dispatch(setAlert("Dishes Added Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "ADD_DISHES_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

export const getSelectedDiscData = (selectedId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SELECTEDDISC_REQUEST" });

      let response = await Axios.get(`/restaurant_admin/dish/${selectedId}`);
      dispatch({ type: "GET_SELECTEDDISC_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_SELECTEDDISC_FAILURE", payload: error });
      if (error.response && error.response.status === 401) {
        dispatch(logoutUser());
      }
    }
  };
};

export const deleteSelectedDishesData = (selectedId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DELETE_DISHES_REQUEST" });
      let response = await Axios.delete(`/restaurant_admin/dish/${selectedId}`);
      dispatch({ type: "DELETE_DISHES_SUCCESS", payload: response.data });
      dispatch(setAlert("Dishes Deleted Successfuly", "warning"));
      dispatch(getAllDishesData());
    } catch (error) {
      dispatch({ type: "DELETE_DISHES_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something went wrong!", "error"));
      }
    }
  };
};

export const updateSelectedDiscData = (selectedId, data, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_DISC_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = new FormData();
      const file = data.image;
      if (typeof data.image !== "string" || !data.image instanceof String) {
        formData.append("image", file);
      }
      //  formData.append("image", file);
      formData.append("name", data.name);
      formData.append("makes", data.makes);
      formData.append("price", data.price);
      formData.append("grossProfit", data.grossProfit);
      formData.append("favorite", data.favorite);
      formData.append("new", data.new);
      formData.append("available", data.available);
      formData.append("menuId", JSON.stringify(data.menuId));
      formData.append("categoryId", data.categoryId);
      formData.append("restaurantId", data.restaurantId);
      formData.append("subcategoryId", data.subcategoryId);
      formData.append("description", data.description);
      formData.append("allergenId", JSON.stringify(data.allergenId));
      formData.append("dietaryId", JSON.stringify(data.dietaryId));
      formData.append("lifestyleId", JSON.stringify(data.lifestyleId));
      formData.append("cookingMethodId", JSON.stringify(data.cookingMethodId));
      formData.append("instructions", data.instructions);
      formData.append("customisable", data.customisable);
      formData.append(
        "createNewVersion",
        JSON.stringify(data.createNewVersion)
      );
      formData.append(
        "ingredientSection",
        JSON.stringify(data.ingredientSection)
      );
      formData.append(
        "caloriesAndMacros",
        JSON.stringify(data.caloriesAndMacros)
      );

      let dataURL = `/restaurant_admin/dish/${selectedId}`;
      let response = await Axios.put(dataURL, formData, config);
      dispatch({ type: "UPDATE_DISC_SUCCESS", payload: response.data });
      history.push("/all_dishes");
      dispatch(getAllDishesData());
      dispatch(setAlert("Disc Updated Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "UPDATE_DISC_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

export const updateSelectedDishAvailablity = (dishId, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_SELECTEDDISHAVAILABLITY_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/dish/dish_availablity/${dishId}`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({
        type: "UPDATE_SELECTEDDISHAVAILABLITY_SUCCESS",
        payload: response.data,
      });
      dispatch(setAlert("Dish Availablity Updated Successfuly", "success"));
    } catch (error) {
      dispatch({
        type: "UPDATE_SELECTEDDISHAVAILABLITY_FAILURE",
        payload: error,
      });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

export const hideSelectedDishData = (selectedId, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "HIDE_DISH_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/dish/active_inactive/${selectedId}`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({ type: "HIDE_DISH_SUCCESS", payload: response.data });
      dispatch(getAllDishesData());
      dispatch(
        setAlert(
          `Dish ${data.isActive ? "UnHide" : "Hide"} Successfuly`,
          "success"
        )
      );
    } catch (error) {
      dispatch({ type: "HIDE_DISH_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

export const duplicateSelectedDishData = (selectedId, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DUPLICATE_DISH_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/dish/duplicate/${selectedId}`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({ type: "DUPLICATE_DISH_SUCCESS", payload: response.data });
      dispatch(getAllDishesData());
      dispatch(setAlert("Dish Duplicated Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "DUPLICATE_DISH_FAILURE", payload: error });
      if (error.response) {
        dispatch(setAlert(`${error.response.data.message}`, "error"));
        if (error.response && error.response.status === 401) {
          dispatch(logoutUser());
        }
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};
