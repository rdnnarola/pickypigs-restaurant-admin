const initialState = {
  isLoading: false,
  errorMessage: "",
  subCategory_Data: null,
  selectedSubCategory: {},
  selectedCategorySubcategoryList: null,
  subCategoryModal: false,
  deleteSubcategoryModal: false,
};

const subcategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SUBCATEGORY_MODAL":
      return {
        ...state,
        subCategoryModal: payload,
      };
    case "DELETE_SUBCATEGORY_MODAL":
      return {
        ...state,
        deleteSubcategoryModal: payload,
      };

    case "GET_ALLSUBCATEGORY_REQUEST":
    case "ADD_SUBCATEGORY_REQUEST":
    case "GET_SELECTEDSUBCATEGORY_REQUEST":
    case "UPDATE_SUBCATEGORY_REQUEST":
    case "DELETE_SUBCATEGORY_REQUEST":
    case "GET_SELECTEDSUBCATEGORYLIST_REQUEST":
    case "HIDE_SUBCATEGORY_REQUEST":
    case "DUPLICATE_SUBCATEGORY_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALLSUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
        subCategory_Data: payload,
      };
    case "ADD_SUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_SELECTEDSUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
        selectedSubCategory: payload.data,
      };
    case "UPDATE_SUBCATEGORY_FORM":
      return {
        ...state,
        loading: false,
        selectedSubCategory: {
          ...state.selectedSubCategory,
          [payload.key]: payload.value,
        },
      };
    case "UPDATE_SUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };

    case "DELETE_SUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_SELECTEDSUBCATEGORYLIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        selectedCategorySubcategoryList: payload.data,
      };
    case "HIDE_SUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "DUPLICATE_SUBCATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_ALLSUBCATEGORY_FAILURE":
    case "ADD_SUBCATEGORY_FAILURE":
    case "GET_SELECTEDSUBCATEGORY_FAILURE":
    case "UPDATE_SUBCATEGORY_FAILURE":
    case "DELETE_SUBCATEGORY_FAILURE":
    case "GET_SELECTEDSUBCATEGORYLIST_FAILURE":
    case "DUPLICATE_SUBCATEGORY_FAILURE":
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
        selectedCategorySubcategoryList: null,
      };

    default:
      return state;
  }
};

export default subcategoryReducer;
