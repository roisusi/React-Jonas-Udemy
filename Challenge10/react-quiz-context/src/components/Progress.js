import React from "react";
import {useQuiz} from "../contexts/QuizProvider";

function Progress({numOfQuestions, maxPossiblePoints}) {
    const {index, points, answer} = useQuiz();
    return (
        <header className={"progress"}>
            {/*index  + 0 or 1*/}
            <progress max={numOfQuestions} value={index + Number(answer !== null)}/>
            <p>
                Question <strong>{index + 1}</strong> / {numOfQuestions}
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
