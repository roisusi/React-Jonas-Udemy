// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [convert, setConvert] = useState("EUR");
  const [rate, setRate] = useState(0);
  const [isloading, setIsloading] = useState(false);
  function handleAmount(e) {
    setAmount(+e.target.value);
  }

  function handleCurrency(e) {
    setCurrency(e.target.value);
  }

  function handleConvert(e) {
    setConvert(e.target.value);
  }

  useEffect(
    function () {
      function convertCurrency() {
        setIsloading(true);
        const res = fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${convert}`
        ).then((response) =>
          response.json().then((data) => {
            setRate(data.rates[convert]);
            setIsloading(false);
          })
        );
      }

      if (currency === convert) {
        return setRate(amount);
      }
      convertCurrency();
    },
    [amount, currency, convert]
  );
  return (
    <div>
      <input
        disabled={isloading}
        type="text"
        value={amount}
        onChange={handleAmount}
      />
      <select disabled={isloading} value={currency} onChange={handleCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select disabled={isloading} value={convert} onChange={handleConvert}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {rate.toFixed(2)} {convert}
      </p>
    </div>
  );
}
