

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
            location_data:payload.results[0].formatted_address,
            address_Data:payload.results[0].address_components,
          };
  
          
        case "GET_GEOMETRY_DATA":
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
        //
        case "GET_GEOMETRY_DATA":
          return {
            ...state,
            location_Cordinate:payload.result.geometry.location,
          };    

        default:
          return state;
      }
    };
    
    export default googleReducer;
    