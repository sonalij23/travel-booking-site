import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { FaRegCheckCircle } from "react-icons/fa";


const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-center my-20">
        <div >
        <FaRegCheckCircle className="mx-auto text-6xl text-green-700" />

          <h1 className="my-8 text-6xl ">Thank you</h1>
          <h4 className="my-2 text-3xl font-semibold ">Your tour is booked</h4>
          <button
            className="px-2 py-2 my-5 text-sm text-white rounded-full md:px-5 md:py-2 md:text-base bg-primary-color"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
