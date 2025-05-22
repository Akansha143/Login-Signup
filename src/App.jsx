import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Welcome from "./components/Welcome";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import AccountSettings from "./components/AccountSettings";

function App() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    gender: "male",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🌙 Toggle Dark Mode
  const toggleDarkMode = () => {
    const htmlEl = document.getElementById("htmlRoot");
    htmlEl.classList.toggle("dark");
    const darkModeOn = htmlEl.classList.contains("dark");
    setIsDarkMode(darkModeOn);
    localStorage.setItem("theme", darkModeOn ? "dark" : "light");
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const htmlEl = document.getElementById("htmlRoot");
    if (savedTheme === "dark") {
      htmlEl.classList.add("dark");
      setIsDarkMode(true);
    } else {
      htmlEl.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <Router>
      {/* Dark Mode Icon Toggle */}
      <div className="fixed top-4 right-4 z-50 text-xl">
        <button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 p-2 rounded-full shadow transition"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create-account" element={<CreateAccount setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/account-settings" element={<AccountSettings user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
