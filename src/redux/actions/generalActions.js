import Axios from './axios';
import axios from "axios";
import {setAlert} from './alertAction';
import {RESTAURANT_ADMIN_URL} from '../../shared/constant';



export const getLogin=(data,history)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_LOGIN_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`/auth/login`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_LOGIN_SUCCESS",payload:response.data});
          dispatch(setAlert('LogIn Success', 'success'));
          history.push('/');
          const token = localStorage.getItem("access_token");
          if (token) axios.defaults.headers.common = { "x-access-token": token };
      }
      catch(error){
        dispatch({type:"GET_LOGIN_FAILURE",payload:error});
        dispatch(setAlert('Wrong Credential', 'error'));
      }
  }
};

export const logoutUser=(history)=>{
  return async(dispatch)=>{
      try{
          await dispatch({type:"LOGOUT_ADMIN_REQUEST"});

          dispatch({type:"LOGOUT_ADMIN_SUCCESS"});
          dispatch(setAlert('LogOut Success', 'success'));
          window.open(
            `${RESTAURANT_ADMIN_URL}`,
            '_self', // <- This is what makes it open in a new window.
            'replace=true'
          );
          // history.push('/home') ;

      }
      catch(error){
        dispatch({type:"LOGOUT_ADMIN_FAILURE"});
        dispatch(setAlert('Something Wrong', 'error'));

      }
  }
}


export const forgotPassword=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"FORGOT_PASSWORD_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`/auth/forgot_password`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"FORGOT_PASSWORD_SUCCESS",payload:response.data});
          dispatch(setAlert(`${response.data.message}`, 'success'));
      }
      catch(error){
        dispatch({type:"FORGOT_PASSWORD_FAILURE",payload:error});
        dispatch(setAlert('Something Went Wrong', 'error'));
      }
  }
};

export const resetPassword=(data,history)=>{
  console.log(data);
  return async(dispatch)=>{
      try{
          dispatch({type:"RESET_PASSWORD_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`/auth/reset_password`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"RESET_PASSWORD_SUCCESS",payload:response.data});
          dispatch(setAlert(`${response.data.message}`, 'success'));
          history.push('/');
      }
      catch(error){
        dispatch({type:"RESET_PASSWORD_FAILURE",payload:error});
        dispatch(setAlert(`${error.response.data.message}`, 'error'));
      }
  }
};
