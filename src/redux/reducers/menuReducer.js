

const initialState = {
    isLoading : false,
    errorMessage:'',
    menu_Data:null,
    selectedMenu:{},
    showAddUpdateMenuModalData:false,
    showDeleteMenuModalData:false,
    selectedMenuDishData:null,
    };
    
    const menuReducer = (state = initialState, { type, payload }) => {
      switch (type) {

        case 'SHOW_ADDUPDATEMENU_MODAL':
            return  { 
              ...state, 
              showAddUpdateMenuModalData:payload
            };
        case 'SHOW_DELETEMENU_MODAL':
            return  { 
              ...state, 
              showDeleteMenuModalData:payload
            }; 
        
        case "GET_ALLMENU_REQUEST":
        case "ADD_MENU_REQUEST":
        case "GET_SELECTEDMENU_REQUEST":
        case "UPDATE_MENU_REQUEST":
        case "DELETE_MENU_REQUEST":
        case "HIDE_MENU_REQUEST":
        case "DUPLICATE_MENU_REQUEST":
        case "REDO_MENU_REQUEST":
        case "GET_SELECTEDMENUDISH_REQUEST":    
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
        case "REDO_MENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
            }; 
        case "GET_SELECTEDMENUDISH_SUCCESS":
            return{
                ...state,
                isLoading:false,
                selectedMenuDishData:payload.menu,
            };                 
             
        case "GET_ALLMENU_FAILURE":
        case "ADD_MENU_FAILURE":
        case "GET_SELECTEDMENU_FAILURE":  
        case "UPDATE_MENU_FAILURE":  
        case "DELETE_MENU_FAILURE": 
        case "HIDE_MENU_FAILURE": 
        case "DUPLICATE_MENU_FAILURE": 
        case "REDO_MENU_FAILURE": 
        case "GET_SELECTEDMENUDISH_FAILURE": 
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
    