"use client";
import Link from "next/link";
import apiConfig from "./apiConfigTmdb";
import Image from "next/image";
import { blurDataVal } from "./blurDataFile";

const ActorListComponent = ({ results }) => {
  return (
    <div className="px-10  ">
      <ul className="  py-16 grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-5  pt-10">
        {results?.map((item) => {
          const val = item.profile_path
            ? apiConfig.w500Image(item?.profile_path)
            : "https://raw.githubusercontent.com/CodingByGopal/React-MovieNuggets/master/src/images/male.png";

          return (
            <li key={item.id}>
              <Link href={`/${item?.id}`}>
                <Image
                  className="  rounded-xl mx-auto hover:opacity-80
              "
                  placeholder="blur"
                  blurDataURL={blurDataVal}
                  quality={70}
                  width={500}
                  height={750}
                  src={val}
                  alt={item.name}
                  priority={true}
                />

                <p className=" hover:text-slate-300 md:text-sm text-xs transition-all duration-200 text-center mt-3">
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
