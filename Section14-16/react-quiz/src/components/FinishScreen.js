import React from "react";

function FinishScreen({ dispatch, points, maxPossiblePoints, highScore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  function handleResetButton() {
    dispatch({ type: "reset" });
  }
  return (
    <>
      <p className={"result"}>
        {emoji} You Scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className={"highscore"}>(Highscore: {highScore} points)</p>
      <button className={"btn btn-ui"} onClick={handleResetButton}>
        Reset Quiz
      </button>
    </>
  );
}

export default FinishScreen;
