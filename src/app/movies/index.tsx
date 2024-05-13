import Image from "next/image";
import Navigation from "@/components/nav";
import { FaHeart, FaRegHeart } from "react-icons/fa";
export default function Home() {
  return (
    <div className="bg-[#181818] h-[100vh]">
      <header className="p-[1rem] bg-[#3a3a3a] flex items-center justify-end">
        <Navigation />
      </header>
      <div className="flex justify-center items-center h-[100%]">
        <table className="bg-[#3a3a3a] text-center rounded-[0.8rem] w-[100%] p-[1.5rem] text-[1.6rem]">
          <tr className="text-[#ffffff] flex items-center justify-between minH-[7rem] text-bold text-[2rem]">
            <thead className="flex justify-center w-[25%]">Id</thead>
            <thead className="flex justify-center w-[25%]">Title</thead>
            <thead className="flex justify-center w-[25%]">date</thead>
            <thead className="flex justify-center w-[25%]">favourite</thead>
          </tr>
          <tr className="text-[#ffffff] flex items-center w-[100%] minH-[5rem] justify-between">
            <td className="flex justify-center w-[25%]">id</td>
            <td className="flex justify-center w-[25%]">name</td>
            <td className="flex justify-center w-[25%]">date</td>
            <td className="flex justify-center w-[25%]">
              <FaRegHeart />
              <FaHeart />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
