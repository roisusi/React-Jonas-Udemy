import React from "react";

function StartScreen({ questionsLength, dispatch }) {
  function handleStartGame() {
    dispatch({ type: "start" });
  }
  return (
    <div className={"start"}>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsLength} questions to test your React Mastery</h3>
      <button className={"btn btn-ui"} onClick={handleStartGame}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
