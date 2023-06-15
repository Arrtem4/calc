import "./Screen.scss";

function Screen({ screenValue }) {
  return (
    <div className="wrapper">
      <p className={`screen ${screenValue.length > 14 ? `screen__15` : ``}`}>
        {screenValue}
        <span className="ankor">1</span>
      </p>
    </div>
  );
}

export default Screen;
