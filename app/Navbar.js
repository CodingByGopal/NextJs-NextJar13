import Link from "next/link";

const linkList = [
  {
    name: "getServerSideProps",
    path: "/",
  },
  {
    name: "getStaticProps with revalidate",
    path: "/getStaticProps-revalidate",
  },
  {
    name: "getStaticProps",
    path: "/getStaticProps",
  },
];

const Navbar = () => {
  return (
    <nav className=" text-[#eee] bg-black p-5 shadow-2xl shadow-black flex justify-between items-center ">
      <div className=" text-4xl font-bold">
        <Link href="/">NextJar13</Link>
      </div>

      <ul className=" flex  text-sm font-bold  gap-5 items-center justify-center">
        {linkList.map((item, index) => {
          return (
            <li className="" key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
