import Axios from './axios';
import {setAlert} from './alertAction';
import { logoutUser } from './generalActions';


export const showAddUpdateCategoryModal = (value) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"SHOW_ADDUPDATECATEGORY_MODAL" , payload :value });
    }
    catch(error){
        console.error(error);
    }
  }
};

export const showDeleteCategoryModal = (value) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"SHOW_DELETECATEGORY_MODAL" , payload :value });
    }
    catch(error){
        console.error(error);
    }
  }
};

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
         if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
            if(error.response&&error.response.status==401){
              dispatch(logoutUser())
            }
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }

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
            dispatch(showAddUpdateCategoryModal(false))
            dispatch(getAllCategoryData());
            dispatch(setAlert('Category Added Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"ADD_CATEGORY_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
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
            dispatch(showAddUpdateCategoryModal(false))
            dispatch(getAllCategoryData());
            dispatch(setAlert('Category Updated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"UPDATE_CATEGORY_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
        }
    }
  };
  
  export const deleteSelectedCategoryData=(categoryId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DELETE_CATEGORY_REQUEST"});
            let response = await Axios.delete(`/restaurant_admin/category/${categoryId}`)
            dispatch({type:"DELETE_CATEGORY_SUCCESS",payload:response.data});
            dispatch(setAlert('Category Deleted Successfuly', 'warning'));
            dispatch(showDeleteCategoryModal(false))
            dispatch(getAllCategoryData());
        }
        catch(error){
            dispatch({type:"DELETE_CATEGORY_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
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



  export const hideSelectedCategoryData=(categoryId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"HIDE_CATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/category/active_inactive/${categoryId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"HIDE_CATEGORY_SUCCESS",payload:response.data});
            dispatch(getAllCategoryData());
            dispatch(setAlert(`Category ${data.isActive?"UnHide":"Hide"} Successfuly`, 'success'));


        }
        catch(error){
          dispatch({type:"HIDE_CATEGORY_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
        }
    }
  };


  export const duplicateSelectedCategoryData=(categoryId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DUPLICATE_CATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/category/duplicate/${categoryId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"DUPLICATE_CATEGORY_SUCCESS",payload:response.data});
            dispatch(getAllCategoryData());
            dispatch(setAlert('Category Duplicated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"DUPLICATE_CATEGORY_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
        }
    }
  };