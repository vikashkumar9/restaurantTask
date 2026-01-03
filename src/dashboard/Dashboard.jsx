import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        In the Figma file, there is only an image of the dashboard and no actual
        design components.So i cannot get design and images, and clicking the
        button navigates to the next page.
      </div>
      <div className="min-h-screen flex items-center justify-center ">
        <button
          onClick={() => navigate("/meals/1")}
          className="
          px-6 py-3
          rounded-xl
          bg-gradient-to-r from-pink-500 to-orange-500
          text-white
          font-semibold
          shadow-lg
          hover:scale-105
          hover:shadow-xl
          transition-all
          duration-300
          active:scale-95
        "
        >
          🍽️ View Meal
        </button>
      </div>{" "}
    </>
  );
};

export default Dashboard;
