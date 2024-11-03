import React from "react";
import Welcome from "./HomeSections/Welcome";
import Trending from "./HomeSections/Trending";
import Popular from "./HomeSections/Popular";
import TopRated from "./HomeSections/TopRated";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default HomePage;
