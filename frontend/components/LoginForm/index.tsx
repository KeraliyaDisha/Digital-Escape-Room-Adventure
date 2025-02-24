/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, handleSubmit, loading, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-sm mx-auto mt-40 backdrop-blur-lg p-6 rounded-lg border border-white/20">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-3 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-3">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full pr-10 mb-4 p-2 rounded bg-black bg-opacity-50 border border-[#387478] text-white"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[35px] text-gray-600"
            tabIndex={-1}
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-[#3b6b6f] text-white font-bold py-2 rounded hover:bg-[#559196] transition-all"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 mt-2 text-center">
          Login failed. Try again.
        </p>
      )}
      <p className="text-center mt-4 text-sm text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-[#387478] hover:text-white font-medium"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}
