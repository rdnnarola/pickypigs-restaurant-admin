

const initialState = {
    isLoading : false,
    errorMessage:'',
    allergy_Data:{},
    dietary_Data:{},
    lifestyle_Data:{},
    restaurantFeatures_Data:{},
    cuisine_Data:{},
    };
    
    const allergyReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_ALLERGY_REQUEST":
        case "GET_DIETARY_REQUEST":
        case "GET_LIFESTYLE_REQUEST":
        case "GET_RESTAURANTFEATURE_REQUEST":
        case "GET_CUISINE_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_ALLERGY_SUCCESS":
            return {
                ...state,
                isLoading:false,
                allergy_Data:payload,
            };
        case "GET_DIETARY_SUCCESS":
            return{
                ...state,
                isLoading:false,
                dietary_Data:payload,
            };
        case "GET_LIFESTYLE_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                lifestyle_Data:payload,
            }  
      
        case "GET_RESTAURANTFEATURE_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                restaurantFeatures_Data:payload,
            }   
        case "GET_CUISINE_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                cuisine_Data:payload,
            }   
       
             
        case "GET_ALLERGY_FAILURE":
        case "GET_DIETARY_FAILURE":
        case "GET_LIFESTYLE_FAILURE":  
        case "GET_RESTAURANTFEATURE_FAILURE":  
        case "GET_CUISINE_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
  
    

        default:
          return state;
      }
    };
    
    export default allergyReducer;
    