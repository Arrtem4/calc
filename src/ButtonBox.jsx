import Button from "./Button";
import buttons from "./Buttons.js";
import "./ButtonBox.scss";

function ButtonBox({ btnClick }) {
  return (
    <div className="button__box">
      {buttons.map((btn, i) => (
        <Button btnClick={btnClick} btnValue={btn} key={i} />
      ))}
    </div>
  );
}

export default ButtonBox;
