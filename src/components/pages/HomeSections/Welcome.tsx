"use client";
import React, { useEffect, useState } from "react";
import scss from "./Welcome.module.scss";
import { useGetUpcomingQuery } from "@/redux/api/upcoming";
import SearchMulti from "@/components/shared/SearchMulti";

const Welcome = () => {
  const [visible, setVisible] = useState(false);
  const [bgImageUrl, setBgImageUrl] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
  const { data } = useGetUpcomingQuery();

  const bgRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * data?.results.length!);
    const backdropImage = data?.results[randomIndex].backdrop_path;
    if (backdropImage) {
      setBgImageUrl(`https://image.tmdb.org/t/p/original${backdropImage}`);
    }
  };

  useEffect(() => {
    bgRandomImage();
    const intervalId = setInterval(bgRandomImage, 7000);
    return () => clearInterval(intervalId);
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={scss.Welcome}>
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
      <div className="container">
        <div className={scss.content}>
          <h1 className={visible ? scss.fadeIn : scss.fadeOut}>
            Welcome to EcoMovie <br /> - Enjoy the Show!
          </h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <SearchMulti />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
