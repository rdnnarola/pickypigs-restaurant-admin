import Axios from './axios';



export const getLogin=(data)=>{
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
         
      }
      catch(error){
        dispatch({type:"GET_LOGIN_FAILURE",payload:error});
      }
  }
};

