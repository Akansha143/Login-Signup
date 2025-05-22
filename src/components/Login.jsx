import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: "male",
    fullName: "Guest User",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-6 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-violet-600 dark:border-violet-400 rounded-xl p-8 w-full max-w-md shadow-lg dark:shadow-xl animate-slideInUp bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <label className="block mb-4">
          <span className="text-violet-600 dark:text-violet-400 font-semibold">
            Email address
          </span>
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

        <label className="block mb-6">
          <span className="text-violet-600 dark:text-violet-400 font-semibold">
            Password
          </span>
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

        <button
          type="submit"
          className="w-full py-3 bg-violet-600 hover:bg-violet-800 text-white rounded-lg font-bold transition-shadow shadow-md hover:shadow-xl cursor-pointer"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          Not registered yet?{" "}
          <Link
            to="/create-account"
            className="text-violet-600 dark:text-violet-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

