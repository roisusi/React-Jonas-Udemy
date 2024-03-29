import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import {useQuiz} from "./contexts/QuizProvider";

export default function App() {
    const {questions, status} = useQuiz();

    const numOfQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
    );
    return (
        <div className="app">
            <Header/>
            <Main>
                {status === "loading" && <Loader/>}
                {status === "error" && <Error/>}
                {status === "ready" && (
                    <StartScreen questionsLength={numOfQuestions}/>
                )}
                {status === "active" && (
                    <>
                        <Progress numOfQuestions={numOfQuestions} maxPossiblePoints={maxPossiblePoints}
                        />
                        <Question/>
                        <Footer>
                            <Timer/>
                            <NextButton numOfQuestions={numOfQuestions}/>
                        </Footer>
                    </>
                )}
                {status === "finished" && (
                    <FinishScreen
                        maxPossiblePoints={maxPossiblePoints}
                    />
                )}
            </Main>
        </div>
    );
}
