import React, { useState } from "react";
import styles from "./styles.module.css";
//import Hooks
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/categoryReducer/action";

const SingleRecipe = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { comments } = useSelector((state) => state.categoryReducer);
  const { singleRecipe } = useSelector((state) => state.categoryReducer);

  function HandleClick(singleRecipe, comment) {
    dispatch(postComment(singleRecipe, comment));
    setComment("");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{singleRecipe.name}</h2>
      <img src={singleRecipe.picture} alt="Error" className={styles.image} />
      <div className={styles.description}>
        Recipe Description : {singleRecipe.description}
      </div>
      <div className={styles.ingredients}>
        Recipe Ingredients : {singleRecipe.ingredients}
      </div>
      <div>
        <input
          placeholder="Add a Comment.."
          onChange={(e) => setComment(e.target.value)}
          className={styles.inputBox}
        />
        <button
          onClick={() => HandleClick(singleRecipe, comment)}
          className={styles.addButton}
        >
          Add
        </button>
      </div>
      <div className={styles.comments}>
        <p>Comments posted:</p>
      </div>
    </div>
  );
};

export default SingleRecipe;
