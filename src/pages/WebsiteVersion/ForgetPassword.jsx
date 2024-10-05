// src/components/ForgetPassword.jsx

import React, { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import registerBanner2 from "../../assets/auth4.png"; // Đảm bảo đường dẫn hình ảnh đúng

const ForgetPassword = () => {
  const [step, setStep] = useState("email"); // Các bước: 'email', 'otp', 'resetPassword', 'success'
  const [email, setEmail] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm sinh OTP ngẫu nhiên
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // OTP 6 chữ số
    return otp;
  };

  // Hàm xử lý gửi OTP
  const handleSendOTP = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    // Kiểm tra định dạng email đơn giản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Vui lòng nhập một địa chỉ email hợp lệ.");
      return;
    }
    const otp = generateOTP();
    setGeneratedOTP(otp);
    console.log(`OTP đã được gửi tới email ${email}: ${otp}`); // Trong thực tế, OTP sẽ được gửi qua email
    setMessage("Đã gửi OTP đến email của bạn.");
    setStep("otp");
  };

  // Hàm xử lý xác thực OTP
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (enteredOTP === generatedOTP) {
      setMessage("OTP hợp lệ. Bạn có thể đổi mật khẩu.");
      setStep("resetPassword");
    } else {
      setError("OTP không hợp lệ. Vui lòng thử lại.");
    }
  };

  // Hàm xử lý đổi mật khẩu
  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (password !== confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }
    // Ở đây, chúng ta sẽ chỉ mô phỏng việc đổi mật khẩu thành công
    setMessage("Đổi mật khẩu thành công. Bạn có thể đăng nhập ngay bây giờ.");
    setStep("success");
    // Reset các trạng thái
    setEmail("");
    setGeneratedOTP("");
    setEnteredOTP("");
    setPassword("");
    setConfirmPassword("");
  };

  // Hàm điều hướng về trang chủ
  const handleBackToHome = () => {
    navigate("/"); // Redirect về trang chủ
  };

  // Hàm điều hướng tới trang đăng nhập
  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-start justify-center w-full pt-10 px-5 sm:px-0 min-h-screen">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-5xl w-full">
        {/* Left Section: Banner */}
        <div className="hidden lg:block w-1/2">
          <img src={registerBanner2} alt="Forgot Password Banner" className="w-full h-full object-cover" />
        </div>

        {/* Right Section: Forgot Password Form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-xl text-gray-600 text-center mt-10">Quên mật khẩu</p>

          {/* Step: Nhập Email */}
          {step === "email" && (
            <form onSubmit={handleSendOTP} className="mt-4">
              <div className="form-group">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Địa chỉ Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                />
              </div>

              <div className="mt-8">
                <button type="submit" className="bg-red-400 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">
                  Gửi OTP
                </button>
              </div>

              {/* <div className="mt-2">
                <button type="button" onClick={handleBackToHome} className="bg-gray-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-400">
                  Trở về trang chủ
                </button>
              </div> */}

              <div className="mt-4 flex items-center w-full text-center">
                <a href="/login" className="text-xs text-gray-500 capitalize text-center w-full">
                  Đã có tài khoản? <span className="text-blue-700">Đăng nhập ngay</span>
                </a>
              </div>
            </form>
          )}

          {/* Step: Nhập OTP */}
          {step === "otp" && (
            <form onSubmit={handleVerifyOTP} className="mt-4">
              <div className="form-group">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  OTP <span className="text-red-500">*</span>
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400"
                  type="text"
                  required
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                  placeholder="Nhập OTP đã nhận"
                />
              </div>

              <div className="mt-8">
                <button type="submit" className="bg-red-400 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">
                  Xác Thực OTP
                </button>
              </div>

              <div className="mt-2">
                <button type="button" onClick={() => setStep("email")} className="bg-gray-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-400">
                  Quay lại
                </button>
              </div>

              <div className="mt-4 flex items-center w-full text-center">
                <a href="/login" className="text-xs text-gray-500 capitalize text-center w-full">
                  Đã có tài khoản? <span className="text-blue-700">Đăng nhập ngay</span>
                </a>
              </div>
            </form>
          )}

          {/* Step: Đổi Mật Khẩu */}
          {step === "resetPassword" && (
            <form onSubmit={handleResetPassword} className="mt-4">
              {/* Mật khẩu mới */}
              <div className="form-group relative">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mật Khẩu Mới <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400 pr-10"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu mới"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                  </div>
                </div>
              </div>

              {/* Xác nhận mật khẩu */}
              <div className="form-group relative mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Xác Nhận Mật Khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-400 pr-10"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Xác nhận mật khẩu"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button type="submit" className="bg-red-400 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-300">
                  Đổi Mật Khẩu
                </button>
              </div>

              <div className="mt-2">
                <button type="button" onClick={() => setStep("otp")} className="bg-gray-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-400">
                  Quay lại
                </button>
              </div>

              <div className="mt-4 flex items-center w-full text-center">
                <a href="/login" className="text-xs text-gray-500 capitalize text-center w-full">
                  Đã có tài khoản? <span className="text-blue-700">Đăng nhập ngay</span>
                </a>
              </div>
            </form>
          )}

          {/* Step: Thành Công */}
          {step === "success" && (
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-green-600">Thành Công</h2>
              <p className="mt-2 text-gray-600">{message}</p>
              <button onClick={handleGoToLogin} className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-400">
                Đăng Nhập
              </button>
            </div>
          )}

          {/* Hiển thị thông báo thành công hoặc lỗi */}
          {message && step !== "success" && <p className="mt-4 text-green-500 text-center">{message}</p>}
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
