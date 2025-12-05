import presentation1 from "../assets/apartmentsImgs/presentation1.webp";
import presentation2 from "../assets/apartmentsImgs/presentation2.webp";
import presentation3 from "../assets/apartmentsImgs/presentation3.webp";

import imgModalPresentation1 from "../assets/apartmentsImgs/imgModalPresentation1.webp";
import imgModalPresentation2 from "../assets/apartmentsImgs/imgModelPresentation2.webp";
import imgModalPresentation3 from "../assets/apartmentsImgs/imgModelPresentation3.webp";

import ArrowDown from "./Icons/ArrowDown";
import ViewImg from "./Icons/ViewImg";
import ImageModal from "./ImageModal";
import { useState } from "react";

export default function ScrollSection() {
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState("");

  const setModal = () => {
    setShowModal(!showModal);
  };

  const information = [
    {
      img: presentation1,
      title: (
        <h2>
          3 torres <br /> de 5 pisos
        </h2>
      ),
      imgModal: imgModalPresentation1,
    },
    {
      img: presentation2,
      title: (
        <h2>
          120 apartamentos <br /> desde 65,48m²
        </h2>
      ),
      imgModal: imgModalPresentation2,
    },
    {
      img: presentation3,
      title: (
        <h2>
          Parqueadero privado <br /> + cuarto útil
        </h2>
      ),
      imgModal: imgModalPresentation3,
    },
  ];

  return (
    <>
      <div className="relative w-full">
        <div className="absolute bottom-10 left-8 bg-[#D9D9D9]/30 w-10 h-20 rounded-full flex items-center justify-center z-10 border-2 border-ppalColor">
          <ArrowDown className="color-ppalColor sticky flex" />
        </div>
        <div className="flex w-full justify-center h-[30.6vh] xl:h-[40.6vh] 2xl:h-[54.6vh] overflow-y-scroll  [&::-webkit-scrollbar]:w-0 relative">
          <div className="w-full flex flex-col gap-4 relative">
            {information.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 relative group cursor-pointer"
                onClick={() => {
                  setModal();
                  setImgModal(item.imgModal);
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full pb-4 border-b-2 border-accent-color border-rounded"
                />
                <div className="w-full h-0 group-hover:h-72 absolute bottom-4 rounded-2xl bg-gradient-to-t from-[#010C0C]/50 to-transparent group-hover:h-0 transition-all duration-50"></div>
                <p className="text-transparent group-hover:text-ppalColor group-hover:block  group-hover:bottom-20 absolute bottom-10 right-6 text-end text-ppalColor text-2xl xl:text-3xl 2xl:text-5xl tracking-widest transition-all duration-500">
                  {item.title}
                </p>
                <span className="absolute bottom-8 right-6 flex text-accent-color text-xl gap-2 items-center group-hover:text-ppalColor transition-all duration-500">
                  <ViewImg className="fill-accent-color" />
                  ver imagen
                </span>
                {showModal && (
                  <ImageModal image={imgModal} onClose={setModal} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
