"use client";
import React, { useState } from "react";
import scss from "./ExploreMovie.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetTvShowsQuery } from "@/redux/api/discover";

const ExploreShow = () => {
  const router = useRouter();
  const { data, isLoading } = useGetTvShowsQuery();

  function truncateDescription(
    description: string | null | undefined,
    maxLength: number
  ): string {
    if (typeof description !== "string" || description.length <= maxLength) {
      return description || "";
    }

    return description.slice(0, maxLength) + "...";
  }

  return (
    <section className={scss.ExploreMovie}>
      <div className="container">
        <div className={scss.content}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>TV Shows</h1>
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
                    alt={movie.name}
                  />
                  <p>{truncateDescription(movie.name, 15)}</p>
                  <h6>{new Date(movie.first_air_date).toLocaleDateString()}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreShow;
