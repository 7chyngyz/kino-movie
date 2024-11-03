import { IDiscoverMovie, IDiscoverTV } from "../../../../types/schema";

namespace DISCOVER {
  type GetDiscoverMoviesResponse = IDiscoverMovie;
  type GetDiscoverMoviesRequest = void;

  type GetDiscoverShowsResponse = IDiscoverTV;
  type GetDiscoverShowsRequest = void;
}
