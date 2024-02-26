import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Show } from "../../types";
import { ShowListAPI } from "../../types/api";

const API_TV = process.env.REACT_APP_API_TV;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_TV }),
  endpoints: (build) => ({
    show: build.query<Show[], string>({
      query: (q) => `search/shows?q=${q}`,
      transformResponse: (response: ShowListAPI[] = []) =>
        response.map(({ show }) => ({
          id: show.id,
          rating: show.rating.average ? show.rating.average.toFixed(1) : "N/A",
          name: show.name,
          image: show.image?.medium,
          genres: show.genres
        }))
    })
  })
});

export const { useShowQuery } = api;
