import { RiDeleteBack2Fill } from "react-icons/ri";

function Button({ btnValue, btnClick }) {
  return (
    <button
      className={`button ${btnValue === "C" ? "button__clear" : ""}`}
      onClick={() => btnClick(btnValue)}
    >
      {btnValue === "R" ? (
        <RiDeleteBack2Fill className="button__delete" />
      ) : (
        btnValue
      )}
    </button>
  );
}

export default Button;
