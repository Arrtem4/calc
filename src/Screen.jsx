import "./styles/Screen.scss";

function Screen({ screenValue, theme }) {
  return (
    <div className={`${theme} screen`}>
      <p
        className={`screen__content  ${
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
