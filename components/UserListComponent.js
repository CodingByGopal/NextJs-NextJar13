"use client";

import { useRouter } from "next/navigation";
import React from "react";

const UserListComponent = ({ data, clickable }) => {
  const router = useRouter();
  return (
    <div className="px-10 pt-10 pb-16 text-[#ddd] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data.map((item) => {
        const getId = () => {
          router.push(`/getStaticProps-revalidate/${item.id.toString()}`);
        };
        return (
          <div
            onClick={clickable ? getId : null}
            className="
        bg-black  relative  hover:bg-white hover:text-black rounded-xl shadow-2xl cursor-pointer transition-all duration-200 shadow-black p-8 "
            key={item.id}
          >
            <h1 className=" mb-2  font-bold text-xl ">
              Name: {item.name.substring(0, 28) || item.namely.substring(0, 28)}
            </h1>
            <div className=" opacity-80 text-sm flex gap-1 flex-col">
              {item.username && <p>Username : {item.username}</p>}
              {item.email && <p>Email : {item.email}</p>}
              {item.company && <p>Company : {item.company.name}</p>}
              {item.body && <p>Comments : {item.body.substring(0, 149)}</p>}
            </div>
            {item.body && (
              <ul className=" p-1  text-xs md:gap-2 gap-1 flex items-end  justify-end md:mt-3 mt-6">
                <li> ❣️2k</li>
                <li>👍🏻502</li>
                <li>💡600</li>
              </ul>
            )}
            {!item.body && (
              <p className=" p-2 text-sm bg-[#111] absolute top-3 rounded-full   right-3">
                📌
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserListComponent;
