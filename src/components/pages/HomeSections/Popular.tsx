"use client";
import { useState } from "react";
import scss from "./Popular.module.scss";
import { useRouter } from "next/navigation";
import { useGetPopularQuery } from "@/redux/api/popular";

const Popular = () => {
  const [popular, setPopular] = useState<boolean>(true);
  const router = useRouter();
  const { data, isLoading } = useGetPopularQuery({
    timeWindow: popular ? "movie/popular" : "tv/popular",
  });

  function truncateDescription(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
      return description;
    }

    return description.slice(0, maxLength) + "...";
  }

  return (
    <section className={scss.Popular}>
      <div className="container">
        <div className={scss.content}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>What's popular</h1>
            <div className={scss.btns}>
              {popular ? (
                <>
                  <button
                    className={scss.purple}
                    onClick={() => setPopular(true)}
                  >
                    Movies
                  </button>
                  <button onClick={() => setPopular(false)}>TV Shows</button>
                </>
              ) : (
                <>
                  <button onClick={() => setPopular(true)}>Movies</button>
                  <button
                    className={scss.purple}
                    onClick={() => setPopular(false)}
                  >
                    TV Shows
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={scss.cards}>
            {isLoading && <p>Loading...</p>}
            {data?.results?.map((movie) => (
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

export default Popular;
