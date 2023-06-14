import "./Screen.scss";

function Screen({ screenValue }) {
  return (
    <div>
      <input className="input" defaultValue={screenValue}></input>
    </div>
  );
}

export default Screen;
