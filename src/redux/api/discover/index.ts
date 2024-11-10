import { api as index } from "..";
import { DISCOVER } from "./types";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getDiscover: builder.query<
      DISCOVER.GetDiscoverMoviesResponse,
      DISCOVER.GetDiscoverMoviesRequest
    >({
      query: (params) => ({
        url: `/discover/movie`,
        method: "GET",
        params,
      }),
      providesTags: ["discoverMovie"],
    }),
    getTvShows: builder.query<
      DISCOVER.GetDiscoverShowsResponse,
      DISCOVER.GetDiscoverShowsRequest
    >({
      query: () => ({
        url: `/discover/tv`,
        method: "GET",
      }),
      providesTags: ["discoverTV"],
    }),
  }),
});

export const { useGetDiscoverQuery, useGetTvShowsQuery } = api;
