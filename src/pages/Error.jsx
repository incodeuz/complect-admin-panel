import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="font-bold text-[30px] text-center">4🥸4 Page not found</h1>
      <button
        onClick={() => navigate("/")}
        className="rounded-md bg-indigo-400 text-white px-3 py-[5px]"
      >
        ← Go back
      </button>
    </div>
  );
};

export default Error;
