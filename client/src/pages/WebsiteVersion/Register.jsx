import React from "react";
import registerBanner from "../../assets/foodBanner.png"; // Update the image path accordingly

const Register = () => {
  return (
    <div className="flex bg-gradient-to-r from-red-400 via-orange-400 to-pink-500 items-center justify-center w-full py-2 px-5 sm:px-0 overflow-auto">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-md w-full">
        {/* <div
          className="hidden md:block lg:w-1/2 bg-cover bg-red-400"
          style={{
            backgroundImage: `url(${registerBanner})`,
          }}
        ></div> */}
        <div className="w-full p-8">
          <p className="text-xl text-gray-600 text-center">Create new account</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400" type="email" required />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400" type="email" required />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            </div>
            <input className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400" type="password" />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            </div>
            <input className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400" type="password" />
          </div>
          <div className="mt-8">
            <button className="bg-red-400 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">Register</button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a href="/login" className="text-xs text-gray-500 capitalize text-center w-full">
              Already have an account?
              <span className="text-blue-700"> Login now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
