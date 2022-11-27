"use client";
import Link from "next/link";
import apiConfig from "./apiConfigTmdb";
import Image from "next/image";

const ActorListComponent = ({ results }) => {
  return (
    <div className="px-10 ">
      <h1 className=" opacity-90 text-4xl font-bold mt-6">
        Next.js13 Project{" "}
      </h1>

      <p className=" text-[#ccc] mt-6">
        This project uses Next.js 13-based server-side rendering. API Call has
        been made to showcase the list of top 20 trending actors on{" "}
        <a
          className=" text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.themoviedb.org/person"
        >
          TMDB
        </a>{" "}
        and when the user clicks on images/text, the full details page will be
        shown. This app uses an "app directory" based approach. You can read the
        official documentation of Next.js 13 by clicking{" "}
        <a
          className=" text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://beta.nextjs.org/docs/upgrade-guide"
        >
          here
        </a>
      </p>

      <ul className="  py-16 grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-5  pt-10">
        {results?.map((item) => {
          const val = item.profile_path
            ? apiConfig.w500Image(item?.profile_path)
            : "";

          return (
            <li key={item.id}>
              <Link href={`/${item?.id}`}>
                <Image
                  className=" rounded-xl mx-auto hover:opacity-80
              "
                  width={400}
                  height={400}
                  src={val}
                  alt={item.name}
                />

                <p className=" hover:text-slate-300 transition-all duration-200 text-center mt-3">
                  {" "}
                  {item.name}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActorListComponent;
