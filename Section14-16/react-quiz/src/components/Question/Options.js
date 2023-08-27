import React from "react";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  function handleAnswer(index) {
    dispatch({
      type: "newAnswer",
      payload: index,
    });
  }
  return (
    <div className={"options"}>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} 
          ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => handleAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
