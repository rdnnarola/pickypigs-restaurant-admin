

const initialState = {
    isLoading : false,
    errorMessage:'',
    menu_Data:null,
    selectedMenu:{},
    };
    
    const menuReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_ALLMENU_REQUEST":
        case "ADD_MENU_REQUEST":
        case "GET_SELECTEDMENU_REQUEST":
        case "UPDATE_MENU_REQUEST":
        case "DELETE_MENU_REQUEST":
        case "HIDE_MENU_REQUEST":
        case "DUPLICATE_MENU_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_ALLMENU_SUCCESS":
            return {
                ...state,
                isLoading:false,
            menu_Data:payload,
    
            };
        case "ADD_MENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };        
        case "GET_SELECTEDMENU_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                selectedMenu: payload.data
            }  
        case "UPDATE_MENU_FORM":
            return  {
                ...state,
                loading: false,
                selectedMenu : {
                    ...state.selectedMenu,
                    [payload.key] : payload.value
                }
            };
        case "UPDATE_MENU_SUCCESS":            
            return{
                ...state,
                isLoading:false
            }   

        case "DELETE_MENU_SUCCESS":            
            return{
                ...state,
                isLoading:false
            }  

        case "HIDE_MENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };
        case "DUPLICATE_MENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };         
             
        case "GET_ALLMENU_FAILURE":
        case "ADD_MENU_FAILURE":
        case "GET_SELECTEDMENU_FAILURE":  
        case "UPDATE_MENU_FAILURE":  
        case "DELETE_MENU_FAILURE": 
        case "HIDE_MENU_FAILURE": 
        case "DUPLICATE_MENU_FAILURE": 
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
  
        default:
          return state;
      }
    };
    
    export default menuReducer;
    