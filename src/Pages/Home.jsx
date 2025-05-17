import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-[91vh] w-full bg-purple-100 text-black px-6 md:px-10 py-10 flex items-center justify-center select-none"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl w-full">
        <div className="flex flex-col justify-center md:text-left md:w-1/2 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            National Conference on Recent Advances <br />
            in{' '}
            <span className="text-indigo-600">
              Engineering, Management & Applied Sciences
            </span>
            <br />
            <span className="text-gray-800">RAEMAS 2025</span>
          </h2>

          <p className="text-lg md:text-xl font-semibold text-gray-700">
            June 20 & 21, 2025 — Airport Road, Kenjar, Mangaluru, Karnataka 574142
          </p>

          {isRegistered ? (
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-indigo-600 mt-6 py-3 w-full sm:w-1/2 md:w-1/3 text-base sm:text-lg md:text-xl border-2 font-semibold text-white rounded-lg cursor-pointer hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600 duration-300"
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => navigate("/register")}
              className="bg-indigo-600 mt-6 py-3 w-full sm:w-1/2 md:w-1/3 text-base sm:text-lg md:text-xl border-2 font-semibold text-white rounded-lg cursor-pointer hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600 duration-300"
            >
              Register Now
            </button>
          )}


        </div>

        <div className="flex justify-center items-center md:w-1/2">
          <img
            src="../imgs/hero2.png"
            alt="Conference illustration"
            className="scale-110"
          />
        </div>
      </div>
    </section>
  );
};
