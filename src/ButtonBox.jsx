import Button from "./Button";
import buttons from "./Buttons.js";
import "./ButtonBox.scss";

function ButtonBox({ btnClick, theme }) {
  return (
    <div className={`button__box ${theme}`}>
      {buttons.map((btn, i) => (
        <Button btnClick={btnClick} btnValue={btn} key={i} theme={theme} />
      ))}
    </div>
  );
}

export default ButtonBox;
