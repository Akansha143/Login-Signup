import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
// import { useDarkMode } from '../contexts/ThemeContext';
const malePic = "https://cdn-icons-png.flaticon.com/512/194/194938.png";
const femalePic = "https://cdn-icons-png.flaticon.com/512/194/194935.png";

export default function AccountSettings({ user }) {
    // const { darkMode, setDarkMode } = useDarkMode();
  const { fullName, email, gender } = user;

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [confirmDeactivate, setConfirmDeactivate] = useState(false);

  // Initialize darkMode based on current html class on mount
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  setDarkMode(savedTheme === "dark");
}, []);


  // Add or remove 'dark' class on <html> based on darkMode state
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12 animate-fadeIn">
      <div className="w-full max-w-6xl bg-violet-50 dark:bg-gray-800 rounded-3xl shadow-2xl p-10 transition-colors duration-500">
        <h1 className="text-4xl font-extrabold text-violet-800 dark:text-violet-300 mb-6 text-center tracking-wide">
          Account Settings
        </h1>
        <hr className="border-violet-300 dark:border-violet-600 mb-10 w-1/3 mx-auto" />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Profile Card */}
          <div className="md:w-1/3 flex flex-col items-center bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={gender === "female" ? femalePic : malePic}
              alt="Profile"
              className="w-32 h-32 rounded-full border-8 border-violet-600 dark:border-violet-400 mb-6 shadow-lg"
            />
            <h2 className="text-2xl font-semibold text-violet-700 dark:text-violet-300 mb-1 text-center">{fullName || "Guest User"}</h2>
            <p className="text-violet-600 dark:text-violet-400 mb-4 text-center select-text">{email || "guestuser@example.com"}</p>

            <p className="text-gray-600 dark:text-gray-300 mt-4 text-center text-sm leading-relaxed px-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </p>

            {/* Achievements Section */}
            <div className="mt-8 w-full">
              <h3 className="text-violet-700 dark:text-violet-300 text-xl font-semibold mb-4 text-center">
                Achievements
              </h3>

              <div className="space-y-4">
                <AchievementBadge title="Profile Completion" progress={80} />
                <AchievementBadge title="Posts Published" progress={55} />
                <AchievementBadge title="Followers" progress={90} />
              </div>
            </div>
          </div>

          {/* Right More Settings Panel */}
          <div className="md:w-2/3 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl flex flex-col max-h-[600px] overflow-y-auto transition-colors duration-500">
            <h3 className="text-violet-700 dark:text-violet-300 text-3xl font-bold mb-8 border-b border-violet-300 dark:border-violet-600 pb-3 select-none">
              More Settings
            </h3>

            {/* Dark Mode Toggle */}
            <SettingToggle
              label="Dark Mode"
              enabled={darkMode}
              onToggle={() => setDarkMode(!darkMode)}
              description={darkMode ? "Dark mode is enabled." : "Dark mode is disabled."}
            />

            {/* Language Selector */}
            <div className="mb-8">
              <label
                htmlFor="language-select"
                className="block text-violet-700 dark:text-violet-300 font-semibold mb-2"
              >
                Preferred Language
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border border-violet-300 dark:border-violet-600 rounded-md p-3 text-violet-700 dark:text-violet-300 font-medium focus:outline-none focus:ring-4 focus:ring-violet-400 transition"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Chinese</option>
              </select>
              <p className="text-gray-500 dark:text-gray-300 mt-1 text-sm select-text">
                Selected language: <span className="font-semibold">{language}</span>
              </p>
            </div>

            {/* Email Notifications */}
            <SettingToggle
              label="Email Notifications"
              enabled={emailNotifications}
              onToggle={() => setEmailNotifications(!emailNotifications)}
              description={emailNotifications ? "You will receive email notifications." : "Email notifications are off."}
            />

            {/* Profile Visibility */}
            <SettingToggle
              label="Profile Visibility"
              enabled={profileVisibility}
              onToggle={() => setProfileVisibility(!profileVisibility)}
              description={profileVisibility ? "Your profile is visible to others." : "Your profile is hidden."}
            />

            {/* Update Password Button */}
            <button
              type="button"
              className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-violet-500"
              onClick={() => alert("Password update coming soon!")}
            >
              Update Password
            </button>

            {/* Account Deactivation */}
            <div className="border border-red-400 bg-red-50 dark:bg-red-900 rounded-xl p-6 mt-10 text-center select-text">
              <h4 className="text-red-600 dark:text-red-400 font-bold text-xl mb-3">Deactivate Account</h4>
              <p className="text-red-500 dark:text-red-300 mb-4">
                Deactivating your account will disable your profile and remove your data from public view.
              </p>
              {!confirmDeactivate ? (
                <button
                  onClick={() => setConfirmDeactivate(true)}
                  className="px-6 py-3 bg-red-500 dark:bg-red-700 text-white rounded-full font-semibold shadow-md hover:bg-red-600 dark:hover:bg-red-800 transition"
                >
                  Deactivate Account
                </button>
              ) : (
                <>
                  <p className="mb-4 text-red-600 dark:text-red-400 font-semibold">
                    Are you sure? This action cannot be undone.
                  </p>
                  <div className="flex justify-center gap-6">
                    <button
                      onClick={() => alert("Account deactivated!")}
                      className="px-5 py-3 bg-red-700 dark:bg-red-900 text-white rounded-full font-bold hover:bg-red-800 dark:hover:bg-red-950 transition"
                    >
                      Yes, Deactivate
                    </button>
                    <button
                      onClick={() => setConfirmDeactivate(false)}
                      className="px-5 py-3 border border-red-500 dark:border-red-700 text-red-600 dark:text-red-400 rounded-full font-semibold hover:bg-red-100 dark:hover:bg-red-800 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingToggle({ label, enabled, onToggle, description }) {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-center justify-between mb-1">
        <span className="text-violet-700 dark:text-violet-300 font-semibold text-lg">{label}</span>
        <button
          onClick={onToggle}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            enabled ? "bg-violet-600" : "bg-violet-300"
          }`}
          aria-label={`Toggle ${label}`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
              enabled ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-300 text-sm select-text">{description}</p>
    </div>
  );
}

function AchievementBadge({ title, progress }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-violet-800 dark:text-violet-300 font-semibold">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-violet-200 dark:bg-violet-700 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className="bg-violet-600 dark:bg-violet-400 h-4 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
