import { useState } from "react";

import Container from "../components/Container";
import Section from "../components/Section";
import MainBannerContent from "../components/MainBannerContent";
import GoogleMapIframe from "../components/GoogleMapIframe";
import Form from "../components/Form";
import WazeIcon from "../components/WazeIcon";
import Header from "../components/Header";
import WppIcon from "../components/WppIcon";
import Modal from "../components/Modal";

import planoImg from "../assets/planes.webp";
import priceImg from "../assets/price.webp";
import placesIcon from "../assets/placesIcons.webp";
import leaf from "../assets/leaf.webp";
import leaf2 from "../assets/leaf2.webp";
import wazeImg from "../assets/wazeIcon.png";
import map from "../assets/map.webp";
import brandsImg from "../assets/brands.png";
import mapMobile from "../assets/mapMobile.webp";
import ScrollSection from "../components/ScrollSection";
import ScrollSectionPlaces from "../components/ScrollSectionPlaces";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        scrollToSection={scrollToSection}
      />
      <div className="">
        <Header openModal={openModal} scrollToSection={scrollToSection} />
        <section className="h-[95vh] md:h-screen w-full bg-mobile-banner md:bg-main-banner flex flex-col bg-no-repeat  bg-cover bg-center items-center z-20 mb-0">
          <MainBannerContent
            openModal={openModal}
            closeModal={closeModal}
            scrollToSection={scrollToSection}
          />
        </section>
        <div id="apartments"> </div>
        <Section>
          <Container>
            <div className="px-5 xl:px-0 flex flex-col md:flex-row justify-between gap-16">
              <div className="w-full">
                <h2 className="text-scndColor text-3xl xl:text-4xl 2xl:text-5xl bangla">
                  Una nueva oportunidad <br />
                  para <span className="font-semibold">vivir bonito</span>
                </h2>
                <p className="text-lg xl:text-2xl 2xl:text-3xl text-almendra-blue mt-5 mb-10 relative">
                  Después del éxito de las etapas anteriores.
                </p>
                <div className="flex justify-center xl:w-[90%] 2xl:w-[95%] items-center text-color-regular bg-ppalColor py-5 xl:py-7 xl:px-10 2xl:py-10 2xl:px-14 rounded-tr-[60px] rounded-bl-[60px] shadow-xl">
                  <div className="flex flex-col border-r-2 pr-5 xl:pr-10 border-color-regular xl:gap-5">
                    <span className="text-lg xl:text-2xl 2xl:text-3xl">
                      Apartamentos&nbsp;desde
                    </span>
                    <span className="text-5xl xl:text-6xl 2xl:text-8xl bangla">
                      65,48<span className="text-3xl 2xl:text-5xl">m²</span>
                    </span>
                  </div>
                  <div className="flex flex-col ml-5 xl:ml-10 text-center justify-center xl:mt-5 2xl:gap-5">
                    <span className="text-5xl xl:text-6xl 2xl:text-8xl bangla">
                      2<span className="xl:text-4xl 2xl:text-6xl">y</span>3
                    </span>
                    <span className="text-lg xl:text-2xl 2xl:text-3xl 2xl:-mt-10">
                      Alcobas
                    </span>
                  </div>
                </div>
              </div>
              <ScrollSection />
            </div>
          </Container>
        </Section>
        <div id="plans" className="pt-10"></div>
        <Section>
          <Container>
            <div className="px-5 xl:px-0 flex flex-col justify-center items-start gap-4">
              <div className="flex w-full items-end">
                <h1 className="text-[#003551] text-2xl xl:text-4xl  2xl:text-5xl bangla text-start ">
                  Espacios&nbsp;diseñados <br /> para
                  <span className="font-semibold"> tu familia</span>
                </h1>
                <div className="w-full h-1 rounded-full mb-5 bg-accent-color"></div>
              </div>
              <div className="flex relative self-center flex-col justify-center items-center gap-4 bg-ppalColor w-full rounded-3xl p-8">
                <img src={planoImg} alt="" className="w-auto xlmax-w-[70%]" />
                <img
                  src={priceImg}
                  alt=""
                  className="w-[345px] md:w-auto md:max-w-[40%]"
                />
                <img
                  src={leaf}
                  alt=""
                  className="absolute bottom-0 right-0 w-[100px] xl:w-[300px] 2xl:w-auto"
                />
              </div>
            </div>
          </Container>
        </Section>
        <div id="zonas" className="pt-10"></div>
        <Section>
          <Container>
            <div className="flex flex-col px-5 xl:px-0 justify-center items-center gap-12 md:gap-24 w-full">
              <div className="flex w-full items-end">
                <h2 className="text-[#003551] text-2xl xl:text-4xl  2xl:text-5xl bangla  text-start ">
                  Zonas&nbsp;para&nbsp;descansar,&nbsp;moverte, <br /> compartir
                  y<span className="font-semibold"> sentirte bien.</span>
                </h2>
                <div className="w-full h-1 rounded-full mb-5 bg-accent-color"></div>
              </div>
              <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 gap-10 test">
                <ScrollSectionPlaces />
                <div className="w-full h-full flex justify-center items-center">
                  <img src={placesIcon} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </Section>
        <div id="ubicacion" className="pt-10"></div>
        <Section>
          <Container>
            <div className="flex flex-col justify-center items-center gap-20 w-full">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full bg-ppalColor flex justify-center items-center p-4 xl:rounded-t-3xl">
                  <h2 className="text-xl md:text-[32px] 2xl:text-5xl text-[#003551] xl:tracking-wider text-center bangla pt-5">
                    Aquí todo se siente más
                    <span className="font-semibold"> cercano.</span>
                  </h2>
                </div>
                <GoogleMapIframe />
                <div className="w-full bg-[#003551] flex justify-center items-center py-4 xl:rounded-b-3xl">
                  <a href="https://waze.com/ul/hd34678z36" target="_blank">
                    <img
                      src={wazeImg}
                      alt=""
                      id="waze-btn"
                      className="w-[206px] md:w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="w-full px-5 xl:px-0 flex flex-col xl:gap-16 md:gap-0 justify-center items-center ">
              <div className="flex w-full items-end">
                <h2 className="text-[#981E29] text-2xl xl:text-4xl  2xl:text-5xl bangla  text-start ">
                  Vive&nbsp;en&nbsp;el&nbsp;mejor&nbsp;sector <br /> de
                  <span className="font-semibold"> La Ceja.</span>
                </h2>
                <div className="w-full h-1 rounded-full mb-5 bg-accent-color"></div>
              </div>
              <div className="relative w-full flex justify-center items-center bg-ppalColor p-3 xl:p-16 mt-10 rounded-3xl">
                <img src={map} alt="" className="hidden md:block" />
                <img src={mapMobile} alt="" className="block md:hidden" />
                <img src={leaf2} alt="" className="absolute bottom-0 right-0" />
              </div>
            </div>
          </Container>
        </Section>
        <div id="contact" className="pt-10"></div>
        <Section>
          <Container>
            <div className="flex flex-col justify-center items-center gap-20 w-full pb-16 md:pb-32">
              <h1 className="text-accent-color-hover text-[32px] md:text-[42px]  2xl:text-5xl bangla tracking-wider hidden md:block">
                <span className="font-semibold">¿Te interesa?</span> Déjanos tus
                datos
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32 max-w-5xl w-90% h-full ">
                <div className="flex flex-col items-center justify-between ">
                  <div>
                    <h2 className="text-[#003551] text-[64px] 2xl:text-5xl text-center hidden md:block">
                      Visita nuestra
                    </h2>
                    <h2 className="text-[#003551] text-[32px] md:text-[42px] 2xl:text-5xl font-bold text-center">
                      sala de ventas
                    </h2>
                    <div className="md:mt-5 flex flex-col justify-center items-center gap-2 ">
                      <div className="flex justify-center items-center gap-3 mt-3">
                        <WazeIcon />
                        <h1 className="text-[#003551] text-lg md:text-[22px] lg:text-[28px]  tracking-widest">
                          Reserva del Vallés
                        </h1>
                      </div>
                      <div className="bg-[#003551] w-full h-[2px]"></div>
                      <span className="text-[#003551] text-[26px] lg:text-[32px] mt-3">
                        Cra. 9B #17A-154
                      </span>
                      <span className="text-[#003551] text-sm text-center">
                        Lunes a viernes: 9:00 a.m. a 5:00 p.m.
                      </span>
                      <span className="text-almendra-blue text-sm text-center">
                        Fines de semana y festivos: 10:00 a.m. a 5:00 p.m.
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://api.whatsApp.com/send?phone=573175388121"
                    target="_blank"
                    className="bg-[#14A77A] text-white rounded-lg px-5 py-3 flex gap-3 justify-center items-center mt-8 wpp-button"
                  >
                    <span className="wpp-button">¡Habla con nosotros!</span>{" "}
                    <WppIcon />
                  </a>
                </div>
                <div className="w-full flex flex-col gap-16 h-full ">
                  <div id="contact-mobile" className="block lg:hidden"></div>
                  <Form />
                </div>
              </div>
            </div>
          </Container>
        </Section>
        <section className="bg-ppalColor flex justify-center items-center w-full py-5">
          <Container>
            <div className="flex justify-center items-center w-full">
              <img src={brandsImg} alt="" />
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
