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
import wazeImg from "../assets/wazeIcon.png";
import map from "../assets/map.webp";
import brandsImg from "../assets/brands.png";
import closeToMobile from "../assets/closeToMobile.png";
import mapMobile from "../assets/mapMobile.png";
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
    <div className="">
      <Header openModal={openModal} scrollToSection={scrollToSection} />
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        scrollToSection={scrollToSection}
      />
      <section className="h-[95vh] md:h-screen w-full bg-mobile-banner md:bg-main-banner flex flex-col bg-no-repeat  bg-cover bg-center items-center z-20 mb-0">
        <MainBannerContent
          openModal={openModal}
          closeModal={closeModal}
          scrollToSection={scrollToSection}
        />
      </section>
      <Section>
        <Container>
          <div className="flex justify-between gap-16">
            <div className="w-full">
              <h2 className="text-scndColor text-[32px] md:text-[42px]  xl:text-4xl 2xl:text-5xl bangla">
                Una nueva oportunidad <br />
                para <span className="font-semibold">vivir bonito</span>
              </h2>
              <p className="text-[22px] xl:text-2xl 2xl:text-3xl text-almendra-blue mt-5 mb-10 relative">
                Después del éxito de las etapas anteriores.
              </p>
              <div className="flex xl:w-[90%] 2xl:w-[95%] items-center text-color-regular bg-ppalColor py-5 xl:py-7 xl:px-10 2xl:py-10 2xl:px-14 rounded-tr-[60px] rounded-bl-[60px] shadow-xl">
                <div className="flex flex-col border-r-2 pr-10 border-color-regular gap-5">
                  <span className="xl:text-2xl 2xl:text-3xl">
                    Apartamentos desde
                  </span>
                  <span className="xl:text-6xl 2xl:text-8xl bangla">
                    65,48<span className="xl:text-3xl 2xl:text-5xl">m²</span>
                  </span>
                </div>
                <div className="flex flex-col ml-10 text-center justify-center mt-5 2xl:gap-5">
                  <span className="xl:text-6xl 2xl:text-8xl bangla">
                    2<span className="xl:text-4xl 2xl:text-6xl">y</span>3
                  </span>
                  <span className="xl:text-2xl 2xl:text-3xl 2xl:-mt-10">
                    Alcobas
                  </span>
                </div>
              </div>
            </div>
            <ScrollSection />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex w-full items-end">
              <h1 className="text-[#003551] text-[32px] xl:text-4xl  2xl:text-5xl bangla text-start ">
                Espacios&nbsp;diseñados <br /> para
                <span className="font-semibold"> tu familia</span>
              </h1>
              <div className="w-full h-1 rounded-full mb-5 bg-accent-color"></div>
            </div>
            <div className="flex self-center flex-col justify-center items-center gap-4 bg-ppalColor w-full rounded-3xl p-8">
              <img src={planoImg} alt="" className="w-auto max-w-[70%]" />
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
            <div className="flex w-full items-end">
              <h2 className="text-[#003551] text-[32px] xl:text-4xl  2xl:text-5xl bangla  text-start ">
                Zonas&nbsp;para&nbsp;descansar,&nbsp;moverte, <br /> compartir y
                <span className="font-semibold"> sentirte bien.</span>
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
              <div className="w-full bg-ppalColor flex justify-center items-center p-4 rounded-t-3xl">
                <h2 className="text-white text-[26px] md:text-[32px] 2xl:text-5xl text-[#003551] tracking-wider text-center bangla pt-5">
                  Aquí todo se siente más
                  <span className="font-semibold"> cercano.</span>
                </h2>
              </div>
              <GoogleMapIframe />
              <div className="w-full bg-[#003551] flex justify-center items-center py-4 rounded-b-3xl">
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
          <div className="w-full flex flex-col gap-16 md:gap-0 justify-center items-center ">
            <div className="flex w-full items-end">
              <h2 className="text-[#981E29] text-[32px] xl:text-4xl  2xl:text-5xl bangla  text-start ">
                Vive&nbsp;en&nbsp;el,&nbsp;mejor&nbsp;sector <br /> de
                <span className="font-semibold"> La Ceja.</span>
              </h2>
              <div className="w-full h-1 rounded-full mb-5 bg-accent-color"></div>
            </div>
            <div className="w-full flex justify-center items-center bg-ppalColor p-16 mt-10 rounded-3xl">
              <img src={map} alt="" className="" />
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
      <section className="bg-ppalColor flex justify-center items-center w-full py-5">
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
