import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAutHook";

const RegisterPage = () => {
  const {
    setShowPasswordRegister,
    showPasswordRegister,
    navigate,
    handleSubmit,
    register,
    errors,
    registerForm,
  } = useAuth();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Image */}
      <div className="hidden lg:block">
        <img
          src="https://images.pexels.com/photos/5868119/pexels-photo-5868119.jpeg"
          alt="Fashion Model"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900">Create Account</h1>

          <p className="mt-2 text-gray-500">Join us and start shopping today</p>

          <form onSubmit={handleSubmit(registerForm)} className="mt-10 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPasswordRegister ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full border-b border-gray-300 py-3 pr-10 outline-none focus:border-black transition"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPasswordRegister(!showPasswordRegister)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  {showPasswordRegister ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Create Account
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="font-semibold text-black cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
