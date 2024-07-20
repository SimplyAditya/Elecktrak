import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "../assets/login-image.png";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="h-1/2 lg:h-screen lg:w-4/6 flex items-center justify-start bg-black"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-5xl lg:text-9xl px-6 lg:px-20 font-bold font-serif outfit-font">
          Electrak
        </h1>
      </div>
      <div className="h-1/2 lg:h-screen lg:w-2/6 flex flex-col justify-center items-center bg-black">
        <div className="w-full lg:w-4/5 p-6 lg:px-8">
          <h1 className="font-bold text-white text-3xl lg:text-5xl pb-4">
            Admin Login
          </h1>
          <h1 className="text-white text-sm lg:text-base pb-8">
            Enter your account details
          </h1>
          <input
            placeholder="Username"
            className="p-2 ps-0 mb-4 w-full bg-transparent border-b-2 focus:outline-none text-white"
          />
          <div className="relative w-full mb-4">
            <input
              placeholder="Password"
              className="p-2 ps-0 w-full bg-transparent border-b-2 focus:outline-none text-white"
              type={passwordVisible ? "text" : "password"}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <h1 className="text-themeBlue text-xs lg:text-sm pb-8">
            Forgot Password ?
          </h1>
          <button className="w-full p-2 rounded-xl bg-themeBlue text-white">
            Submit
          </button>
        </div>
        {/* <div className="text-white mb-4 lg:mb-12 flex justify-between items-center w-full lg:w-4/5 px-6 lg:px-8">
          <h1 className="text-xs lg:text-sm">Don't have an account?</h1>
          <button className="bg-themeBlue text-white py-1 px-3 rounded-lg">
            Register
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AdminLogin;
