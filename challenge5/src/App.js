import "./App.css";
import Bill from "./components/Bill";
import Service from "./components/Service";
import { useState } from "react";
function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  let total = +bill + +bill * ((+tip1 / 100 + +tip2 / 100) / 2);
  const avgTip = +bill * ((+tip1 / 100 + +tip2 / 100) / 2);

  const options = [
    "Kaki (0%)",
    "is was bad? (5%)",
    "is was good? (10%)",
    "is was very good? (20%)",
  ];

  function Reset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <Service options={options} tip={tip1} onAvgTip={setTip1}>
        <label>How did you like the service?</label>
      </Service>
      <Service options={options} tip={tip2} onAvgTip={setTip2}>
        <label>How you friend like the service?</label>
      </Service>
      <h1>
        {" "}
        You Pay ${total} (${bill} + ${Math.round(avgTip)} tip)
      </h1>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
