import Button from "./Button";
import { buttons } from "./data/buttons";
import "./styles/ButtonBox.scss";

function ButtonBox({ btnClick, theme, isMobile }) {
  return (
    <div
      className={`${isMobile ? "button__box_mobile" : "button__box"} ${theme}`}
    >
      {buttons.map((btn, i) => (
        <Button btnClick={btnClick} btnValue={btn} key={i} theme={theme} />
      ))}
    </div>
  );
}

export default ButtonBox;
