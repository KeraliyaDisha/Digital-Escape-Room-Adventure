"use client";

import Link from "next/link";
import { useSignup } from "@/hooks/useSignup";

export default function SignupForm() {
  const { formData, handleChange, handleSubmit, loading, error } = useSignup();
  const { firstName, lastName, email, password, confirmPassword } = formData;

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 mt-16">
      <h2 className="font-bold text-2xl text-gray-600 mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full border rounded p-2 mt-1"
            required
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className="w-full border rounded p-2 mt-1"
            required
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border rounded p-2 mt-1"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full border rounded p-2 mt-1"
            required
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border rounded p-2 mt-1"
            required
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-800"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Signup failed. Try again.</p>}
      <h6 className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/auth/signin" className="font-medium text-black hover:underline">
          Sign in
        </Link>
      </h6>
    </div>
  );
}
