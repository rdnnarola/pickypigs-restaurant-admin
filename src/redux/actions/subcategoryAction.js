import Axios from './axios';
import {setAlert} from './alertAction';


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
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
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
            await dispatch(getAllSubCategoryData());
            await dispatch(setAlert('Sub-Category Added Successfuly', 'success'));


        }
        catch(error){
          dispatch({type:"ADD_SUBCATEGORY_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
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
            await dispatch(getAllSubCategoryData());
            await dispatch(setAlert('Sub-Category Updated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"UPDATE_SUBCATEGORY_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
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
            await dispatch(getAllSubCategoryData());
            await dispatch(setAlert('Sub-Category Deleted Successfuly', 'warning'));

        }
        catch(error){
            dispatch({type:"DELETE_SUBCATEGORY_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something wwnt wrong!', 'error'));
            }
        }
    }
  }