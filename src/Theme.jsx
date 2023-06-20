import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Theme = () => {
  const themes = ["color", "color2"];
  const [theme, setTheme] = useState(themes[0]);

  return (
    <div className={`theme ${theme}`}>
      <RiArrowDropLeftLine className={`theme__arrow ${theme}`} />
      <p className={`theme__name ${theme}`}>Theme</p>
      <RiArrowDropRightLine
        className={`theme__arrow ${theme}`}
        onClick={() => {
          let x = themes.indexOf(theme);
          x === themes.length - 1
            ? setTheme(themes[0])
            : setTheme(themes[x + 1]);
        }}
      />
    </div>
  );
};

export default Theme;
