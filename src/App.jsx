import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import Theme from "./Theme";
import ModalError from "./ModalError";
import { themes } from "./data/themes";
import "./styles/App.scss";

function App() {
  let localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    localTheme ? themes[localTheme] : themes[0]
  );
  const [horizont, setHorizont] = useState(false);
  useEffect(() => {
    mobileHorizont();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themes.indexOf(theme)));
  }, [theme]);

  const isMobile =
    "ontouchstart" in document.documentElement &&
    navigator.userAgent.match(/Mobi/);

  function mobileHorizont() {
    if (
      "ontouchstart" in document.documentElement &&
      navigator.userAgent.match(/Mobi/) &&
      window.innerHeight < 550
    ) {
      setHorizont(true);
    } else {
      setHorizont(false);
    }
  }

  window.onresize = mobileHorizont;

  return (
    <>
      {horizont ? (
        <ModalError />
      ) : (
        <div className={`${theme} layout background`}>
          <Theme theme={theme} setTheme={setTheme} themes={themes} />
          <Calculator theme={theme} isMobile={isMobile} />
        </div>
      )}
    </>
  );
}

export default App;
