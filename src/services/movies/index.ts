"use client";
import { useQuery } from "@tanstack/react-query";
import http from "../base";

//#region get post

export interface MovieInterface {
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

interface GetMovieParams {
  t?: string;
  y?: string;
}

export const getMovies = (params?: GetMovieParams) => {
  return http<MovieInterface>({
    method: "GET",
    params: {
      t: params?.t,
      y: params?.y,
    },
  });
};

export const useGetMovies = (params?: GetMovieParams) => {
  return useQuery({
    queryKey: ["getPostKey", params?.t, params?.y],
    queryFn: () => {
      return getMovies(params).then((res) => {
        return res.data;
      });
    },
  });
};
//#endregion
