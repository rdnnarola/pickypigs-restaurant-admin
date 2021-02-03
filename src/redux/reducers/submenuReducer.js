

const initialState = {
    isLoading : false,
    errorMessage:'',
    subMenu_Data:null,
    selectedSubMenu:{},
    };
    
    const submenuReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_ALLSUBMENU_REQUEST":
        case "ADD_SUBMENU_REQUEST":
        case "GET_SELECTEDSUBMENU_REQUEST":
        case "UPDATE_SUBMENU_REQUEST":
        case "DELETE_SUBMENU_REQUEST":
        case "HIDE_SUBMENU_REQUEST":
        case "DUPLICATE_SUBMENU_REQUEST":    
            return {
                ...state,
                isLoading :true,
            };
        case "GET_ALLSUBMENU_SUCCESS":
            return {
                ...state,
                isLoading:false,
            subMenu_Data:payload,
    
            };
        case "ADD_SUBMENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };        
        case "GET_SELECTEDSUBMENU_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                selectedSubMenu: payload.data
            }  
        case "UPDATE_SUBMENU_FORM":
            return  {
                ...state,
                loading: false,
                selectedSubMenu : {
                    ...state.selectedSubMenu,
                    [payload.key] : payload.value
                }
            };
        case "UPDATE_SUBMENU_SUCCESS":            
            return{
                ...state,
                isLoading:false
            }   

        case "DELETE_SUBMENU_SUCCESS":            
            return{
                ...state,
                isLoading:false
            }  
        case "HIDE_SUBMENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };
        case "DUPLICATE_SUBMENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };     
             
        case "GET_ALLSUBMENU_FAILURE":
        case "ADD_SUBMENU_FAILURE":
        case "GET_SELECTEDSUBMENU_FAILURE":  
        case "UPDATE_SUBMENU_FAILURE":  
        case "DELETE_SUBMENU_FAILURE": 
        case "HIDE_SUBMENU_FAILURE": 
        case "DUPLICATE_SUBMENU_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
  
    

        default:
          return state;
      }
    };
    
    export default submenuReducer;
    