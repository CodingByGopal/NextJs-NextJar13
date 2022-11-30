"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
const linkList = [
  {
    name: "GetServerSideProps",
    path: "/",
  },

  {
    name: "GetStaticProps",
    path: "/getStaticProps",
  },
  {
    name: "GetStaticProps ISR",
    path: "/getStaticProps-revalidate",
  },
  {
    name: "ClientSide Fetching",
    path: "/clientside-fetching",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menu = <FontAwesomeIcon icon={faBars} />;
  const close = <FontAwesomeIcon icon={faXmark} />;

  return (
    <div className="fixed  shadow-2xl shadow-black  h-20 w-full z-50  bg-[#121212]">
      <div className=" px-8 py-5 ">
        <div className="flex  justify-between items-center">
          <Link href="/">
            <p className=" md:text-4xl text-xl  font-bold">
              NextJar<span className=" text-red-600 font-extrabold">13</span>
            </p>
          </Link>

          <div className=" md:text-2xl text-lg" onClick={() => setOpen(!open)}>
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
                <li
                  className={`${
                    pathname === item.path
                      ? " bg-red-600  cursor-not-allowed border-red-600 "
                      : "hover:bg-white hover:text-black cursor-pointer"
                  }  px-2  rounded  border md:text-sm text-xs  transition-all  duration-300`}
                >
                  <div className="  flex justify-center items-center md:p-3 sm:p-2 p-1 ">
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
