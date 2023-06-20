import { useState } from "react";
import "./App.scss";
import Calculator from "./Calculator";
import Theme from "./Theme";

function App() {
  const themes = ["Theme_Light", "Theme_Dark", "Classic_Light", "Classic_Dark"];
  const [theme, setTheme] = useState(themes[0]);
  return (
    <div className={`${theme} layout background`}>
      <Theme theme={theme} setTheme={setTheme} themes={themes} />
      <Calculator theme={theme} />
    </div>
  );
}

export default App;
