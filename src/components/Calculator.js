import React, { useState } from "react";
import "../css/calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const click = (item) => {
    const operand = ["+", "-", "*", "/"];
    let already = false;
    for (let i = 0; i < operand.length; i++) {
      if (
        (result.indexOf(operand[i]) !== -1 &&
          operand.indexOf(item) !== -1 &&
          result[0] !== "-") ||
        (result.length === 0 && operand.indexOf(item) !== -1 && item !== "-")
      ) {
        already = true;
        break;
      }
    }
    if (!already) {
      setResult(result + String(item));
    }
  };

  const getResult = () => {
    let cal1 = 0;
    let operand = "";
    let last = 0;

    for (let i = 0; i < result.length; i++) {
      if (i === result.length - 1) {
        if (operand === "+") {
          cal1 = Number(cal1) + Number(result.slice(last, result.length));
        }
        if (operand === "-") {
          cal1 = cal1 - result.slice(last, result.length);
        }
        if (operand === "*") {
          cal1 = cal1 * result.slice(last, result.length);
        }
        if (operand === "/") {
          cal1 = cal1 / result.slice(last, result.length);
        }
        operand = "";
      }
      if (
        (result[i] === "+" && i > 0) ||
        (result[i] === "-" && i > 0) ||
        (result[i] === "*" && i > 0) ||
        (result[i] === "/" && i > 0)
      ) {
        cal1 = parseInt(result.slice(0, i));
        operand = result[i];
        last = i + 1;
      }
    }
    setResult(String(cal1));
  };

  return (
    <div className="calculator-container">
      <div className="result-zone">{result}</div>
      <div className="button-zone">
        <div onClick={() => click(7)}>7</div>
        <div onClick={() => click(8)}>8</div>
        <div onClick={() => click(9)}>9</div>
        <div onClick={() => click("/")}>÷</div>
        <div onClick={() => click(4)}>4</div>
        <div onClick={() => click(5)}>5</div>
        <div onClick={() => click(6)}>6</div>
        <div onClick={() => click("*")}>x</div>
        <div onClick={() => click(1)}>1</div>
        <div onClick={() => click(2)}>2</div>
        <div onClick={() => click(3)}>3</div>
        <div onClick={() => click("-")}>-</div>
        <div onClick={() => click("0")}>0</div>
        <div onClick={() => setResult("")}>C</div>
        <div onClick={() => click("+")}>+</div>
        <div className="equalButton" onClick={getResult}>
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
