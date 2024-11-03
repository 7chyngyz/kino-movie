import { api as index } from "..";
import { ACTERS } from "./types";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getActers: builder.query<ACTERS.GetActersResponse, {movie_id:number}>(
      {
        query: ({movie_id}) => ({
          url: `/movie/${movie_id}/credits`,
          method: "GET",
        }),
        providesTags: ["acters"],
      }
    ),
  }),
});

export const { useGetActersQuery } = api;
