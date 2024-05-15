"use client";
import { useGetMovies } from "@/services/movies/index";
import { ChangeEvent, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDebounce } from "@/hooks/common/useDebounce";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [fav, setFav] = useState<boolean>(false);
  const titleDebounce = useDebounce<string>(title, 500);
  const dateDebounce = useDebounce<string>(date, 500);
  const { data } = useGetMovies({
    t: titleDebounce,
    y: dateDebounce,
  });

  //#region input handler

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  //#endregion

  //#region favourite
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(data?.Title)) {
      setFav(true);
    }
  }, [data]);

  const addToFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(data?.Title);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFav(true);
  };

  const removeFromFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = favorites.filter(
      (movie: string) => movie !== data?.Title
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFav(false);
  };
  //#endregion

  return (
    <div className="bg-[#181818] h-[100vh] w-[100%]">
      <div className="px-[2.5rem] py-[3.2rem]">
        <div className="flex flex-row items-start w-[100%] justify-between md:w-[30%]">
          <input
            className="bg-[#3a3a3a] outline-[#181818] text-[#ffffff] px-[0.5rem] h-[2.4rem] rounded-[0.5rem] w-[45%]"
            type="text"
            placeholder="Movie Name"
            value={title}
            onChange={handleYearChange}
          />
          <input
            className="bg-[#3a3a3a] outline-[#181818] text-[#ffffff] px-[0.5rem] h-[2.4rem] rounded-[0.5rem] w-[45%]"
            type="text"
            placeholder="year"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        {data ? (
          <table className="mt-[3.5rem] bg-[#3a3a3a] text-center rounded-[0.8rem] w-[100%] p-[1.5rem] text-[1.6rem]">
            <tr className="text-[#ffffff] flex items-center justify-between h-[7rem] text-[2rem]">
              <thead className="flex justify-center w-[25%] text-[0.8rem] sm:text-[1.4rem]">
                Title
              </thead>
              <thead className="flex justify-center w-[25%] text-[0.8rem] sm:text-[1.4rem]">
                Year
              </thead>
              <thead className="flex justify-center w-[25%] text-[0.8rem] sm:text-[1.4rem]">
                Director
              </thead>
              <thead className="flex justify-center w-[25%] text-[0.8rem] sm:text-[1.4rem]">
                Favourite
              </thead>
            </tr>
            <tr className="text-[#ffffff] flex items-center w-[100%] h-[5rem] justify-between">
              <td className="flex justify-center w-[25%] text-[0.5rem] sm:text-[1.2rem]">
                {data?.Title}
              </td>
              <td className="flex justify-center w-[25%] text-[0.5rem] sm:text-[1.2rem]">
                {data?.Year}
              </td>
              <td className="flex justify-center w-[25%] text-[0.5rem] sm:text-[1.2rem]">
                {data?.Director}
              </td>
              <td className="flex justify-center w-[25%] text-[0.5rem] sm:text-[1.2rem]">
                {fav ? (
                  <FaHeart onClick={removeFromFav} className="cursor-pointer" />
                ) : (
                  <FaRegHeart onClick={addToFav} className="cursor-pointer" />
                )}
              </td>
            </tr>
          </table>
        ) : null}
      </div>
    </div>
  );
}
