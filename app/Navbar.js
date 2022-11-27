import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" bg-black p-5  flex items-center text-3xl md:text-4xl font-extrabold  justify-center ">
      <Link href="/">
        <p className=" text-center">Welcome To ActJar </p>
      </Link>
    </nav>
  );
};

export default Navbar;
