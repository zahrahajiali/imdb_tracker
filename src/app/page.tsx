"use client";
import Navigation from "@/components/nav";
import { useGetMovies } from "@/services/movies/index";
import { ChangeEvent, useEffect, useState } from "react";
export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data } = useGetMovies({ title: title, date: date });
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div className="bg-[#181818] h-[100vh]">
      <header className="p-[1rem] bg-[#3a3a3a] flex items-center justify-end">
        <Navigation />
      </header>
      <div className="px-[2.5rem] py-[3.2rem]">
        <div className="flex  items-start w-[100%] justify-start ">
          <input
            className="bg-[#3a3a3a] outline-[#181818] text-[#ffffff] px-[0.5rem] h-[2.4rem] rounded-[0.5rem] "
            type="text"
            placeholder="Movie Name"
            value={title}
            onChange={handleYearChange}
          />
          <input
            className="bg-[#3a3a3a] outline-[#181818] text-[#ffffff] px-[0.5rem] ml-[2rem] h-[2.4rem] rounded-[0.5rem]"
            type="text"
            placeholder="year"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        {/* <table className="bg-[#3a3a3a] text-center rounded-[0.8rem] w-[100%] p-[1.5rem] text-[1.6rem]">
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
        </table> */}
      </div>
    </div>
  );
}
