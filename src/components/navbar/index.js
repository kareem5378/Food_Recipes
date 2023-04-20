import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.header}>
          <Link to={"./"}>Estarta For Recipes</Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link to={"./AddRecipe"} className={styles.button}>
            Add Recipe
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}
