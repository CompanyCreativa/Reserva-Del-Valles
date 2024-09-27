import React from "react";
import wppIcon from "../../src/assets/wppIcon.png";
import CejaIcon from "./CejaIcon";

function MainBannerContent() {
  return (
    <div className=" w-full h-full">
      <div className="flex flex-col justify-between h-full ">
        <div className="absolute z[-1] bg-overlay-top top-0 left-0 h-[22%] w-full"></div>
        <div className="absolute z[-1] bg-overlay-bottom bottom-0 left-0 h-[45%] w-full"></div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="h-[90px] md:h-[110px] 2xl:h-[133px]"></div>
          <div className="w-full">
            <div className="relative flex flex-col justify-center items-center pt-2 md:pt-[2%] bigPortatil:pt-[50px] w-full">
              <CejaIcon />
              <div className="relative flex flex-col justify-center items-center pt-2 gap-3 md:gap-0 ">
                <h1 className="text-[#008A7D] text-[26px] md:text-[55px] lg:text-[65px] bigPortatil:text-[80px]  uppercase font-bold tracking-widest">
                  Un hogar soñado
                </h1>
                <p className="text-almendra-blue text-[19px] md:text-[35px] bigPortatil:text-[50px] -mt-3 bigPortatil:-mt-8">
                  a un <span className="font-semibold">precio</span> que no
                  esperabas.
                </p>
                <p className="mt-1 text-almendra-blue text-[29px] md:text-[35px] bigPortatil:text-[48px] font-light archivo  hidden md:block">
                  <span className="font-bold">Desde $281.900.000*</span>
                </p>
                <p className="flex flex-col justify-center items-center text-almendra-blue text-[20px] font-light archivo -mt-2  md:hidden">
                  <span className="font-bold text-[22px]">
                    Desde $281.900.000*
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center lg:justify-between relative md:px-5 pb-20 md:pb-10">
          <div className="hidden lg:block opacity-0">
            <h1 className="archivo text-white  text-3xl">*Precio torre 1</h1>
          </div>
          <div className="relative flex flex-col justify-center items-center  w-full lg:w-auto">
            <h1 className="text-[24px] md:text-[32px] bigPortatil:text-[42px] font-medium text-cream mb-4 text-center">
              Pregunta por nuestro <br className="block lg:hidden" />{" "}
              lanzamiento
              <span className="font-bold text-dark-cream"> de torre 2</span>
            </h1>
            <a
              href="https://api.whatsapp.com/send?phone=573175388121"
              target="_blank"
              className="wpp-button flex justify-center items-center px-6 md:px-[46px] py-3 gap-5 text-[16px] md:text-[28px] 2xl:text-[30px] bg-wppButton/30 backdrop-blur-sm rounded-xl border border-cream"
            >
              <img
                src={wppIcon}
                alt=""
                className="w-[23px] md:w-auto wpp-button"
              />
              <span className="text-cream wpp-button">317 538 8121</span>
            </a>
            <div className="absolute bottom-[22px] md:bottom-16 right-2 md:right-4 block lg:hidden">
              <h1 className="archivo text-white text-base bigPortatil:text-3xl">
                *Precio torre 1
              </h1>
            </div>
            <div id="apartments"></div>
          </div>
          <div className="mt-[10px] hidden lg:block">
            <h1 className="archivo text-white text-2xl bigPortatil:text-3xl">
              *Precio torre 1
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBannerContent;
