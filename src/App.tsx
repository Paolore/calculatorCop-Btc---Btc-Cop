import * as React from "react";
import "./App.css";
import AssetCalculator from "./AssetCalculator";

const calculator = new AssetCalculator(26013692,89);

export default function App() {
  const [fiat, setFiat] = React.useState(0);
  const [crypto, setCrypto] = React.useState(0);

  const fiatChangeHandler = (event: any) => {
    const crypto = calculator.calculateCrypto(event.target.value);
    const fiat = calculator.calculateFiat(crypto);
    setCrypto(crypto);
    setFiat(fiat);
  };

  const cryptoChangeHandler = (event: any) => {
    const fiat = calculator.calculateFiat(event.target.value);
    const crypto = calculator.calculateCrypto(fiat);
    setFiat(fiat);
    setCrypto(crypto);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <h3>Valor BTC $26.013.692,89 </h3>
      Fiat:
      <input
        type="number"
        placeholder="Fiat"
        value={fiat}
        onChange={fiatChangeHandler}
      />
      Crypto:
      <input
        type="number"
        placeholder="Crypto"
        value={crypto}
        onChange={cryptoChangeHandler}
      />
    </div>
  );
}
