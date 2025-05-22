import React, { useState ,useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CreateAccount({ setUser }) {
  const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
  

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "no",
    gender: "male",
  });
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);
    useEffect(() => {
      const html = document.documentElement;
      if (darkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgencyChange = (e) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      fullName: formData.fullName,
      email: formData.email,
      gender: formData.gender,
    });
    navigate("/account-settings");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-2">

      <form
  onSubmit={handleSubmit}
  className="border-2 border-violet-600 dark:border-violet-400 rounded-xl p-6 w-full max-w-lg shadow-lg animate-slideInUp bg-white dark:bg-gray-900"
>

        <h2 className="text-3xl font-bold text-violet-600 mb-4">
          Create your <br />
          PopX account
        </h2>

        <label className="block mb-3">
          <span className="text-violet-600 font-semibold">Full Name*</span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Full Name"
             className="mt-1 block w-full rounded-md border border-violet-400 dark:border-violet-600 bg-white dark:bg-gray-900 px-3 py-2 placeholder-gray-400 dark:placeholder-white text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-colors duration-300"

          />
        </label>

        <label className="block mb-3">
          <span className="text-violet-600 font-semibold">Phone number*</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone number"
             className="mt-1 block w-full rounded-md border border-violet-400 dark:border-violet-600 bg-white dark:bg-gray-900 px-3 py-2 placeholder-gray-400 dark:placeholder-white text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-colors duration-300"
          />
        </label>

        <label className="block mb-3">
          <span className="text-violet-600 font-semibold">Email address*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email address"
             className="mt-1 block w-full rounded-md border border-violet-400 dark:border-violet-600 bg-white dark:bg-gray-900 px-3 py-2 placeholder-gray-400 dark:placeholder-white text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-colors duration-300"
          />
        </label>

        <label className="block mb-3">
          <span className="text-violet-600 font-semibold">Password*</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
             className="mt-1 block w-full rounded-md border border-violet-400 dark:border-violet-600 bg-white dark:bg-gray-900 px-3 py-2 placeholder-gray-400 dark:placeholder-white text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-colors duration-300"
          />
        </label>

        <label className="block mb-3">
          <span className="text-violet-600 font-semibold">Company name*</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company name"
             className="mt-1 block w-full rounded-md border border-violet-400 dark:border-violet-600 bg-white dark:bg-gray-900 px-3 py-2 placeholder-gray-400 dark:placeholder-white text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-400 transition-colors duration-300"
          />
        </label>

        <div className="mb-4">
          <span className="text-violet-600 font-semibold block mb-2">
            Are you an Agency?*
          </span>
          <div className="flex space-x-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleAgencyChange}
                className="form-radio text-violet-600"
              />
              <span className="ml-2 text-violet-600">Yes</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleAgencyChange}
                className="form-radio text-violet-600"
              />
              <span className="ml-2 text-violet-600">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-violet-600 hover:bg-violet-800 text-white rounded-lg font-bold transition-shadow shadow-md hover:shadow-xl cursor-pointer"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
