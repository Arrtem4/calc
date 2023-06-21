/* eslint-disable no-eval */
import { useEffect, useState } from "react";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

function Calculator({ theme, isMobile }) {
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
      if (
        event.key === "1" ||
        event.key === "2" ||
        event.key === "3" ||
        event.key === "4" ||
        event.key === "5" ||
        event.key === "6" ||
        event.key === "7" ||
        event.key === "8" ||
        event.key === "9" ||
        event.key === "0" ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "=" ||
        event.key === "*" ||
        event.key === "/"
      ) {
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
    <div className={`${isMobile ? "calculator_mobile" : "calculator"}`}>
      <Screen screenValue={screenValue} theme={theme} />
      <ButtonBox btnClick={btnClick} theme={theme} isMobile={isMobile} />
    </div>
  );
}
export default Calculator;
