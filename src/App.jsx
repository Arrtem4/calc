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
  return (
    <div className={`${theme} layout background`}>
      <Theme theme={theme} setTheme={setTheme} themes={themes} />
      <Calculator theme={theme} />
    </div>
  );
}

export default App;
