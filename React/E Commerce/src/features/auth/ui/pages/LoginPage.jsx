import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAutHook";

const LoginPage = () => {
  const {
    showPasswordLogin,
    setShowPasswordLogin,
    navigate,
    handleSubmit,
    register,
    errors,
    reset,
    loginForm,
  } = useAuth();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Model Image */}
      <div className="hidden lg:block">
        <img
          src="https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg"
          alt="Fashion Model"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

          <p className="mt-2 text-gray-500">Sign in to your account</p>

          <form onSubmit={handleSubmit(loginForm)} className="mt-10 space-y-6">
            {/* Username */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Username
              </label>

              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
                type="text"
                placeholder="Enter your username"
                className={`w-full border-b border-gray-300 py-3 outline-none focus:border-black transition ${
                  errors.username
                    ? "border-red-500"
                    : "border-gray-300 focus:border-black"
                }`}
              />

              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type={showPasswordLogin ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full border-b border-gray-300 py-3 pr-10 outline-none focus:border-black transition errors.password
          ? "border-red-500"
          : "border-gray-300 focus:border-black"
      }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  {showPasswordLogin ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Sign In
            </button>

            <p className="text-center text-gray-500">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="font-semibold text-black cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
