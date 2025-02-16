"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { SIGNUP_MUTATION } from "@/graphql/mutation";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      alert("All fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const { data, errors } = await signup({
        variables: { firstName, lastName, email, password },
      });
  
      if (errors) {
        console.error("GraphQL Errors:", errors);
        alert("Signup failed: " + errors[0]?.message);
        return;
      }
  
      console.log("Signup response:", data);
  
      if (data?.signup?.token) {
        alert("Signup successful! Redirecting to login...");
        router.push("/auth/signin");
      }
    } catch (err: any) {
      console.error("Signup failed:", err);
      alert(`Signup failed: ${err.message}`);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 mt-16">
      <h2 className="font-bold text-2xl text-gray-600 mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full border rounded p-2 mt-1"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full border rounded p-2 mt-1"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded p-2 mt-1"
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded p-2 mt-1"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <Link href="/login" className="font-medium text-black hover:underline">
          Sign in
        </Link>
      </h6>
    </div>
  );
}
