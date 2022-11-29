import React from "react";

const UserListComponent = ({ data }) => {
  return (
    <div className="px-10 pt-10 pb-16 text-[#ddd] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data.map((item) => {
        return (
          <div
            className=" rounded-xl shadow-2xl cursor-pointer transition-all shadow-black p-5 hover:bg-white hover:text-black  bg-black"
            key={item.id}
          >
            <h1 className=" mb-2  font-bold text-xl ">Name: {item.name}</h1>
            <div className=" opacity-80 text-sm flex gap-1 flex-col">
              <p>Username : {item.username}</p>
              <p>Email : {item.email}</p>
              <p>Company : {item.company.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserListComponent;
