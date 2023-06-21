/* eslint-disable no-eval */
import { useEffect, useState } from "react";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

function Calculator({ theme }) {
  const [screenValue, setScreenValue] = useState("");
  const btnClick = (sign) => {
    switch (sign) {
      case "R":
        setScreenValue(screenValue.slice(0, -1));
        break;
      case "C":
        setScreenValue("");
        break;
      case "=":
        screenValue.length > 0 &&
        /[0-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(eval(screenValue).toString())
          : setScreenValue(screenValue);
        break;
      case "0":
        /[0-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case "00":
        /[0-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case ".":
        /[1-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue + "0" + sign);
        break;
      case "+":
        /[0-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case "*":
        /[0-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case "/":
        /[0-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case "-":
        /[0-9]/.test(screenValue[screenValue.length - 1]) ||
        screenValue.length === 0
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      default:
        setScreenValue(screenValue + sign);
        break;
    }
  };
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "1") {
        btnClick(event.key);
      }
      if (event.key === "2") {
        btnClick(event.key);
      }
      if (event.key === "3") {
        btnClick(event.key);
      }
      if (event.key === "4") {
        btnClick(event.key);
      }
      if (event.key === "5") {
        btnClick(event.key);
      }
      if (event.key === "6") {
        btnClick(event.key);
      }
      if (event.key === "7") {
        btnClick(event.key);
      }
      if (event.key === "8") {
        btnClick(event.key);
      }
      if (event.key === "9") {
        btnClick(event.key);
      }
      if (event.key === "0") {
        btnClick(event.key);
      }
      if (event.key === "+") {
        btnClick(event.key);
      }
      if (event.key === "-") {
        btnClick(event.key);
      }
      if (event.key === "=") {
        btnClick(event.key);
      }
      if (event.key === "*") {
        btnClick(event.key);
      }
      if (event.key === "/") {
        btnClick(event.key);
      }
      if (event.key === "Enter") {
        btnClick("=");
      }
      if (event.key === "Backspace") {
        btnClick("R");
      }
      if (event.key === "Escape") {
        btnClick("C");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div className="calculator">
      <Screen screenValue={screenValue} theme={theme} />
      <ButtonBox btnClick={btnClick} theme={theme} />
    </div>
  );
}
export default Calculator;
