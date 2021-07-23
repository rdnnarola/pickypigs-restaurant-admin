// import axios from 'axios';
// import { API_KEY,GOOGLE_MAP_API_URL} from '../../shared/constant';
import { setAlert } from "./alertAction";

export const getLocationGeometryData = (position, coordinate, addressName) => {
  // console.log("Data: ", position);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_LOCATIONDATA_REQUEST" });

      dispatch({ type: "GET_LOCATIONDATA_SUCCESS", payload: position });

      dispatch(getGoogleAddressData(addressName));
      dispatch(getCoordinateData(coordinate));
      let pincode = position.filter(
        (myallergy) => myallergy.types.indexOf("postal_code") !== -1
      );
      dispatch(getPostalCodeData(pincode[0] ? pincode[0].long_name : ""));
      let street = position.filter(
        (mystreet) => mystreet.types.indexOf("route") !== -1
      );
      dispatch(getStreetNameData(street[0] ? street[0].long_name : ""));
      let location = position.filter(
        (mystreet) => mystreet.types.indexOf("locality") !== -1
      );
      dispatch(getLocatityData(location[0] ? location[0].long_name : ""));
    } catch (error) {
      dispatch({ type: "GET_LOCATIONDATA_FAILURE", payload: error });
      console.log("sssss", error);
      if (error) {
        dispatch(setAlert(`${error}`, "error"));
      } else {
        dispatch(setAlert("Something Went wrong!", "error"));
      }
    }
  };
};

// export const getLocationFromPlaceId = (placeId) =>  {
//   // console.log("placeId: ", placeId);
//   return async(dispatch)=>{
//     try{
//       dispatch({type:"GET_GEOMETRYDATA_REQUEST"});

//       let config= {
//         headers:{
//         "Content-Type":"application/json",
//         }
//       }

//       let instance2 = axios.create()
//       delete instance2.defaults.headers.common['x-access-token'];

//       let dataURL=`https://nameless-eyrie-30558.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${API_KEY}`
//       let response =await instance2.get(dataURL,config);
//       dispatch({ type: "GET_GEOMETRYDATA_SUCCESS", payload:response.data,  });
//       dispatch(getLocationGeometryData(`${response.data&&response.data.result.geometry&&response.data.result.geometry.location.lat},${response.data&&response.data.result.geometry&&response.data.result.geometry.location.lng}`))

//       }
//       catch(error){
//         dispatch({type:"GET_GEOMETRYDATA_FAILURE",payload:error});
//         if (error) {
//           dispatch(setAlert(`${error}`, 'error'));
//         } else {
//           dispatch(setAlert('Something Went wrong!', 'error'));
//         }
//     }
//   }
// };

export const getCoordinateData = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "GET_COORDINATE_DATA", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPostalCodeData = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "GET_POSTALCODE_DATA", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getStreetNameData = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "GET_STREETNAME_DATA", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getLocatityData = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "GET_LOCALITY_DATA", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getGoogleAddressData = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "GET_GOOGLElOCATION_DATA", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
