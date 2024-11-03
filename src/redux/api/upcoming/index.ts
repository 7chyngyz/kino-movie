import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUpcoming: build.query<
      UPCOMING.GetUpcomingResponse,
      UPCOMING.GetUpcomingRequest
    >({
      query: () => ({
        url: "/movie/upcoming",
        method: "GET",
      }),
      providesTags: ["upcoming"],
    }),
  }),
});
export const { useGetUpcomingQuery } = api;
