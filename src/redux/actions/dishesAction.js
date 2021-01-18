import Axios from './axios';
import {setAlert} from './alertAction';

export const getAllDishesData=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_ALLDISHES_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/dish/list`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_ALLDISHES_SUCCESS",payload:response.data});
            // await dispatch(setAlert('Success', 'success'));


        }
        catch(error){
          dispatch({type:"GET_ALLDISHES_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }

        }
    }
  };