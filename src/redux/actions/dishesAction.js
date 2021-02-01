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


  export const addDishesData=(data,history)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"ADD_DISHES_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/dish`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"ADD_DISHES_SUCCESS",payload:response.data});
            await dispatch(setAlert('Dishes Added Successfuly', 'success'));
            history.push('/all_dishes');
            await dispatch(getAllDishesData());


        }
        catch(error){
          dispatch({type:"ADD_DISHES_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };



  export const deleteSelectedDishesData=(selectedId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DELETE_DISHES_REQUEST"});
            let response = await Axios.delete(`/restaurant_admin/dish/${selectedId}`)
            dispatch({type:"DELETE_DISHES_SUCCESS",payload:response.data});
            await dispatch(setAlert('Dishes Deleted Successfuly', 'warning'));
            await dispatch(getAllDishesData());
        }
        catch(error){
            dispatch({type:"DELETE_DISHES_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something went wrong!', 'error'));
            }
        }
    }
  }