import React from "react";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className={"progress"}>
      {/*index  + 0 or 1*/}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
