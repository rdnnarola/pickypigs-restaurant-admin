

const initialState = {
    isLoading : false,
    errorMessage:'',
    category_Data:null,
    selectedCategory:{},
    selectedMenuCategoryList:[]
    };
    
    const categoryReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_ALLCATEGORY_REQUEST":
        case "ADD_CATEGORY_REQUEST":
        case "GET_SELECTEDCATEGORY_REQUEST":
        case "UPDATE_CATEGORY_REQUEST":
        case "DELETE_CATEGORY_REQUEST":
        case "GET_MENUCATEGORYLIST_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_ALLCATEGORY_SUCCESS":
            return {
                ...state,
                isLoading:false,
            category_Data:payload,
    
            };
        case "ADD_CATEGORY_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };
        case "GET_SELECTEDCATEGORY_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                selectedCategory: payload.data
            }  
        case "UPDATE_CATEGORY_FORM":
            return  {
                ...state,
                loading: false,
                selectedCategory : {
                    ...state.selectedCategory,
                    [payload.key] : payload.value
                }
            };
        case "UPDATE_CATEGORY_SUCCESS":            
            return{
                ...state,
                isLoading:false
            }   

        case "DELETE_CATEGORY_SUCCESS":            
            return{
                ...state,
                isLoading:false
            } 
        case "GET_MENUCATEGORYLIST_SUCCESS":
            return {
                ...state,
                isLoading:false,
                selectedMenuCategoryList:payload.data,
    
            };        
        case "GET_ALLCATEGORY_FAILURE":
        case "ADD_CATEGORY_FAILURE":
        case "GET_SELECTEDCATEGORY_FAILURE":  
        case "UPDATE_CATEGORY_FAILURE":  
        case "DELETE_CATEGORY_FAILURE": 
        case "GET_MENUCATEGORYLIST_FAILURE":    
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
  
    

        default:
          return state;
      }
    };
    
    export default categoryReducer;
    