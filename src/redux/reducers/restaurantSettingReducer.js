

const initialState = {
    isLoading : false,
    errorMessage:'',
    restauraneSetting_Data:null,
    selectedAudate:"",
    restaurantName:'',
    };
    
    const restaurantSettingReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_RESTAURANTSETTING_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_RESTAURANTSETTING_SUCCESS":
            return {
                ...state,
                isLoading:false,
                restauraneSetting_Data:payload.restaurantDetail[0],
                selectedAudate:payload.restaurantDetail[0].about,
                restaurantName:payload.restaurantDetail[0].name,
            };
       
        case "GET_RESTAURANTSETTING_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

        //Update
        case "UPDATE_RESTAURANTINFO_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "UPDATE_RESTAURANTINFO_SUCCESS":
            return {
                ...state,
                isLoading:false,
    
            };
       
        case "UPDATE_RESTAURANTINFO_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };    

        //update Name
        case "UPDATE_RESTAURANT_NAME":
            return  {
                ...state,
                loading: false,
                restaurantName:payload
            };

        //update about
        case "UPDATE_RESTAURANT_ABOUT":
            return  {
                ...state,
                loading: false,
                selectedAudate:payload
            };    
            
        
        //Update profile Image
        case "UPDATE_RESTAURANTPROFILEIMAGE_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "UPDATE_RESTAURANTPROFILEIMAGE_SUCCESS":
            return {
                ...state,
                isLoading:false,
    
            };
       
        case "UPDATE_RESTAURANTPROFILEIMAGE_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            }; 
            
        //Update Cover Image
        case "UPDATE_RESTAURANTCOVERIMAGE_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "UPDATE_RESTAURANTCOVERIMAGE_SUCCESS":
            return {
                ...state,
                isLoading:false,
    
            };
       
        case "UPDATE_RESTAURANTCOVERIMAGE_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };   
            
        //Upload Gallery Image
        case "UPLOAD_RESTAURANTGALLERYIMAGE_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "UPLOAD_RESTAURANTGALLERYIMAGE_SUCCESS":
            return {
                ...state,
                isLoading:false,
    
            };
       
        case "UPLOAD_RESTAURANTGALLERYIMAGE_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            }; 
            
            
        //Delete Gallery Image
        case "DELETE_RESTAURANTGALLERYIMAGE_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "DELETE_RESTAURANTGALLERYIMAGE_SUCCESS":
            return {
                ...state,
                isLoading:false,
    
            };
       
        case "DELETE_RESTAURANTGALLERYIMAGE_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };     
                
            
            
        default:
          return state;
      }
    };
    
    export default restaurantSettingReducer;
    