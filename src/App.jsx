import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import Theme from "./Theme";
import { themes } from "./data/themes";
import "./styles/App.scss";

function App() {
  let localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    localTheme ? themes[localTheme] : themes[0]
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themes.indexOf(theme)));
  }, [theme]);
  const isMobile =
    "ontouchstart" in document.documentElement &&
    navigator.userAgent.match(/Mobi/);
  return (
    <div className={`${theme} layout background`}>
      <Theme theme={theme} setTheme={setTheme} themes={themes} />
      <Calculator theme={theme} isMobile={isMobile} />
    </div>
  );
}

export default App;
