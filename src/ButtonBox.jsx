import Button from "./Button";
import buttons from "./Buttons.js";
import "./ButtonBox.scss";

function ButtonBox() {
  return (
    <div className="buttonBox">
      {buttons.map((btn, i) => (
        <Button value={btn} key={i} />
      ))}
    </div>
  );
}

export default ButtonBox;
