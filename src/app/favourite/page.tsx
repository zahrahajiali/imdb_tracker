"use client";

import React from "react";

const FavoritePage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  const clearFavorites = () => {
    localStorage.removeItem("favorites");
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <div className="bg-[#181818] h-[100vh]">
      <div className="px-[2.5rem] py-[3.2rem]">
        <div className=" flex flex-col items-start mt-[3.5rem] bg-[#3a3a3a] text-center rounded-[0.8rem] w-[100%] p-[1.5rem] text-[1.6rem]">
          <h3 className="text-start ">Favorite Movies</h3>

          {favorites.map((movie: string, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between h-[5rem] text-[2rem]"
            >
              <div className="flex items-end text-[1.2rem]">
                <span>{index + 1}_</span>
                <span className="pl-[0.5rem]">{movie}</span>
              </div>
            </div>
          ))}
          {favorites.length > 0 ? (
            <button
              onClick={clearFavorites}
              className="bg-[#09B77B] text-white text-[1.2rem] p-[0.5rem] rounded-[0.8rem]"
            >
              Clear Favorites
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
