"use client";

import { useState, FormEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { SIGNUP_MUTATION } from "@/graphql/mutation";

export function useSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { data, errors } = await signup({
      variables: { firstName, lastName, email, password },
    });

    if (errors) {
      if (errors[0]?.message.toLowerCase().includes("already exist")) {
        alert("User already exists. Please sign in instead.");
      } else {
        alert("Signup failed: " + errors[0]?.message);
      }
      return;
    }

    if (data?.signup?.token) {
      router.push("/auth/signin");
    }
  };

  return { formData, handleChange, handleSubmit, loading, error };
}
