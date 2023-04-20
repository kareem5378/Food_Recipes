// Import from react
import React from "react";
// Import from react-redux
import { useDispatch, useSelector } from "react-redux";
// Import styles
import styles from "./styles.module.css";
// Import action
import { getSingleRecipe } from "../../redux/categoryReducer/action";
// Import from react-router-dom
import { useNavigate, useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const { singleCategory } = useSelector((state) => state.categoryReducer);
  const { singleRecipe } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function HandleClick(Recipe) {
    console.log(Recipe);
    dispatch(getSingleRecipe(Recipe));
    console.log(singleRecipe.name);
    nav(`/SingleRecipe/${singleRecipe.name}`);
  }
  return (
    <div className={styles.allCardsContainer}>
      {singleCategory.recipes.map((recipe) => (
        <button onClick={() => HandleClick(recipe)} key={recipe?.id}>
          <div key={recipe.id} className={styles.cardContainer}>
            <h2>{recipe.name}</h2>
            <img
              src={recipe.picture}
              className={styles.cardImage}
              alt="error"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default RecipePage;
