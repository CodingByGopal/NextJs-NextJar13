"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const linkList = [
  {
    name: "getServerSideProps",
    path: "/",
  },

  {
    name: "getStaticProps",
    path: "/getStaticProps",
  },
  {
    name: "getStaticProps ISR",
    path: "/getStaticProps-revalidate",
  },
  {
    name: "ClientSide Fetching",
    path: "/clientside-fetching",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = <FontAwesomeIcon icon={faBars} />;
  const close = <FontAwesomeIcon icon={faXmark} />;

  return (
    <div className="fixed  shadow-2xl shadow-black  h-20 w-full z-50  bg-[#121212]">
      <div className=" px-8 py-5 ">
        <div className="flex  justify-between items-center">
          <Link href="/">
            <p className=" text-4xl  font-bold">NextJar13</p>
          </Link>

          <div className=" text-2xl" onClick={() => setOpen(!open)}>
            {open ? close : menu}
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "-translate-x-full" : ""
        } shadow-black shadow-2xl  lg:w-1/4 md:w-2/5 sm:w-1/2  w-3/5 h-screen   fixed  left-full    bg-[#121212]  transition-all duration-300`}
      >
        <ul className=" md:px-6 px-3 shadow-black shadow-2xl flex flex-col md:pt-20 pt-14   justify-center gap-6 text-white">
          {linkList.map((item, i) => {
            return (
              <Link key={i} onClick={() => setOpen(false)} href={item.path}>
                <li className=" px-5 rounded-full  border text-base hover:bg-white hover:text-black transition-all cursor-pointer duration-300   ">
                  <div className="  flex justify-center items-center md:p-3 p-2">
                    <p>{item.name}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
