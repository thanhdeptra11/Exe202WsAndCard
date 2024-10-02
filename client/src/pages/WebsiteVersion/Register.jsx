import React, { useState } from "react";
import { IconEye,IconEyeOff } from '@tabler/icons-react';
import registerBanner from "../../assets/foodBanner.png"; // Ensure the image path is correct

const Register = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-start justify-center w-full pt-10 px-5 sm:px-0 min-h-screen ">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-5xl w-full">
        {/* Left Section: Banner */}
        <div className="hidden lg:block w-1/2">
          <img
            src={registerBanner}
            alt="Register Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Register Form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-xl text-gray-600 text-center">Đăng ký</p>

          {/* Email Field */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Địa chỉ Email <span className="text-red-500">*</span>
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400"
              type="email"
              required
            />
          </div>

          {/* Username Field */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tên người dùng <span className="text-red-500">*</span>
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400"
              type="text"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400"
                type={showPassword ? "text" : "password"}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IconEye stroke={1}/> : <IconEyeOff stroke={1.5}/>}
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Xác nhận mật khẩu <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400"
                type={showConfirmPassword ? "text" : "password"}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <IconEye stroke={1} /> : <IconEyeOff stroke={1.5}/>}
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-8">
            <button className="bg-red-400 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">
              Tạo tài khoản
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/login"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Đã có tài khoản?{" "}
              <span className="text-blue-700">Đăng nhập ngay</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
