function MainBannerContent() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="h-[133px]"></div>
      <div className="w-full">
        <div className="relative flex flex-col justify-center items-center pt-2 md:pt-[2%] 2xl:pt-[50px] w-full">
          <h1
            className="text-cream text-sm xl:text-lg 
              bg-accent-color px-5 py-3 2xl:px-6 2xl:py-4 rounded-tr-3xl rounded-bl-3xl uppercase tracking-widest"
          >
            Apartamentos en la ceja
          </h1>
          <div className="relative flex flex-col justify-center items-center pt-2 gap-3 md:gap-0 ">
            <h2 className="text-accent-color text-3xl xl:text-6xl 2xl:text-7xl tracking-widest bangla font-semibold mt-5 xl:mt-10">
              Reservado para ti
            </h2>
            <p className="text-color-regular text-lg md:text-2xl -mt-4 xl:mt-0 2xl:-mt-3 tracking-widest">
              Último proyecto Del Vallés
            </p>
            <p className="text-color-regular text-3xl md:text-4xl font-light bangla md:mt-6">
              Desde<span className="font-bold"> $347.000.000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBannerContent;
