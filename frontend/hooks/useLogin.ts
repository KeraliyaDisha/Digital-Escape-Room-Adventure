"use client";

import { useState, FormEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { SIGNIN_MUTATION } from "@/graphql/mutation";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await signin({
      variables: { email, password },
    });

    if (data?.signin?.token) {
      Cookies.set("token", data.signin.token, { expires: 7 });
      router.push("/home");
    } else {
      alert("Login failed: Invalid credentials.");
    }
  };

  return { email, setEmail, password, setPassword, handleSubmit, loading, error };
}
