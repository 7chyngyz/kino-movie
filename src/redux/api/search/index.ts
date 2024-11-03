import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query<SEARCH.GetSearchResponse, SEARCH.GetSearchRequest>(
      {
        query: (query) => ({
          url: "/search/multi",
          method: "GET",
          params: {
            query,
            params: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          },
        }),
        providesTags: ["search"],
      }
    ),
  }),
});

export const { useGetSearchQuery } = api;
