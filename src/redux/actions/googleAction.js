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