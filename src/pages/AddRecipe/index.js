// Import from react
import React from "react";
// Import styles
import styles from "./styles.module.css";

export default function addRecipe() {
  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      const response = await fetch("path/to/json/file.json");
      const json = await response.json();

      json.images.push(base64String);

      await fetch("path/to/json/file.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });
    };
    reader.readAsDataURL(file);
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <label for="addRecipe" className={styles.label}>
          Main Category
        </label>
        <select name="addRecipe" id="addRecipe" className={styles.select}>
          <option value="Italian">Italian Food</option>
          <option value="Mexican">Mexican Food</option>
          <option value="Chinese">Chinese Food</option>
          <option value="American">American Food</option>
          <option value="Indian">Indian Food</option>
        </select>
        <label for="name" className={styles.label}>
          Recipe name
        </label>
        <input />
        <label for="ingredients" className={styles.label}>
          Recipe ingredients
        </label>
        <input />
        <label for="picture" className={styles.label}>
          Recipe picture
        </label>
        <form>
          <input type="file" onChange={handleFileSelect} />
        </form>
        <label for="description" className={styles.label}>
          Recipe description
        </label>
        <textarea className={styles.textArea} />
      </div>
    </>
  );
}
