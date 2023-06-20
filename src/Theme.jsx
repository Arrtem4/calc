import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Theme = ({ theme, setTheme, themes }) => {
  let x = themes.indexOf(theme);
  return (
    <div className={`theme ${theme}`}>
      <RiArrowDropLeftLine
        className={`theme__arrow ${theme}`}
        onClick={() => {
          x === 0
            ? setTheme(themes[themes.length - 1])
            : setTheme(themes[x - 1]);
        }}
      />
      <p className={`theme__name ${theme}`}>Theme</p>
      <RiArrowDropRightLine
        className={`theme__arrow ${theme}`}
        onClick={() => {
          x === themes.length - 1
            ? setTheme(themes[0])
            : setTheme(themes[x + 1]);
        }}
      />
    </div>
  );
};

export default Theme;
