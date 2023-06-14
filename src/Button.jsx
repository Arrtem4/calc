import { RiDeleteBack2Fill } from "react-icons/ri";

function Button({ btnValue, btnClick }) {
  return (
    <button
      className={btnValue === "C" ? "button buttonDeleteItem" : "button"}
      onClick={() => btnClick(btnValue)}
    >
      {btnValue === "R" ? (
        <RiDeleteBack2Fill className="buttonDeleteIcon" />
      ) : (
        btnValue
      )}
    </button>
  );
}

export default Button;
