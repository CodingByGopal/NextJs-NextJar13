import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className=" shadow-2xl shadow-black  text-white flex justify-center items-center bg-black p-10">
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
