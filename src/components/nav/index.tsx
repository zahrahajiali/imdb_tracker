import Link from "next/link";

const navigation = () => {
  return (
    <nav className="w-[30%] flex items-center justify-between">
      <Link
        href="/"
        className="text-[1.2rem] text-[#ffffff] hover:text-[#09B77B]"
      >
        Home
      </Link>
      <Link
        href="/aboutus"
        className="text-[1.2rem] text-[#ffffff] hover:text-[#09B77B] "
      >
        About us
      </Link>
      <Link
        href="/favourite"
        className="text-[1.2rem] text-[#ffffff] hover:text-[#09B77B]"
      >
        favourite
      </Link>
    </nav>
  );
};
export default navigation;
