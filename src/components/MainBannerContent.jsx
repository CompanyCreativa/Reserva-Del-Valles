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
                  <span className="font-bold">Éxito en ventas</span>
                </p>
                <p className="flex flex-col justify-center items-center text-almendra-blue text-[20px] font-light archivo -mt-2  md:hidden">
                  <span className="font-bold text-[22px]">Éxito en ventas</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBannerContent;
