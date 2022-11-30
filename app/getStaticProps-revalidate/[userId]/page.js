import { use } from "react";
import fetchData from "../../../components/dataFetcher";

const getUserData = ({ params }) => {
  const { userId } = params;

  const item = use(
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      next: { revalidate: 2 },
    })
  );

  return (
    <div className=" px-5 h-screen bg-gradient-to-t from-[#121212] to-[#ccc]  flex  items-center ">
      <div className="p-14 moveBottomAnimation relative flex justify-center items-center flex-col max-w-screen-xl mx-auto bg-black shadow-2xl shadow-black rounded-xl">
        <h1 className=" text-center mb-5  font-bold md:text-4xl text-xl ">
          Name: {item.name.substring(0, 28)}
        </h1>
        <div className=" opacity-80 md:text-lg text-xs text-center flex gap-1 flex-col">
          {item.username && <p>Username : {item.username}</p>}
          {item.email && <p>Email : {item.email}</p>}
          {item.company && <p>Company : {item.company.name}</p>}
        </div>
        <p className=" p-2 text-sm bg-[#111] absolute top-3 rounded-full   right-3">
          📌
        </p>
      </div>
    </div>
  );
};

export default getUserData;

export async function generateStaticParams() {
  const data = await fetchData(`https://jsonplaceholder.typicode.com/users`);

  return data?.map((item) => ({
    userId: item.id.toString(),
  }));
}
