import Axios from "./axios";
import { setAlert } from "./alertAction";
import { logoutUser } from "./generalActions";

export const showAddUpdateMenuModal = (value) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "SHOW_ADDUPDATEMENU_MODAL", payload: value });
    } catch (error) {
      console.error(error);
    }
  };
};

export const showDeleteMenuModal = (value) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "SHOW_DELETEMENU_MODAL", payload: value });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAllMenuData = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALLMENU_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/menus/list`;
      let response = await Axios.post(
        dataURL,
        JSON.stringify({ ...data, type: "menu" }),
        config
      );
      dispatch({ type: "GET_ALLMENU_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ALLMENU_FAILURE", payload: error });
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

export const addMenuData = (data, showDeleted) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_MENU_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/menus`;
      let response = await Axios.post(dataURL, JSON.stringify(data), config);
      dispatch({ type: "ADD_MENU_SUCCESS", payload: response.data });
      dispatch(showAddUpdateMenuModal(false));
      if (showDeleted) {
        dispatch(getAllMenuData());
      } else {
        dispatch(getAllMenuData({ delete: 0 }));
      }
      dispatch(setAlert("Menu Added Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "ADD_MENU_FAILURE", payload: error });
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

export const getSelectedMenuData = (menuId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SELECTEDMENU_REQUEST" });

      let response = await Axios.get(`/restaurant_admin/menus/${menuId}`);
      dispatch({ type: "GET_SELECTEDMENU_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_SELECTEDMENU_FAILURE", payload: error });
      if (error.response && error.response.status === 401) {
        dispatch(logoutUser());
      }
    }
  };
};

// update product Form
export const updateMenuForm = (key, value) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "UPDATE_MENU_FORM", payload: { key, value } });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateSelectedMenuData = (menuId, data, showDeleted) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_MENU_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/menus/${menuId}`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({ type: "UPDATE_MENU_SUCCESS", payload: response.data });
      dispatch(showAddUpdateMenuModal(false));
      if (showDeleted) {
        dispatch(getAllMenuData());
      } else {
        dispatch(getAllMenuData({ delete: 0 }));
      }
      dispatch(setAlert("Menu Updated Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "UPDATE_MENU_FAILURE", payload: error });
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

export const deleteSelectedMenuData = (selectedId, showDeleted) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DELETE_MENU_REQUEST" });
      let response = await Axios.delete(
        `/restaurant_admin/menus/${selectedId}`
      );
      dispatch({ type: "DELETE_MENU_SUCCESS", payload: response.data });
      dispatch(showDeleteMenuModal(false));
      if (showDeleted) {
        dispatch(getAllMenuData());
      } else {
        dispatch(getAllMenuData({ delete: 0 }));
      }
      dispatch(setAlert("Menu Deleted Successfuly", "warning"));
    } catch (error) {
      dispatch({ type: "DELETE_MENU_FAILURE", payload: error });
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

export const hideSelectedMenuData = (selectedId, data, showDeleted) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "HIDE_MENU_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/menus/active_inactive/${selectedId}`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({ type: "HIDE_MENU_SUCCESS", payload: response.data });
      if (showDeleted) {
        dispatch(getAllMenuData());
      } else {
        dispatch(getAllMenuData({ delete: 0 }));
      }
      dispatch(
        setAlert(
          `Menu ${data.isActive ? "UnHide" : "Hide"} Successfuly`,
          "success"
        )
      );
    } catch (error) {
      dispatch({ type: "HIDE_MENU_FAILURE", payload: error });
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

export const duplicateSelectedMenuData = (selectedId, data, showDeleted) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DUPLICATE_MENU_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/menus/duplicate/${selectedId}`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({ type: "DUPLICATE_MENU_SUCCESS", payload: response.data });
      if (showDeleted) {
        dispatch(getAllMenuData());
      } else {
        dispatch(getAllMenuData({ delete: 0 }));
      }
      dispatch(setAlert("Menu Duplicated Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "DUPLICATE_MENU_FAILURE", payload: error });
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

export const redoSelectedMenuData = (selectedId, showDeleted) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "REDO_MENU_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/menus/redo/${selectedId}`;
      let response = await Axios.put(dataURL, config);
      dispatch({ type: "REDO_MENU_SUCCESS", payload: response.data });
      if (showDeleted) {
        dispatch(getAllMenuData());
      } else {
        dispatch(getAllMenuData({ delete: 0 }));
      }
      dispatch(setAlert("Menu Restored Successfuly", "warning"));
    } catch (error) {
      dispatch({ type: "REDO_MENU_FAILURE", payload: error });
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

export const getSelectedMenuDishData = (menuId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SELECTEDMENUDISH_REQUEST" });

      let response = await Axios.get(
        `/restaurant_admin/menus/menu_detail/${menuId}`
      );
      dispatch({
        type: "GET_SELECTEDMENUDISH_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: "GET_SELECTEDMENUDISH_FAILURE", payload: error });
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
