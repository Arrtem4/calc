import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import { useState } from "react";

function Calculator() {
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
        // eslint-disable-next-line no-eval
        setScreenValue(eval(screenValue).toString());
        break;
      case "0":
        /[1-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case "00":
        /[1-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue);
        break;
      case ".":
        /[1-9]/.test(screenValue[screenValue.length - 1])
          ? setScreenValue(screenValue + sign)
          : setScreenValue(screenValue + "0" + sign);
        break;
      default:
        setScreenValue(screenValue + sign);
        break;
    }
  };

  return (
    <div className="calculator">
      <Screen screenValue={screenValue} />
      <ButtonBox btnClick={btnClick} />
    </div>
  );
}

export default Calculator;

// alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) );
// var value = /\bhi\b/.test(str);
