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
        <div className="px-4 py-5 md:p-6 max-w-lg min-w-[320px] backdrop-blur-sm bg-white/30 dark:bg-[#57534E]/10 rounded-2xl border dark:border-gray-800  shadow-md mx-2 relative">
          {" "}
          <div className="flex justify-end absolute right-4 top-5">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={120}
              className="h-10 w-14"
            />
          </div>
          <div className="flex justify-end flex-col items-center dark:text-white">
            <div className="h-28 w-28 overflow-hidden rounded-full bg-white">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="py-3 ">
              <h4 className="text-3xl font-medium">Tahir Ahmad (Sani)</h4>
              <div className="text-sm text-center pt-2 dark:text-gray-300 text-gray-700">
                Front end web developer
              </div>
            </div>

            <div className="icons mt-4 text-gray-600 dark:text-white/60 flex justify-center flex-wrap">
              <a
                href="https://www.facebook.com/TahirAhmad01/"
                target="_blank"
                className="hover:text-[#4267b2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tahirahmad01/"
                target="_blank"
                className="hover:text-[#0A66C2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/tahir_ahmad01"
                target="_blank"
                className="hover:text-[#1da1f2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tahir_ahmad01"
                target="_blank"
                className="hover:text-[#e1306c] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/TahirAhmad01"
                target="_blank"
                className="hover:text-[#333333] hover:dark:text-red-400 customButton "
                rel="noreferrer"
              >
                <i className="fab fa-github "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
