import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTopRated: builder.query<
      POPULAR.GetPopularResponse,
      { timeWindow: "movie/top_rated" | "tv/top_rated" }
    >({
      query: ({ timeWindow }) => ({
        url: `/${timeWindow}`,
        method: "GET",
      }),
      providesTags: ["popular"],
    }),
  }),
});

export const { useGetTopRatedQuery } = api;
