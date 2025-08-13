function MainBannerContent() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="h-[90px] md:h-[110px] 2xl:h-[133px]"></div>
      <div className="w-full">
        <div className="relative flex flex-col justify-center items-center pt-2 md:pt-[2%] 2xl:pt-[50px] w-full">
          <div
            className="text-cream text-[20px] md:text-[30px] 
              2xl:text-[18px] bg-accent-color px-2 2xl:px-6 2xl:py-4 rounded-tr-3xl rounded-bl-3xl uppercase tracking-widest"
          >
            Apartamentos en la ceja
          </div>
          <div className="relative flex flex-col justify-center items-center pt-2 gap-3 md:gap-0 ">
            <h1 className="text-accent-color text-[26px] md:text-[55px] lg:text-[65px] 2xl:text-7xl tracking-widest bangla font-semibold mt-10">
              Reservado para ti
            </h1>
            <p className="text-color-regular text-[19px] md:text-[35px] 2xl:text-2xl -mt-3 tracking-widest">
              Último proyecto Del Vallés
            </p>
            <p className="mt-1 text-color-regular text-[29px] md:text-[35px] 2xl:text-4xl font-light hidden md:block bangla mt-6">
              Desde<span className="font-bold"> $347.000.000</span>
            </p>
            <p className="flex flex-col justify-center items-center text-almendra-blue text-[20px] font-light archivo -mt-2  md:hidden">
              <span className="font-bold text-[22px]">Éxito en ventas</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBannerContent;
