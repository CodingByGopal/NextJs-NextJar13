import Link from "next/link";
import { use } from "react";
import apiConfig from "../../components/apiConfigTmdb";
import fetchData from "../../components/dataFetcher";

export default function GetSingleActor({ params }) {
  const { actorId } = params;
  const results = use(
    fetchData(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiConfig.apiKey}&language=en-US`,
      { cache: "no-store" }
    )
  );
  const { name, place_of_birth } = results;

  return (
    <section className=" flex justify-center items-center  h-screen px-5 bg-gradient-to-t from-[#121212] to-[#ccc] ">
      <div className=" moveBottomAnimation relative max-w-screen-xl  mx-auto bg-[#222] shadow-2xl shadow-black rounded-xl    p-10 flex flex-col justify-center items-center">
        <h1 className=" text-center md:text-5xl text-3xl font-extrabold mb-4">
          {name}
        </h1>

        <p className="text-sm opacity-80 text-center">
          Place of birth : {place_of_birth ? place_of_birth : "Not Available"}
        </p>

        <Link href="/">
          <button className=" mt-5 px-4 py-1  text-white bg-red-600 hover:bg-red-700 transition-all delay-200  rounded-full">
            Back to home page
          </button>
        </Link>
      </div>
    </section>
  );
}
