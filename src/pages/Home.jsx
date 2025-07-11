import React from "react";
import { useState } from "react";

import ApartmentsSwiper from "../components/ApartmentsSwiper";
import Container from "../components/Container";
import Section from "../components/Section";
import MainBannerContent from "../components/MainBannerContent";
import ZonesSwiper from "../components/ZonesSwiper";
import GoogleMapIframe from "../components/GoogleMapIframe";
import Form from "../components/Form";
import WazeIcon from "../components/WazeIcon";
import Header from "../components/Header";
import WppIcon from "../components/WppIcon";
import WppButton from "../components/WppButton";
import Modal from "../components/Modal";

import planoImg from "../assets/Plano.png";
import priceImg from "../assets/price.png";
import placesIcon from "../assets/placesIcons.png";
import wazeImg from "../assets/wazeIcon.png";
import closeToImg from "../assets/closeTo.png";
import brandsImg from "../assets/brands.png";
import closeToMobile from "../assets/closeToMobile.png";
import mapMobile from "../assets/mapMobile.png";

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
    <div className="bg-section-container bg-repeat bg-contain">
      <Header openModal={openModal} scrollToSection={scrollToSection} />
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        scrollToSection={scrollToSection}
      />
      <section className="h-[95vh] md:h-screen w-full relative bg-mobile-banner md:bg-main-banner bg-top bg-cover clip flex flex-col items-center">
        <MainBannerContent
          openModal={openModal}
          closeModal={closeModal}
          scrollToSection={scrollToSection}
        />
      </section>
      <Section>
        <Container>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-almendra-blue text-[32px] md:text-[42px]  2xl:text-6xl archivo font-semibold tracking-widest titleWithLine">
              Apartamentos
            </h1>
            <p className="text-[22px] md:text-[32px] archivo text-almendra-blue mt-5 mb-10 relative">
              Rodeados de tranquilidad desde{" "}
              <span className="font-semibold">
                61,3 m<span className="text-[16px] absolute">2</span>
              </span>
            </p>
          </div>
          <ApartmentsSwiper />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col justify-center items-center gap-8 md:gap-16">
            <h1 className="text-almendra-blue text-[32px]  2xl:text-6xl archivo tracking-widest text-center ">
              Espacios diseñados para
              <span className="font-semibold"> tu familia</span>
            </h1>
            <div className="flex flex-col justify-center items-center gap-10">
              <img src={planoImg} alt="" className="w-auto max-w-[78%]" />
              <img
                src={priceImg}
                alt=""
                className="w-[345px] md:w-auto md:max-w-[40%]"
              />
            </div>
          </div>
        </Container>
      </Section>
      <div id="zonas" className="pt-10"></div>
      <Section>
        <Container>
          <div className="flex flex-col justify-center items-center gap-12 md:gap-24 w-full">
            <h1 className="text-almendra-blue text-[32px] md:text-[42px]  2xl:text-6xl archivo font-semibold tracking-widest titleWithLine">
              Zonas comunes
            </h1>
            <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 gap-10 test">
              <div className="w-full h-full">
                <img src={placesIcon} alt="" />
              </div>
              <ZonesSwiper />
            </div>
          </div>
        </Container>
      </Section>
      <div id="ubicacion" className="pt-10"></div>
      <Section>
        <Container>
          <div className="flex flex-col justify-center items-center gap-20 w-full">
            <h1 className="text-almendra-blue text-[32px] md:text-[42px]  2xl:text-6xl archivo font-semibold tracking-widest titleWithLine">
              Ubicación
            </h1>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full bg-wppButton flex justify-center items-center p-4  rounded-t-lg">
                <h1 className="text-white text-[26px] md:text-[32px]  archivo  tracking-widest text-center">
                  A un paso de todo, incluso de
                  <span className="font-semibold"> la naturaleza </span>
                </h1>
              </div>
              <GoogleMapIframe />
              <div className="w-full bg-blueAlmendra flex justify-center items-center py-4 rounded-b-lg">
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
          <div className="w-full flex flex-col gap-16 md:flex-row md:gap-0 justify-center items-center ">
            <img
              src={closeToImg}
              alt=""
              className="hidden md:block w-auto max-w-[85%]"
            />
            <img
              src={mapMobile}
              alt=""
              className="block md:hidden w-auto max-w-[100%]"
            />
            <img
              src={closeToMobile}
              alt=""
              className="block md:hidden w-auto max-w-[100%]"
            />
          </div>
        </Container>
      </Section>
      <div id="contact" className="pt-10"></div>
      <Section>
        <Container>
          <div className="flex flex-col justify-center items-center gap-20 w-full pb-16 md:pb-32">
            <h1 className="text-almendra-blue text-[32px] md:text-[42px]  2xl:text-6xl archivo font-semibold tracking-widest titleWithLine hidden md:block">
              Contacto
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32 max-w-5xl w-90% h-full ">
              <div className="flex flex-col items-center justify-between ">
                <div>
                  <h1 className="text-almendra-blue text-[64px] lg:text-[84px] archivo text-center hidden md:block">
                    Visita nuestra
                  </h1>
                  <h1 className="text-almendra-blue text-[32px] md:text-[42px]  2xl:text-6xl font-bold archivo text-center  ">
                    sala de ventas
                  </h1>
                  <div className="md:mt-5 flex flex-col justify-center items-center gap-2 ">
                    <div className="flex justify-center items-center gap-3 mt-3">
                      <WazeIcon />
                      <h1 className="text-almendra-blue text-lg md:text-[22px] lg:text-[28px]  tracking-widest">
                        Almendra del Vallés
                      </h1>
                    </div>
                    <div className="bg-blueAlmendra w-full h-[2px]"></div>
                    <span className="text-almendra-blue text-[26px] lg:text-[32px] mt-3">
                      Cra. 9B #17A-154
                    </span>
                    <span className="text-almendra-blue text-sm text-center">
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
                <div className="flex flex-col justify-center items-center h-full md:hidden">
                  <h1 className="text-almendra-blue text-[32px] md:text-[42px]  2xl:text-6xl archivo font-semibold tracking-widest titleWithLine block md:hidden">
                    Contacto
                  </h1>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <section className="bg-white flex justify-center items-center w-full py-5">
        <Container>
          <div className="flex justify-center items-center w-full">
            <img src={brandsImg} alt="" />
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
