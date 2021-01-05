import Axios from './axios';
import axios from "axios";
import {setAlert} from './alertAction';
const token = localStorage.getItem("access_token");
if (token) axios.defaults.headers.common = { "x-access-token": token };
export const getAllCategoryData=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_ALLCATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/category/list`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_ALLCATEGORY_SUCCESS",payload:response.data});

        }
        catch(error){
          dispatch({type:"GET_ALLCATEGORY_FAILURE",payload:error});
          dispatch(setAlert('Unable To Fetch Data', 'error'));

        }
    }
  };


  export const addCategoryData=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"ADD_CATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/category`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"ADD_CATEGORY_SUCCESS",payload:response.data});
            await dispatch(setAlert('Registration is Success', 'success'));
            await dispatch(getAllCategoryData());

        }
        catch(error){
          dispatch({type:"ADD_CATEGORY_FAILURE",payload:error});
          await dispatch(setAlert('Something Went Wrong', 'danger'));
        }
    }
  };

  export const getSelectedCategoryData=(categoryId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SELECTEDCATEGORY_REQUEST"});
            
            let response = await Axios.get(`/restaurant_admin/category/${categoryId}`)
            dispatch({type:"GET_SELECTEDCATEGORY_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_SELECTEDCATEGORY_FAILURE",payload:error});
        }
    }
  };

// update product Form
export const updateCategoryForm = (key , value) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"UPDATE_CATEGORY_FORM" , payload : { key,value} });
      }
      catch(error){
          console.error(error);
      }
  }
};

  export const updateSelectedCategoryData=(categoryId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"UPDATE_CATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/category/${categoryId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"UPDATE_CATEGORY_SUCCESS",payload:response.data});
            await dispatch(getAllCategoryData());

        }
        catch(error){
          dispatch({type:"UPDATE_CATEGORY_FAILURE",payload:error});
        }
    }
  };
  
  export const deleteSelectedCategoryData=(categoryId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DELETE_CATEGORY_REQUEST"});
            let response = await Axios.delete(`/restaurant_admin/category/${categoryId}`)
            dispatch({type:"DELETE_CATEGORY_SUCCESS",payload:response.data});
            await dispatch(setAlert('Data Deleted Successfuly', 'success'));
            await dispatch(getAllCategoryData());
        }
        catch(error){
            dispatch({type:"DELETE_CATEGORY_FAILURE",payload:error});
        }
    }
  }

  export const getCategoryListOfSelectedMenu=(menuId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_MENUCATEGORYLIST_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/category/menu_categories`
            let response = await Axios.post(dataURL,JSON.stringify(menuId),config );
            dispatch({type:"GET_MENUCATEGORYLIST_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_MENUCATEGORYLIST_FAILURE",payload:error});
        }
    }
  };