"use client";

import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const DisplayName = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className="text-center mt-8">
        My name is Khursheed Ahmed. But people call me pro-programmer...
      </div>
      <div className="flex justify-center py-8">
        <button
          onClick={handleClick}
          className="border border-gray-400 rounded-lg p-2 bg-gradient-to-r from-purple-300 to-pink-500 opacity-65 hover:opacity-100 "
        >
          Click here to go back
        </button>
      </div>
    </>
  );
};

export default DisplayName;
