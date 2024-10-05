import React, { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import loginBanner from "../../assets/foodBanner.png";
import loginBanner2 from "../../assets/auth4.png";
import logo from "../../assets/LOGO (1).svg";

const Login = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to navigate back to the home page
  const handleBackToHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="flex items-start justify-center w-full pt-10 px-5 sm:px-0 min-h-screen">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-5xl w-full">
        {/* Left Section: Banner */}
        <div className="hidden lg:block w-1/2">
          <img src={loginBanner2} alt="Login Banner" className="w-full h-full object-cover" />
        </div>
        {/* Right Section: Login Form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          {/*<div className="flex justify-center items-center">*/}
          {/*  <img src={logo} alt="Company logo" className="object-contain w-40" />*/}
          {/*</div>*/}
          <p className="text-xl text-gray-600 text-center mt-10">Chào mừng trở lại!</p>

          {/* Email Field */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Địa chỉ Email</label>
            <input className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700" type="email" required />
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
            </div>
            <div className="relative">
              <input className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700" type={showPassword ? "text" : "password"} required />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <IconEye stroke={1} /> : <IconEyeOff stroke={1.5} />}
              </div>
            </div>
            <a href="/forgetpassword" className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2">
              Quên mật khẩu?
            </a>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            <button className="bg-red-400 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">Đăng nhập</button>
          </div>

          {/* Google Sign-In Button */}
          <a href="#" className="flex items-center border border-gray-200 bg-white shadow-sm text-sm font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors mt-4">
            <div className="flex px-5 justify-center w-full py-2">
              <div className="min-w-[30px]">
                {/* Google Icon */}
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <div className="flex w-full justify-center">
                <h1 className="whitespace-nowrap text-gray-600 font-bold">Đăng nhập bằng Google</h1>
              </div>
            </div>
          </a>

          {/* Register Link */}
          <div className="mt-4 flex items-center w-full text-center">
            <a href="/register" className="text-xs text-gray-500 capitalize text-center w-full">
              Chưa có tài khoản? <span className="text-blue-700">Đăng ký ngay</span>
            </a>
          </div>

          {/* Back to Home Button */}
          <div className="mt-10 ">
            <button onClick={handleBackToHome} className="bg-gray-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-400">
              Trở về trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
