import axios from 'axios';
import { API_KEY,GOOGLE_MAP_API_URL,EDAMAM_APP_ID,EDAMAM_APP_KEY} from '../../shared/constant';
import {setAlert} from './alertAction';


export const getLocationGeometryData = (position) =>  {
    console.log("Data: ", position);
    return async(dispatch)=>{
      try{
          dispatch({type:"GET_LOCATIONDATA_REQUEST"});
          let config= {
              headers:{
              "Content-Type":"application/json"
              }
          }
          let dataURL=`${GOOGLE_MAP_API_URL}?latlng=${position}&key=${API_KEY}`
          let response = await axios.get(dataURL,config );
          dispatch({type:"GET_LOCATIONDATA_SUCCESS",payload:response.data});
          dispatch(getCoordinateData(position))
          let pincode=response.data&&response.data.results[0].address_components&&response.data.results[0].address_components.filter(myallergy => myallergy.types.indexOf("postal_code") !== -1)
          dispatch(getPostalCodeData(pincode[0].long_name))
          let street=response.data&&response.data.results[0].address_components&&response.data.results[0].address_components.filter(mystreet => mystreet.types.indexOf("route") !== -1)
          dispatch(getStreetNameData(street[0].long_name))
          let location=response.data&&response.data.results[0].address_components&&response.data.results[0].address_components.filter(mystreet => mystreet.types.indexOf("locality") !== -1)
          dispatch(getLocatityData(location[0].long_name))

        }
      catch(error){
          dispatch({type:"GET_LOCATIONDATA_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
      }
    }
  };



  export const getLocationFromPlaceId = (placeId) =>  {
    // console.log("Data: ", latitude,longitude,userSearchText);
    return async(dispatch)=>{
      try{
        
      let dataURL=`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${API_KEY}`
      let response = await axios.get(dataURL );
      dispatch({ type: "GET_GEOMETRY_DATA", payload:response.data,  });
      dispatch(getCoordinateData(`${response.data&&response.data.result.geometry.location.lat},${response.data&&response.data.result.geometry.location.lng}`))

        }
    catch(error){
      console.log(error);
        }
    }
  };



  export const getCoordinateData = (data) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"GET_COORDINATE_DATA" , payload : data });
      }
      catch(error){
          console.error(error);
      }
  }
};

export const getPostalCodeData = (data) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"GET_POSTALCODE_DATA" , payload : data });
    }
    catch(error){
        console.error(error);
    }
  }
};

export const getStreetNameData = (data) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"GET_STREETNAME_DATA" , payload : data });
    }
    catch(error){
        console.error(error);
    }
  }
};

export const getLocatityData = (data) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"GET_LOCALITY_DATA" , payload : data });
    }
    catch(error){
        console.error(error);
    }
  }
};