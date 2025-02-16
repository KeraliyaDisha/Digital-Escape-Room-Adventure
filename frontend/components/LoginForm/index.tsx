/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, handleSubmit, loading, error } = useLogin();

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 mt-20">
      <h2 className="font-bold text-2xl text-gray-600 mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded p-2 mt-1"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded p-2 mt-1"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-800"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Login failed. Try again.</p>}
      <h6 className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="font-medium text-black hover:underline">
          Create one
        </Link>
      </h6>
    </div>
  );
}
