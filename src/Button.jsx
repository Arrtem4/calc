import "./Button.scss";

function Button({ value }) {
  return (
    <div>
      <button className="button">
        {value.includes("&") ? value.replace("&amp;", "&") : value}
      </button>
    </div>
  );
}

export default Button;

// str.replace("&amp;", "&");
// &lArr;
