//import from react
import React, { useEffect, useState } from "react";
//import from react-router-dom
import { Link } from "react-router-dom";
//import from react redux
import { useSelector, useDispatch } from "react-redux";
//import actions from redux
import { getQuiz } from "../redux/action";
//import component
import QuizItem from "./QuizItem";
//import styles
import styles from "./styles.module.css";

function QuizQuestions({ topic }) {
  const quiz = useSelector((state) => state.quizReducer);
  const { result } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const handleAnswerSelect = (questionId, answerIndex) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerIndex,
    }));
  };
  useEffect(() => {
    dispatch(getQuiz());
  }, []);

  if (!quiz || Object.keys(quiz).length === 0) {
    return <p>Loading questions...</p>;
  }

  const questions = {
    biology: quiz.biology,
    math: quiz.math,
    chemistry: quiz.chemistry,
    english: quiz.english,
    physics: quiz.physics,
  };
  if (showResult)
    return <h2 className={styles.score}>Your result is : {result}/10</h2>;

  return (
    <Link className={styles.cardContainer} to={"./singleCategory"}>
      <h2 className={styles.cardHeader}>Header</h2>
      {questions[topic]?.map((question) => (
        <QuizItem
          key={question.id}
          question={question}
          showResult={showResult}
        />
      ))}
    </Link>
  );
}

export default QuizQuestions;
