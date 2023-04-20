// Import constants
import * as constants from "./constants";

const initState = {
  loading: false,
  error: null,
  foodCategories: [],
  singleCategory: {},
  singleRecipe: [],
};

function categoryReducer(state = initState, action) {
  switch (action.type) {
    case constants.LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.SUCCESS:
      return {
        ...state,
        loading: false,
        foodCategories: action.payload,
      };
    case constants.GET_SINGLE_CATEGORY:
      return {
        ...state,
        loading: false,
        singleCategory: action.payload,
      };
    case constants.GET_SINGLE_RECIPE:
      return {
        ...state,
        loading: false,
        singleRecipe: action.payload,
      };
    case constants.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default categoryReducer;
