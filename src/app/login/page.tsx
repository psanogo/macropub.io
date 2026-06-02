"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="bg-glow px-6 py-3 text-black font-bold"
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
}
``
