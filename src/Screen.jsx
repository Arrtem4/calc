import "./Screen.scss";

function Screen({ screenValue }) {
  return (
    <div className="color screen">
      <p
        className={`screen__content ${
          screenValue.length > 14 ? `screen__content_15` : ``
        }`}
      >
        {screenValue}
        <span className="ankor"></span>
      </p>
    </div>
  );
}

export default Screen;
