import { api as index } from "..";
import { TRAILER } from "./types";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTrailers: builder.query<
      TRAILER.GetTrailerResponse,
      { movie_id: number }
    >({
      query: ({ movie_id }) => ({
        url: `/movie/${movie_id}/videos`,
        method: "GET",
      }),
      providesTags: ["trailer"],
    }),
  }),
});

export const { useGetTrailersQuery } = api;
