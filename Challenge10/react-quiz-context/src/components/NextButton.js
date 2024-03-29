import React from "react";
import {useQuiz} from "../contexts/QuizProvider";

function NextButton({numOfQuestions}) {
    const {dispatch, answer, index} = useQuiz()

    function handleNextButton() {
        dispatch({type: "nextQuestion"});
    }

    function handleFinishButton() {
        dispatch({type: "finish"});
    }

    if (answer === null) return null;
    if (index < numOfQuestions - 1)
        return (
            <button className={"btn btn-ui"} onClick={handleNextButton}>
                Next
            </button>
        );
    if (index === numOfQuestions - 1)
        return (
            <button className={"btn btn-ui"} onClick={handleFinishButton}>
                Finished
            </button>
        );
}

export default NextButton;
