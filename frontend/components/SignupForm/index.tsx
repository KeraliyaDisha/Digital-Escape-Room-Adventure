 "use client";

import Link from "next/link";
import { useState } from "react";
import { useSignup } from "@/hooks/useSignup";

export default function SignupForm() {
  const { formData, handleChange, handleSubmit, loading, error } = useSignup();
  const { firstName, lastName, email, password, confirmPassword } = formData;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-sm mx-auto mt-40 bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-indigo-600 text-white"
            required
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-indigo-600 text-white"
            required
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-indigo-600 text-white"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        {/* Password Field */}
        <div className="relative mb-3">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            className="w-full pr-10 mb-3 p-2 rounded bg-black bg-opacity-50 border border-indigo-600 text-white"
            required
            value={password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300"
            tabIndex={-1}
          >
            {showPassword ? (
              // Eye-off icon (password visible)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.953 9.953 0 012.317-3.132M3 3l18 18"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.88 9.88a3 3 0 104.24 4.24"
                />
              </svg>
            ) : (
              // Eye icon (password hidden)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Confirm Password Field */}
        <div className="relative mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full pr-10 mb-4 p-2 rounded bg-black bg-opacity-50 border border-indigo-600 text-white"
            required
            value={confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300"
            tabIndex={-1}
          >
            {showConfirmPassword ? (
              // Eye-off icon (password visible)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.953 9.953 0 012.317-3.132M3 3l18 18"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.88 9.88a3 3 0 104.24 4.24"
                />
              </svg>
            ) : (
              // Eye icon (password hidden)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition-all"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 mt-2 text-center">
          Signup failed. Try again.
        </p>
      )}
      <p className="text-center mt-4 text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/auth/signin"
          className="text-indigo-400 hover:text-white font-medium"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
