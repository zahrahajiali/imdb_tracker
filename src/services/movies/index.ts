"use client";
import { useQuery } from "@tanstack/react-query";
import http from "../base";

//#region get post

interface MovieInterface {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export const getMovies = ({ title, date }: { title: string; date: string }) => {
  return http<MovieInterface>({
    method: "GET",
    url: `?t=${title}&y=${date}`,
  });
};

export const useGetMovies = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return useQuery({
    queryKey: ["getPostKey", title, date],
    staleTime: 0,
    queryFn: () => {
      return getMovies({ title, date }).then((res) => {
        return res.data;
      });
    },
  });
};
//#endregion
