import Axios from './axios';
import {setAlert} from './alertAction';



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
          await dispatch(setAlert('LogIn Success', 'success'));
          history.push('/');
      }
      catch(error){
        dispatch({type:"GET_LOGIN_FAILURE",payload:error});
        await dispatch(setAlert('Wrong Credential', 'error'));
      }
  }
};

export const logoutUser=(history)=>{
  return async(dispatch)=>{
      try{
          await dispatch({type:"LOGOUT_USER_REQUEST"});
          await dispatch(setAlert('LogOut Success', 'success'));
          history.push('/login') ;
      }
      catch(error){
          console.error(error);
          await dispatch(setAlert('Something Wrong', 'error'));

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
          await dispatch(setAlert(`${response.data.message}`, 'success'));
      }
      catch(error){
        dispatch({type:"FORGOT_PASSWORD_FAILURE",payload:error});
        await dispatch(setAlert('Something Went Wrong', 'error'));
      }
  }
};
