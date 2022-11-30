import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className=" bg-[#121212]  shadow-2xl shadow-black max-w-screen-2xl mx-auto  text-white flex justify-center items-center p-7">
      <p>
        &copy; {fullYear} NextJar13 by{" "}
        <a
          className=" text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/CodingByGopal"
        >
          Gopal Ji
        </a>
      </p>
    </div>
  );
};

export default Footer;
