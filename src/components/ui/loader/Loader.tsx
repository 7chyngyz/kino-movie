import React from "react";
import scss from "./Loader.module.scss";

const Loader = () => {
  return (
    <div  className={scss.Loader}>
    <div className={scss.preloader_root}>
      <div className={scss.preloader}>
        <div className={scss.pl}>
          <div className={scss.pl__bubble}>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
          </div>
          <div className={scss.pl__bubble}>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
          </div>
          <div className={scss.pl__bubble}>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
            <div className={scss.pl__bubbleDrop}></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Loader;
