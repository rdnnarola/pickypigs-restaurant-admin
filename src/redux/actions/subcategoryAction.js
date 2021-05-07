import Axios from './axios';
import {setAlert} from './alertAction';
import { logoutUser } from './generalActions';



export const setSubcategoryModal = (value) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"SET_SUBCATEGORY_MODAL" , payload :value });
    }
    catch(error){
        console.error(error);
    }
  }
};

export const deleteSubcategoryModal = (value) => {
    
  return async(dispatch)=>{
    try{
        await dispatch({type :"DELETE_SUBCATEGORY_MODAL" , payload :value });
    }
    catch(error){
        console.error(error);
    }
  }
};


export const getAllSubCategoryData=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_ALLSUBCATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/subcategory/list`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_ALLSUBCATEGORY_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_ALLSUBCATEGORY_FAILURE",payload:error});
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


  export const addSubCategoryData=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"ADD_SUBCATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/subcategory`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"ADD_SUBCATEGORY_SUCCESS",payload:response.data});
            dispatch(setSubcategoryModal(false))
            dispatch(getAllSubCategoryData());
            dispatch(setAlert('Sub-Category Added Successfuly', 'success'));


        }
        catch(error){
          dispatch({type:"ADD_SUBCATEGORY_FAILURE",payload:error});
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

  export const getSelectedSubCategoryData=(subCategoryId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SELECTEDSUBCATEGORY_REQUEST"});
            
            let response = await Axios.get(`/restaurant_admin/subcategory/${subCategoryId}`)
            dispatch({type:"GET_SELECTEDSUBCATEGORY_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_SELECTEDSUBCATEGORY_FAILURE",payload:error});
        }
    }
  };

// update product Form
export const updateSubCategoryForm = (key , value) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"UPDATE_SUBCATEGORY_FORM" , payload : { key,value} });
      }
      catch(error){
          console.error(error);
      }
  }
};

  export const updateSelectedSubCategoryData=(subCategoryId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"UPDATE_SUBCATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/subcategory/${subCategoryId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"UPDATE_SUBCATEGORY_SUCCESS",payload:response.data});
            dispatch(setSubcategoryModal(false))
            dispatch(getAllSubCategoryData());
            dispatch(setAlert('Sub-Category Updated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"UPDATE_SUBCATEGORY_FAILURE",payload:error});
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
  
  export const deleteSelectedSubCategoryData=(subCategoryId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DELETE_SUBCATEGORY_REQUEST"});
            let response = await Axios.delete(`/restaurant_admin/subcategory/${subCategoryId}`)
            dispatch({type:"DELETE_SUBCATEGORY_SUCCESS",payload:response.data});
            dispatch(deleteSubcategoryModal(false))
            dispatch(getAllSubCategoryData());
            dispatch(setAlert('Sub-Category Deleted Successfuly', 'warning'));

        }
        catch(error){
            dispatch({type:"DELETE_SUBCATEGORY_FAILURE",payload:error});
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
  }

  export const getSubCategoryListOfSelectedCategory=(selectedId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SELECTEDSUBCATEGORYLIST_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/subcategory/categoryOfSubcategory/${selectedId}`
            let response = await Axios.get(dataURL,config );
            dispatch({type:"GET_SELECTEDSUBCATEGORYLIST_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_SELECTEDSUBCATEGORYLIST_FAILURE",payload:error});
          if(error.response&&error.response.status==401){
            dispatch(logoutUser())
          }
        }
    }
  };



  export const hideSelectedSubCategoryData=(selectedId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"HIDE_SUBCATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/subcategory/active_inactive/${selectedId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"HIDE_SUBCATEGORY_SUCCESS",payload:response.data});
            dispatch(getAllSubCategoryData());
            dispatch(setAlert(`Category ${data.isActive?"UnHide":"Hide"} Successfuly`, 'success'));


        }
        catch(error){
          dispatch({type:"HIDE_SUBCATEGORY_FAILURE",payload:error});
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


  export const duplicateSelectedSubCategoryData=(selectedId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DUPLICATE_SUBCATEGORY_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/subcategory/duplicate/${selectedId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"DUPLICATE_SUBCATEGORY_SUCCESS",payload:response.data});
            dispatch(getAllSubCategoryData());
            dispatch(setAlert('Category Duplicated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"DUPLICATE_SUBCATEGORY_FAILURE",payload:error});
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