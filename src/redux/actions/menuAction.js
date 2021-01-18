import Axios from './axios';
import {setAlert} from './alertAction';


export const getAllMenuData=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_ALLMENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus/list`
            let response = await Axios.post(dataURL,JSON.stringify({...data,type:"menu"}),config );
            dispatch({type:"GET_ALLMENU_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_ALLMENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  export const addMenuData=(data)=>{

    return async(dispatch)=>{
        try{
            dispatch({type:"ADD_MENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"ADD_MENU_SUCCESS",payload:response.data});
            await dispatch(setAlert('Menu Added Successfuly', 'success'));
            await dispatch(getAllMenuData());

        }
        catch(error){
          dispatch({type:"ADD_MENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  export const getSelectedMenuData=(menuId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SELECTEDMENU_REQUEST"});
            
            let response = await Axios.get(`/restaurant_admin/menus/${menuId}`)
            dispatch({type:"GET_SELECTEDMENU_SUCCESS",payload:response.data});
        }
        catch(error){
          dispatch({type:"GET_SELECTEDMENU_FAILURE",payload:error});
        }
    }
  };
// update product Form
export const updateMenuForm = (key , value) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"UPDATE_MENU_FORM" , payload : { key,value} });
      }
      catch(error){
          console.error(error);
      }
  }
};

  export const updateSelectedMenuData=(menuId,data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"UPDATE_MENU_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/restaurant_admin/menus/${menuId}`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"UPDATE_MENU_SUCCESS",payload:response.data});
            await dispatch(getAllMenuData());
            await dispatch(setAlert('Menu Updated Successfuly', 'success'));

        }
        catch(error){
          dispatch({type:"UPDATE_MENU_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };
  
  export const deleteSelectedMenuData=(categoryId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"DELETE_MENU_REQUEST"});
            let response = await Axios.delete(`/restaurant_admin/menus/${categoryId}`)
            dispatch({type:"DELETE_MENU_SUCCESS",payload:response.data});
            await dispatch(getAllMenuData());
            await dispatch(setAlert('Menu Deleted Successfuly', 'warning'));
        }
        catch(error){
            dispatch({type:"DELETE_MENU_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something wwnt wrong!', 'error'));
            }
        }
    }
  }

  

  