

const initialState = {
    isLoading : false,
    errorMessage:'',
    location_data:null,
    address_Data:null,
    coordinate_data:null,
    location_Cordinate:null,
    postalcode:null,
    streetName:null,
    localityData:null,
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
            location_data:payload,
          };
  
          
        case "GET_LOCATIONDATA_FAILURE":
          return {
            ...state,
            isLoading:false,
            errorMessage:payload,
          };


        //coordinate
        case "GET_COORDINATE_DATA":
            return  {
                ...state,
                loading: false,
                coordinate_data:payload
            };  
         //POSTALCODE
         case "GET_POSTALCODE_DATA":
          return  {
              ...state,
              loading: false,
              postalcode:payload
          };    

        //streetname
         case "GET_STREETNAME_DATA":
          return  {
              ...state,
              loading: false,
              streetName:payload
          };     
          
        //locality
        case "GET_LOCALITY_DATA":
          return  {
              ...state,
              loading: false,
              localityData:payload
          };   
         //GOOGLEaDDRESS
         case "GET_GOOGLElOCATION_DATA":
          return  {
              ...state,
              loading: false,
              address_Data:payload
          }; 

        case "GET_GEOMETRYDATA_REQUEST":
          return {
            ...state,
            isLoading:true,
          };

        case "GET_GEOMETRYDATA_SUCCESS":
          return {
            ...state,
            isLoading:false,
            location_Cordinate:payload.result.geometry.location
          };
  
        case "GET_GEOMETRYDATA_FAILURE":
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
    