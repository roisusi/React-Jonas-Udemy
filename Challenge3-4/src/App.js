import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const counterPlus = () => {
    setCount((count) => +count + +step);
  };
  const counterMinus = () => {
    setCount((count) => +count - +step);
  };

  const handelCount = (e) => {
    setCount(e.target.value);
  };
  const handelStep = (e) => {
    setStep(+e.target.value);
  };
  const reset = () => {
    setCount(0);
    setStep(1);
  };

  // return (
  //   <>
  //     <div className="counter">
  //       <button onClick={stepMinus}>-</button>
  //       <h1>Step: {step}</h1>
  //       <button onClick={stepPlus}>+</button>
  //     </div>
  //
  //     <div className="counter">
  //       <button onClick={counterMinus}>-</button>
  //       <h1>Count: {count}</h1>
  //       <button onClick={counterPlus}>+</button>
  //     </div>
  //
  //     <div className="counter">
  //       <p>
  //         <span>
  //           {count === 0
  //             ? "Today is "
  //             : count > 0
  //             ? `${count} days from today is `
  //             : `${Math.abs(count)} days ago was `}
  //         </span>
  //         <span>{date.toDateString()}</span>
  //       </p>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className="counter">
        <input
          type="range"
          value={step}
          min="1"
          max="10"
          onChange={handelStep}
        />
        {step}
      </div>

      <div className="counter">
        <button onClick={counterMinus}>-</button>
        <input type="text" defaultValue={count} onChange={handelCount} />
        <button onClick={counterPlus}>+</button>
      </div>

      <div className="counter">
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
      {step > 1 || count > 0 ? (
        <div className="counter">
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}
    </>
  );
};

export default App;
