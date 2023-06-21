import Button from "./Button";
import { buttons } from "./data/buttons";
import "./styles/ButtonBox.scss";

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
