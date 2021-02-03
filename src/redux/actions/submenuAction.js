import Axios from './axios';
import {setAlert} from './alertAction';


export const getAllSubMenuData=(data)=>{
  console.log(data);
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_ALLSUBMENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus/list`
            let response = await Axios.post(dataURL,JSON.stringify({...data,type:"submenu"}),config );
            dispatch({type:"GET_ALLSUBMENU_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_ALLSUBMENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  export const addSubMenuData=(data,showDeleted)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"ADD_SUBMENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"ADD_SUBMENU_SUCCESS",payload:response.data});
            if(showDeleted){
              await dispatch(getAllSubMenuData());
            }else{
              await dispatch(getAllSubMenuData({delete:0}));
            }
            await dispatch(setAlert('Sub-Menu Added Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"ADD_SUBMENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  export const getSelectedSubMenuData=(subMenuId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SELECTEDSUBMENU_REQUEST"});
            
            let response = await Axios.get(`/restaurant_admin/menus/${subMenuId}`)
            dispatch({type:"GET_SELECTEDSUBMENU_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_SELECTEDSUBMENU_FAILURE",payload:error});
        }
    }
  };
// update product Form
export const updateSubMenuForm = (key , value) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"UPDATE_SUBMENU_FORM" , payload : { key,value} });
      }
      catch(error){
          console.error(error);
      }
  }
};

  export const updateSelectedSubMenuData=(subMenuId,data,showDeleted)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"UPDATE_SUBMENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus/${subMenuId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"UPDATE_SUBMENU_SUCCESS",payload:response.data});
            if(showDeleted){
              await dispatch(getAllSubMenuData());
            }else{
              await dispatch(getAllSubMenuData({delete:0}));
            }
            await dispatch(setAlert('Sub-Menu Updated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"UPDATE_SUBMENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };
  
  export const deleteSelectedSubMenuData=(subMenuId,showDeleted)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DELETE_SUBMENU_REQUEST"});
            let response = await Axios.delete(`/restaurant_admin/menus/${subMenuId}`)
            dispatch({type:"DELETE_SUBMENU_SUCCESS",payload:response.data});
            if(showDeleted){
              await dispatch(getAllSubMenuData());
            }else{
              await dispatch(getAllSubMenuData({delete:0}));
            }
            await dispatch(setAlert('sub-Menu Deleted Successfuly', 'warning'));

        }
        catch(error){
            dispatch({type:"DELETE_SUBMENU_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something wwnt wrong!', 'error'));
            }
        }
    }
  }

  export const hideSelectedSubMenuData=(selectedId,data,showDeleted)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"HIDE_SUBMENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus/active_inactive/${selectedId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"HIDE_SUBMENU_SUCCESS",payload:response.data});
            if(showDeleted){
              await dispatch(getAllSubMenuData());
            }else{
              await dispatch(getAllSubMenuData({delete:0}));
            }
            await dispatch(setAlert(`Menu ${data.isActive?"UnHide":"Hide"} Successfuly`, 'success'));

        }
        catch(error){
          dispatch({type:"HIDE_SUBMENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  export const duplicateSelectedSubMenuData=(selectedId,data,showDeleted)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DUPLICATE_SUBMENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus/duplicate/${selectedId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"DUPLICATE_SUBMENU_SUCCESS",payload:response.data});
            if(showDeleted){
              await dispatch(getAllSubMenuData());
            }else{
              await dispatch(getAllSubMenuData({delete:0}));
            }
            await dispatch(setAlert('Menu Duplicated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"DUPLICATE_SUBMENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  

  