// Import from react
import React, { useState, useEffect } from "react";
// Import styles
import styles from "./styles.module.css";
// Import from react-router-dom
import { useNavigate } from "react-router-dom";
// Import from react-redux
import { useDispatch } from "react-redux";
// Import from actions
import { getSingleCategory } from "../../redux/categoryReducer/action";

export default function HomePage() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function HandleClick(item) {
    dispatch(getSingleCategory(item));
    nav(`/singleCategory/${item?.name}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData.categories);
    };

    fetchData();
  }, []);
  if (data.length === 0) return <>Loading</>;
  return (
    <div className={styles.allCardsContainer}>
      {data?.map((item) => (
        <button onClick={() => HandleClick(item)} key={item?.id}>
          <div className={styles.cardContainer}>
            <h2>{item.name}</h2>
            <img
              src={item.category_picture}
              alt="Error"
              className={styles.cardImage}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
