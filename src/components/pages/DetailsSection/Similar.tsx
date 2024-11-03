"use client";
import React, { useState } from "react";
import scss from "./Similar.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetSimilarQuery } from "@/redux/api/similar";

const Similar = () => {
  const [discover, setDiscover] = useState<boolean>(true);
  const router = useRouter();
  const { detailsQuery } = useParams();
  const { data, isLoading } = useGetSimilarQuery({
    movie_id: Number(detailsQuery),
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
          <div>
            <h1 style={{marginLeft: '50px'}}>Similar Movies</h1>
            <div className={scss.cards}>
              {isLoading && <p>Loading...</p>}
              {data?.results?.map((movie) => (
                <div
                  onClick={() => router.push(`/details/${movie.id}`)}
                  className={scss.card}
                  key={movie.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{truncateDescription(movie.title, 10)}</p>
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

export default Similar;
