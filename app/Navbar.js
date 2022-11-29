import Link from "next/link";

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
  return (
    <nav className="z-50 fixed w-full text-[#eee] bg-black p-5 shadow-2xl  shadow-[#111] flex justify-between items-center ">
      <div className=" md:text-4xl text-3xl font-bold">
        <Link href="/">NextJar13</Link>
      </div>

      <ul className=" flex  text-sm font-bold  gap-5 items-center justify-center">
        {linkList.map((item, index) => {
          return (
            <li className="  hover:opacity-80" key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
