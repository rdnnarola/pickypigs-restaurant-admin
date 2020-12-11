

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
      

      default:
        return state;
    }
  };
  
  export default generalReducer;
  