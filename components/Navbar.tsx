import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex items-center justify-between p-2 bg-white">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img
            src="logo.jpg"
            alt="musclegrow-logo"
            className="w-10 cursor-pointer"
          />
          <a href="/" className="text-lg font-bold">
            MuscleGrow
          </a>
        </div>
        <a href="/" className="hover:text-gray-500">
          Home
        </a>
        <a href="#Products" className="hover:text-gray-500">
          Products
        </a>
        <a href="#About-us" className="hover:text-gray-500">
          About us
        </a>
        <a href="#footer" className="hover:text-gray-500">
          Contact
        </a>
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="px-2 py-2 transition-colors duration-300 ease-in-out hover:text-blue-500">
          <SignInButton />
        </div>
        <div className="px-2 py-2 transition-colors duration-300 ease-in-out hover:text-green-500">
          <SignUpButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
