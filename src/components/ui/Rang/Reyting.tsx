"use client";
import React, { useState } from "react";
import scss from "./Reyting.module.scss";
import { Progress, ProgressProps } from "antd";
import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";

const Reyting = () => {
  const [play, setPLay] = useState<boolean>(false);
  const conicColors: ProgressProps["strokeColor"] = {
    "0%": "#87d068",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };
  return (
    <div className={scss.Reyting}>
      <div className={scss.content}>
        <div className={scss.progress}>
          <Progress
            size={80}
            strokeLinecap="butt"
            type="circle"
            percent={75}
            strokeColor={conicColors}
            strokeWidth={10}
            format={(percent) => (
              <span style={{ color: "white" }}>{percent}</span>
            )}
          />
        </div>
        <div
          className={scss.player}
          onMouseEnter={() => setPLay(true)}
          onMouseLeave={() => setPLay(false)}
        >
          {play ? (
            <>
              <div className={scss.blackPLay}>
                <FaPlay size={80} />
              </div>
            </>
          ) : (
            <>
              <div className={scss.whitePlay}>
                <CiPlay1 size={80} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reyting;
