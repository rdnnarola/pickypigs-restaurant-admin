

const initialState = {
    isLoading : false,
    errorMessage:'',
    location_data:null,
    address_Data:null,
};
    
    const googleReducer = (state = initialState, { type, payload }) => {

      switch (type) {

        case "GET_LOCATIONDATA_REQUEST":
          return {
            ...state,
            isLoading:true,
          };

        case "GET_LOCATIONDATA_SUCCESS":
          return {
            ...state,
            isLoading:false,
            location_data:payload.results[0].formatted_address,
            address_Data:payload.results[0].address_components,
          };
  
          
        case "GET_GEOMETRY_DATA":
          return {
            ...state,
            isLoading:false,
            errorMessage:payload,
          };

        default:
          return state;
      }
    };
    
    export default googleReducer;
    