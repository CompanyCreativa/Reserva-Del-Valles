import React from "react";
import RigthArrowIcon from "./RigthArrowIcon";
import LeftArrowIcon from "./LeftArrowIcon";

function SwiperCustomButtons({ next, prev }) {
  return (
    <div
      className={"absolute  custom-buttons flex justify-between w-full z-10"}
    >
      <button
        className={`${prev} w-12 h-12  flex items-center justify-center  `}
      >
        <LeftArrowIcon />
      </button>
      <button
        className={`${next}  w-12 h-12  flex items-center justify-center  `}
      >
        <RigthArrowIcon />
      </button>
    </div>
  );
}

export default SwiperCustomButtons;
