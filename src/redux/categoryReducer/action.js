import * as constants from "./constants";

export default function getCategories() {
  return async (dispatch) => {
    dispatch({
      type: constants.LOADING,
    });

    try {
      const res = await fetch("./Data/data.json");
      const foodCategories = await res.json();

      dispatch({
        type: constants.SUCCESS,
        payload: foodCategories.categories,
      });
    } catch (error) {
      dispatch({
        type: constants.ERROR,
        payload: error,
      });
    }
  };
}

export function getSingleCategory(category) {
  return async (dispatch) => {
    dispatch({
      type: constants.LOADING,
    });

    try {
      dispatch({
        type: constants.GET_SINGLE_CATEGORY,
        payload: category,
      });
    } catch (error) {
      dispatch({
        type: constants.ERROR,
        payload: error,
      });
    }
  };
}

export function getSingleRecipe(recipe) {
  return (dispatch) => {
    dispatch({
      type: constants.LOADING,
    });

    try {
      dispatch({
        type: constants.GET_SINGLE_RECIPE,
        payload: recipe,
      });
    } catch (error) {
      dispatch({
        type: constants.ERROR,
        payload: error,
      });
    }
  };
}

export function postComment(singleRecipe, comment) {
  return async (dispatch) => {
    dispatch({
      type: constants.LOADING,
    });
    const jsonData = JSON.stringify(comment);

    const res = await fetch("./data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    try {
      dispatch({
        type: constants.POST_COMMENT,
        payload: comment,
      });
    } catch (error) {
      dispatch({
        type: constants.ERROR,
        payload: error,
      });
    }
  };
}
