import React from "react";

const ErrorCustom = ({ onClickHandler }) => {
  return (
    <div className=" flex justify-center  gap-5 items-center h-[100vh]">
      <p className="  text-2xl font-bold">An Error Occurred</p>
      <button
        className=" text-slate-50 rounded-full bg-slate-800 px-4 py-1"
        onClick={onClickHandler}
      >
        Reset error boundary
      </button>
    </div>
  );
};

export default ErrorCustom;
