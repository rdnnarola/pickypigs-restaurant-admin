import Axios from "./axios";
import { setAlert } from "./alertAction";
import { logoutUser } from "./generalActions";

export const getAllRestaurantDetail = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_RESTAURANTSETTING_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/settings`;
      let response = await Axios.get(dataURL, config);
      dispatch({
        type: "GET_RESTAURANTSETTING_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: "GET_RESTAURANTSETTING_FAILURE", payload: error });
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

export const updateRestaurantInfoDetail = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_RESTAURANTINFO_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/settings`;
      let response = await Axios.post(dataURL, JSON.stringify(data), config);
      dispatch({
        type: "UPDATE_RESTAURANTINFO_SUCCESS",
        payload: response.data,
      });
      dispatch(getAllRestaurantDetail());
      dispatch(setAlert("Restaurant Info Updated Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "UPDATE_RESTAURANTINFO_FAILURE", payload: error });
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

// update product Form
export const updateRestaurantAbout = (value) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "UPDATE_RESTAURANT_ABOUT", payload: value });
    } catch (error) {
      console.error(error);
    }
  };
};

// update product Form
export const updateRestaurantName = (value) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "UPDATE_RESTAURANT_NAME", payload: value });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateRestaurantProfileImage = (image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_RESTAURANTPROFILEIMAGE_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      const file = image;
      formData.append("image", file);

      let dataURL = `/restaurant_admin/settings/profile_image`;
      let response = await Axios.put(dataURL, formData, config);
      dispatch({
        type: "UPDATE_RESTAURANTPROFILEIMAGE_SUCCESS",
        payload: response.data,
      });
      dispatch(getAllRestaurantDetail());
      dispatch(setAlert("Profile Image Updated Successfuly", "success"));
    } catch (error) {
      dispatch({
        type: "UPDATE_RESTAURANTPROFILEIMAGE_FAILURE",
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

export const updateRestaurantCoverImage = (image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_RESTAURANTCOVERIMAGE_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      const file = image;
      formData.append("image", file);

      let dataURL = `/restaurant_admin/settings/cover_image`;
      let response = await Axios.put(dataURL, formData, config);
      dispatch({
        type: "UPDATE_RESTAURANTCOVERIMAGE_SUCCESS",
        payload: response.data,
      });
      dispatch(getAllRestaurantDetail());
      dispatch(setAlert("Profile Image Updated Successfuly", "success"));
    } catch (error) {
      dispatch({ type: "UPDATE_RESTAURANTCOVERIMAGE_FAILURE", payload: error });
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

export const uploadRestaurantGalleryImage = (image, type) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPLOAD_RESTAURANTGALLERYIMAGE_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      const files = image;
      for (let i = 0; i < files.length; i++) {
        formData.append(`image`, files[i]);
      }
      formData.append("type", type);

      let dataURL = `/restaurant_admin/settings/upload_gallery_image`;
      let response = await Axios.put(dataURL, formData, config);
      dispatch({
        type: "UPLOAD_RESTAURANTGALLERYIMAGE_SUCCESS",
        payload: response.data,
      });
      dispatch(getAllRestaurantDetail());
      dispatch(setAlert("Gallery Image Updated Successfuly", "success"));
    } catch (error) {
      dispatch({
        type: "UPLOAD_RESTAURANTGALLERYIMAGE_FAILURE",
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

export const deleteRestaurantGalleryImage = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DELETE_RESTAURANTGALLERYIMAGE_REQUEST" });
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let dataURL = `/restaurant_admin/settings/delete_gallery_image`;
      let response = await Axios.put(dataURL, JSON.stringify(data), config);
      dispatch({
        type: "DELETE_RESTAURANTGALLERYIMAGE_SUCCESS",
        payload: response.data,
      });
      dispatch(getAllRestaurantDetail());
      dispatch(setAlert("Restaurant Info Updated Successfuly", "success"));
    } catch (error) {
      dispatch({
        type: "DELETE_RESTAURANTGALLERYIMAGE_FAILURE",
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
