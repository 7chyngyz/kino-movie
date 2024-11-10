"use client";
import { useState } from "react";
import scss from "./TopRated.module.scss";
import { useRouter } from "next/navigation";
import { useGetTopRatedQuery } from "@/redux/api/toprated";

interface Itoprated {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const TopRated = () => {
  const [topRated, setTopRated] = useState<boolean>(true);
  const router = useRouter();
  const { data, error, isLoading } = useGetTopRatedQuery({
    timeWindow: topRated ? "movie/top_rated" : "tv/top_rated",
  });

  function truncateDescription(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
      return description;
    }

    return description.slice(0, maxLength) + "...";
  }

  return (
    <section className={scss.TopRated}>
      <div className="container">
        <div className={scss.content}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Top Rated</h1>
            <div className={scss.btns}>
              {topRated ? (
                <>
                  <button
                    className={scss.purple}
                    onClick={() => setTopRated(true)}
                  >
                    Movies
                  </button>
                  <button onClick={() => setTopRated(false)}>TV Shows</button>
                </>
              ) : (
                <>
                  <button onClick={() => setTopRated(true)}>Movies</button>
                  <button
                    className={scss.purple}
                    onClick={() => setTopRated(false)}
                  >
                    TV Shows
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={scss.cards}>
            {isLoading && <p>Loading...</p>}
            {data?.results?.map((movie: Itoprated) => (
              <div
                onClick={() => router.push(`details/${movie.id}`)}
                className={scss.card}
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{truncateDescription(movie.title, 15)}</p>
                <h6>{new Date(movie.release_date).toLocaleDateString()}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
