import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import "./Calculator.scss";

function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <ButtonBox />
    </div>
  );
}

export default Calculator;
