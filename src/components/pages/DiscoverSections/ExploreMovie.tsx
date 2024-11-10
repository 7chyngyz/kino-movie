"use client";
import React, { useState } from "react";
import scss from "./ExploreMovie.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetDiscoverQuery } from "@/redux/api/discover";

const ExploreMovie = () => {
  const [discover, setDiscover] = useState<boolean>(true);
  const router = useRouter();
  const { detailsQuery } = useParams();

  const movieId = Number(detailsQuery);
  const { data, isLoading } = useGetDiscoverQuery({
    movie_id: movieId,
  });

  function truncateDescription(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
      return description;
    }

    return description.slice(0, maxLength) + "...";
  }

  return (
    <section className={scss.ExploreMovie}>
      <div className="container">
        <div className={scss.content}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Explore Movies</h1>
            <div className={scss.cards}>
              {isLoading && <p>Loading...</p>}
              {data?.results?.map((movie) => (
                <div
                  onClick={() => router.push(`/details/${movie.id}`)}
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
      </div>
    </section>
  );
};

export default ExploreMovie;
