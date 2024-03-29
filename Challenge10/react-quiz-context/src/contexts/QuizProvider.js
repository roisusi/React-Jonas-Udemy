import Error from "../components/Error";
import {createContext, useContext, useEffect, useReducer} from "react";

const initialState = {
    questions: [],
    //loading,error,ready,active,finished
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highScore: 0,
    secondsRemaining: null,
};

const SECONDS_PER_QUESTION = 30;

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {...state, questions: action.payload, status: "ready"};
        case "dataFailed":
            return {...state, status: "error"};
        case "start":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
            };
        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        case "nextQuestion":
            return {...state, index: state.index + 1, answer: null};
        case "finish":
            return {
                ...state,
                status: "finished",
                highScore:
                    state.points > state.highScore ? state.points : state.highScore,
            };
        case "reset":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready",
                highScore: state.highScore,
            };
        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Unknown action");
    }
}

const QuizContext = createContext();

function QuizProvider({children}) {
    const [
        {questions, status, index, answer, points, highScore, secondsRemaining},
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then((response) => response.json())
            .then((data) => dispatch({type: "dataReceived", payload: data}))
            .catch((err) => dispatch({type: "dataFailed"}));
    }, []);

    return (
        <QuizContext.Provider value={{questions, status, index, answer, points, highScore, secondsRemaining, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}

export {QuizProvider, useQuiz}