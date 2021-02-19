import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subcategoryReducer";
import menuReducer from "./menuReducer";
import submenuReducer from "./submenuReducer";
import alertReducer from "./alertReducer";
import dishesReducer from "./dishesReducer";
import restaurantSettingReducer from "./restaurantSettingReducer";
import allergyReducer from "./allergyReducer";

export default combineReducers({
 
  general: generalReducer,
  category:categoryReducer,
  subcategory:subcategoryReducer,
  menu:menuReducer,
  submenu:submenuReducer,
  alert:alertReducer,
  dishes:dishesReducer,
  restaurantSetting:restaurantSettingReducer,
  allergy:allergyReducer,


});
