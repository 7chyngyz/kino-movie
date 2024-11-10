import { IDiscoverMovie, IDiscoverTV } from "../../../../types/schema";

namespace DISCOVER {
  type GetDiscoverMoviesResponse = IDiscoverMovie;
  export type GetDiscoverMoviesRequest = {
    movie_id: number;
  };

  type GetDiscoverShowsResponse = IDiscoverTV;
  type GetDiscoverShowsRequest = {
    movie_id: number;
  };
}
