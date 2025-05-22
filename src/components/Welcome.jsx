import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-violet-50 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 relative overflow-hidden transition-all duration-500">
      {/* Soft Animated Background Shapes */}
      <div className="absolute w-80 h-80 bg-violet-200 dark:bg-violet-900 rounded-full opacity-20 blur-3xl top-[-6rem] left-[-6rem] animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-violet-300 dark:bg-violet-800 rounded-full opacity-10 blur-2xl bottom-[-6rem] right-[-6rem] animate-pulse delay-1000"></div>

      <div className="z-10 w-full max-w-xl border-2 border-violet-600 dark:border-violet-400 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 animate-fadeInUp transition-all duration-500">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-700 dark:text-violet-300 mb-4 leading-tight tracking-tight">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Join PopX to simplify your workflow and scale your business with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => navigate("/create-account")}
            className="cursor-pointer w-full sm:w-auto px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 dark:hover:bg-violet-500 transition-all duration-300"
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="cursor-pointer w-full sm:w-auto px-6 py-3 border-2 border-violet-600 text-violet-700 dark:text-violet-300 dark:border-violet-400 font-semibold rounded-lg hover:bg-violet-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Already Registered? Login
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
