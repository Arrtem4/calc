import "./Screen.scss";

function Screen({ screenValue }) {
  return (
    <div>
      <p className="input">{screenValue}</p>
    </div>
  );
}

export default Screen;
