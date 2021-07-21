const initialState = {
  isLoading: false,
  errorMessage: "",
  dishes_Data: null,
  selected_Disc: null,

  updateDishAvailablityLoading: false,
};

const dishesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALLDISHES_REQUEST":
    case "ADD_DISHES_REQUEST":
    case "GET_SELECTEDDISC_REQUEST":
    case "UPDATE_DISC_REQUEST":
    case "DELETE_DISHES_REQUEST":
    case "HIDE_DISH_REQUEST":
    case "GET_ALLDISH_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DUPLICATE_DISH_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALLDISHES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        dishes_Data: payload,
      };
    case "ADD_DISHES_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_SELECTEDDISC_SUCCESS":
      return {
        ...state,
        isLoading: false,
        selected_Disc: payload,
      };

    case "UPDATE_DISC_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };

    case "DELETE_DISHES_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "HIDE_DISH_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "DUPLICATE_DISH_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };

    case "GET_ALLDISHES_FAILURE":
    case "ADD_DISHES_FAILURE":
    case "GET_SELECTEDDISC_FAILURE":
    case "UPDATE_DISC_FAILURE":
    case "DELETE_DISHES_FAILURE":
    case "HIDE_DISH_FAILURE":
    case "DUPLICATE_DISH_FAILURE":
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    case "UPDATE_SELECTEDDISHAVAILABLITY_REQUEST":
      return {
        ...state,
        updateDishAvailablityLoading: true,
      };
    case "UPDATE_SELECTEDDISHAVAILABLITY_SUCCESS":
      return {
        ...state,
        updateDishAvailablityLoading: false,
      };
    case "UPDATE_SELECTEDDISHAVAILABLITY_FAILURE":
      return {
        ...state,
        updateDishAvailablityLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default dishesReducer;
