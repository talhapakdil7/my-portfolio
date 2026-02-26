import { useState } from "react";
import Hero from "./Hero";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import AppStoreApps from "./AppStoreApps";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaSun, FaMoon } from "react-icons/fa6";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 px-4 py-2 rounded-lg
          bg-gray-200 dark:bg-gray-800
          text-black dark:text-white
          shadow-lg border border-gray-300 dark:border-gray-700
          transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Global theme for the whole site */}
      <div className="min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white">
        <Hero />
        <Summary />
        <Education />
        <Skills />
        <Experience />
        <AppStoreApps />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
