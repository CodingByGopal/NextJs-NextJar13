import Link from "next/link";
import { use } from "react";
import apiConfig from "../../components/apiConfigTmdb";

const getActor = async (id) => {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiConfig.apiKey}&language=en-US`,
      { cache: "no-store" }
    )
  ).json();
};

export default function GetSingleActor({ params }) {
  const { actorId } = params;
  const results = use(getActor(actorId));
  const { name, biography, place_of_birth } = results;

  return (
    <div className="  h-screen px-5">
      <div className=" max-w-screen-xl  mx-auto bg-[#222] shadow-2xl shadow-black rounded-xl  md:mt-28 mt-10 py-20 px-10 flex flex-col justify-center items-center">
        <h1 className=" text-center md:text-5xl text-3xl font-extrabold mb-4">
          {name}
        </h1>
        <p className=" text-sm opacity-80 text-center mb-4">{biography}</p>
        <p className="text-sm opacity-80 text-center">
          Place of birth : {place_of_birth ? place_of_birth : "Not Available"}
        </p>
        <Link href="/">
          <button className=" mt-5 px-4 py-1  text-white bg-red-600 hover:bg-red-700 transition-all delay-200  rounded-full">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
}
