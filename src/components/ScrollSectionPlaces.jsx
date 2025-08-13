import presentation1 from "../assets/zonasComunes/placesImage1.webp";
import presentation2 from "../assets/zonasComunes/placesImage2.webp";
import presentation3 from "../assets/zonasComunes/placesImage3.webp";
import presentation4 from "../assets/zonasComunes/placesImage4.webp";

import ArrowDown from "./Icons/ArrowDown";
import ViewImg from "./Icons/ViewImg";

export default function ScrollSectionPlaces() {
  const information = [
    {
      img: presentation1,
    },
    {
      img: presentation2,
    },
    {
      img: presentation3,
    },
    {
      img: presentation4,
    },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute bottom-10 right-8 bg-[#D9D9D9]/30 w-10 h-20 rounded-full flex items-center justify-center z-10 border-2 border-ppalColor">
        <ArrowDown className="color-ppalColor sticky flex" />
      </div>
      <div className="flex w-full justify-center h-[30.6vh] xl:h-[40.6vh] 2xl:h-[54.6vh] overflow-y-scroll  [&::-webkit-scrollbar]:w-0 relative">
        <div className="w-full flex flex-col gap-4 relative">
          {information.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 relative group cursor-pointer"
            >
              <img
                src={item.img}
                alt=""
                className="w-full pb-4 border-b-2 border-accent-color border-rounded"
              />
              <div className="w-full h-0 group-hover:h-72 absolute bottom-4 rounded-2xl bg-gradient-to-t from-[#010C0C]/50 to-transparent group-hover:h-0 transition-all duration-50"></div>
              <span className="absolute bottom-8 left-6 flex text-accent-color text-xl gap-2 items-center group-hover:text-ppalColor transition-all duration-500">
                <ViewImg className="fill-accent-color" />
                ver imagen
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
