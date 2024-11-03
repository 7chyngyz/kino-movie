import { api as index } from "..";
import { SIMILAR } from "./types";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getSimilar: builder.query<SIMILAR.GetSimilarResponse, { movie_id: number }>(
      {
        query: ({ movie_id }) => ({
          url: `/movie/${movie_id}/similar`,
          method: "GET",
        }),
        providesTags: ["similar"],
      }
    ),
  }),
});

export const { useGetSimilarQuery } = api;
