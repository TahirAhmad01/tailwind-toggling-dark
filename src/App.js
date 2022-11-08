import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import avatar from "./assets/image/boy-avatar-6299533-5187865.webp";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  console.log(theme);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (theme === "dark") {
      setDarkMode(true);
    }

    localStorage.setItem("theme", theme);
  }, [colorTheme, isDarkMode, theme]);

  return (
    <div className="h-screen bg-[url('./assets/image/bglight.jpg')] dark:bg-[url('./assets/image/bgdark.jpg')] bg-cover">
      <div className="backdrop-blur-lg bg-white/30 h-full w-full dark:bg-black/60 flex justify-center items-center flex-col ">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
        />
        <div className="p-6 max-w-lg min-w-[320px] backdrop-blur-sm bg-white/30 dark:bg-[#57534E]/10 rounded-lg border dark:border-gray-500  shadow-md mx-2">
          <div className="flex justify-end flex-col items-center dark:text-white">
            <div className="h-28 w-28 overflow-hidden rounded-full bg-white">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="py-3 ">
              <h4 className="text-3xl">Tahir Ahmad (Sani)</h4>
              <div className="text-sm text-center pt-2">
                Front end web developer
              </div>
            </div>

            <div className="icons mt-6">
              <a href="/#" className="fb customButton">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="twitter customButton">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#" className="insta customButton">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/#" className="git customButton ">
                <i className="fab fa-github text-[#333333] dark:text-red-400"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
