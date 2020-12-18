

const initialState = {
  isLoading : false,
  errorMessage:'',
  };
  
  const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case "GET_LOGIN_REQUEST":
        return {
          ...state,
          isLoading :true,
        };
      case "GET_LOGIN_SUCCESS":
        localStorage.setItem('access_token',payload.token);
        return {
          ...state,
          isLoading:false,
          login_Data:payload,

        };   
      case "GET_LOGIN_FAILURE":
        return {
          ...state,
          isLoading:false,
          errorMessage:payload
        };

      //logout user
      case "LOGOUT_USER_REQUEST":
        localStorage.removeItem('access_token');
         return{
            ...state,
            isLoading:false,
         } 

      default:
        return state;
    }
  };
  
  export default generalReducer;
  