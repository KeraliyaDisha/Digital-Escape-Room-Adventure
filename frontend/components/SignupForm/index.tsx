"use client";
import { useState } from "react";
import Link from "next/link";
import { useSignup } from "@/hooks/useSignup";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignupForm() {
  const { formData, handleChange, handleSubmit, loading, error } = useSignup();
  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Separate state for each field
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="max-w-sm mx-auto mt-40 mb-20 backdrop-blur-lg p-6 rounded-lg border border-white/20">
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
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
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
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
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
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
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
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full pr-10 mb-3 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
            required
            value={password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-600"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>
        {/* Confirm Password Field */}
        <div className="relative mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full pr-10 mb-4 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
            required
            value={confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-600"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-[#3b6b6f] text-white font-bold py-2 rounded hover:bg-[#559196] transition-all"
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
          className="text-[#3b6b6f] hover:text-white font-medium"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
