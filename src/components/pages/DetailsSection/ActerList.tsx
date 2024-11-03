"use client";
import React from "react";
import scss from "./ActerList.module.scss";
import { useGetActersQuery } from "@/redux/api/acters";
import { useParams } from "next/navigation";

const ActerList = () => {
  const { detailsQuery } = useParams();
  const { data } = useGetActersQuery({ movie_id: Number(detailsQuery) });

  return (
    <section className={scss.ActerList}>
      <div className="container">
        <div className={scss.content}>
          <h1>Top Cast</h1>
          <div className={scss.acters}>
            {data?.cast.map((item) => (
              <div key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt="avatar"
                />
                <p>{item.name}</p>
                <span>{item.character}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActerList;
