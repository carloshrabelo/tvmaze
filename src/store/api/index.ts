import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Episode, Show } from "../../types";
import { EpisodeAPI, ShowAPI, ShowListAPI } from "../../types/api";
import { removeTags } from "../../utils/removeTags";

const API_TV = process.env.REACT_APP_API_TV;

export const parserShow = (response: ShowAPI): Show => ({
  id: response.id,
  rating: response.rating.average ? response.rating.average.toFixed(1) : "N/A",
  name: response.name,
  image: response.image?.medium,
  genres: response.genres,
  status: response.status,
  summary: removeTags(response.summary)
});

export const parserEpisode = (response: EpisodeAPI): Episode => ({
  id: response.id,
  rating: response.rating.average ? response.rating.average.toFixed(1) : "N/A",
  name: response.name,
  image: response.image?.medium,
  genres: response.genres,
  season: response.season,
  number: response.number,
  summary: removeTags(response.summary)
});

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_TV }),
  endpoints: (build) => ({
    show: build.query<Show[], string>({
      query: (q) => `search/shows?q=${q}`,
      transformResponse: (response: ShowListAPI[] = []) =>
        response.map(({ show }) => parserShow(show))
    }),
    showDetail: build.query<Show, string>({
      query: (id) => `shows/${id}`,
      transformResponse: parserShow
    }),
    showEpisodes: build.query<Episode[], string>({
      query: (id) => `shows/${id}/episodes`,
      transformResponse: (response: EpisodeAPI[]) => response.map(parserEpisode)
    })
  })
});

export const { useShowQuery, useShowDetailQuery, useShowEpisodesQuery } = api;
