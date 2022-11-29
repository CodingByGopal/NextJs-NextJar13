import React from "react";

const Details = ({ text, description }) => {
  return (
    <div className="moveBottomAnimation text-[#eee]  px-10  ">
      <h1 className=" text-center md:text-3xl text-xl font-bold mt-6">
        {text}
      </h1>
      <p className=" mt-5 italic md:text-sm text-xs text-center">
        {description}
      </p>
    </div>
  );
};

export default Details;
