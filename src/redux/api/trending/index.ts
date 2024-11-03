import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTrending: builder.query<
      TRENDING.GetTrendingResponse,
      { timeWindow: "day" | "week" }
    >({
      query: ({ timeWindow }) => ({
        url: `/trending/movie/${timeWindow}`,
        method: "GET",
      }),
      providesTags: ["trending"],
    }),
  }),
});

export const { useGetTrendingQuery } = api;
