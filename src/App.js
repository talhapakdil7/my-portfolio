import { useState } from "react";
import Hero from "./Hero";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaSun, FaMoon } from "react-icons/fa6";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Tema Butonu */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 px-4 py-2 rounded-lg
          bg-gray-200 dark:bg-gray-800
          text-black dark:text-white
          shadow-lg border border-gray-300 dark:border-gray-700
          transition-colors"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Tüm site için global tema */}
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <Hero />
        <Summary />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
