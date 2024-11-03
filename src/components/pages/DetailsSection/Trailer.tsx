"use client";
import React from "react";
import scss from "./Trailer.module.scss";
import { useParams } from "next/navigation";
import { useGetTrailersQuery } from "@/redux/api/trailer";

const Trailer = () => {
  const { detailsQuery } = useParams();
  const { data } = useGetTrailersQuery({ movie_id: Number(detailsQuery) });

  return (
    <section className={scss.Trailer}>
      <div className="container">
        <div className={scss.content}>
          <h1>Official Videos</h1>
          <div className={scss.trailers}>
            {data?.results.map((item) => (
              <div key={item.id}>
                <iframe
                  className={scss.trailer}
                  width="290"
                  height="164"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
