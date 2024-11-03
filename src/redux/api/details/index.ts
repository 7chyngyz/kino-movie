import { api as index } from "..";
import { DETAILS } from "./types";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getDetails: builder.query<
      DETAILS.GetDetailsResponse,
      DETAILS.GetDetailsRequest
    >({
      query: (movie_id) => ({
        url: `/movie/${movie_id}`,
        method: "GET",
      }),
      providesTags: ["details"],
    }),
  }),
});

export const { useGetDetailsQuery } = api;
