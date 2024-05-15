import Link from "next/link";

const navigation = () => {
  return (
    <nav className=" flex items-center justify-between w-[50%] sm:w-[20%]">
      <Link
        href="/"
        className="text-[1rem] text-[#ffffff] hover:text-[#09B77B] sm:text-[1.4rem]"
      >
        Home
      </Link>
      <Link
        href="/favourite"
        className="text-[1rem] text-[#ffffff] hover:text-[#09B77B] sm:text-[1.4rem]"
      >
        favourite
      </Link>
    </nav>
  );
};
export default navigation;
