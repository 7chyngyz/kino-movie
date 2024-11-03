"use client";
import React, { useEffect, useState } from "react";
import scss from "./Details.module.scss";
import { useGetDetailsQuery } from "@/redux/api/details";
import { useParams } from "next/navigation";
import ActerList from "./ActerList";
import Trailer from "./Trailer";
import Similar from "./Similar";
import Reyting from "@/components/ui/Rang/Reyting";

const Details = () => {
  const [bgImageUrl, setBgImageUrl] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
  const { detailsQuery } = useParams();
  const { data } = useGetDetailsQuery(Number(detailsQuery));

  const bgRandomImage = () => {
    const backdropImage = data?.backdrop_path;
    if (backdropImage) {
      setBgImageUrl(`https://image.tmdb.org/t/p/original${backdropImage}`);
    }
  };

  useEffect(() => {
    bgRandomImage();
    const intervalId = setInterval(bgRandomImage, 7000);
    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <section className={scss.Details}>
      {isLoadingImage && <p className={scss.isLoadingImage}>loading...</p>}
      {bgImageUrl && (
        <img
          className={scss.bgImage}
          src={bgImageUrl}
          alt="movie"
          onLoad={() => {
            setIsLoadingImage(false);
          }}
        />
      )}
        <div className={scss.content}>
          <div className={scss.banner}>
            <img
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt={data?.poster_path}
              className={scss.bannerImage}
            />
            <div className={scss.title}>
              <div className="containerForTitle">
                <div className={scss.main_title}>
                  <h1>{data?.title}</h1>
                  <div className={scss.genres}>
                    {data?.genres.map((genre, index) => (
                      <div className={scss.genre}>
                        <button>{genre.name}</button>
                      </div>
                    ))}
                  </div>
                  <Reyting />
                  <span>{data?.tagline}</span>
                  <p>{data?.overview}</p>
                  <div className={scss.title2}>
                    <p className={scss.status}>
                      Status: <span>{data?.status}</span>
                    </p>
                    <p className={scss.releaseDate}>
                      Release Date: <span>{data?.release_date!}</span>
                    </p>
                    <p className={scss.runtime}>
                      Runtime: <span>{data?.runtime}</span>
                    </p>
                  </div>
                  <div className={scss.title3}>
                    <p className={scss.director}>
                      Country: <span>{data?.origin_country}</span>
                    </p>
                  </div>
                  <div className={scss.title4}>
                    <p className={scss.writter}>
                      Writter: <span>Zach Baylin, Will Schneider</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ActerList />
        <Trailer />
        <Similar />
    </section>
  );
};

export default Details;
