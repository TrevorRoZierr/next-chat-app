"use client";

import { signIn, signOut } from "next-auth/react";

export function Logout() {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 hover:text-black text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}

export function NavLogin() {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg bg-green-900 px-8 py-3 text-center text-sm font-semibold text-white ring-green-300 transition duration-100 hover:bg-green-500 hover:text-black md:text-base"
      onClick={() => signIn()}
    >
      Login
    </button>
  );
}

export function MainLogin() {
  return (
    <button
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-900 px-8 py-3 text-center text-sm font-semibold text-white ring-green-300 transition duration-100 hover:bg-green-500 hover:text-black md:text-base"
      onClick={() => signIn()}
    >
      Login with Github
    </button>
  );
}