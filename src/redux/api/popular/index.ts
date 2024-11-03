import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getPopular: builder.query<
      POPULAR.GetPopularResponse,
      { timeWindow: "movie/popular" | "tv/popular" }
    >({
      query: ({ timeWindow }) => ({
        url: `/${timeWindow}`,
        method: "GET",
      }),
      providesTags: ["popular"],
    }),
  }),
});

export const { useGetPopularQuery } = api;
