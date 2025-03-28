import React, { useState, useEffect } from "react";

import almendraLogo from "../assets/Group.png";
import MenuIcon from "./MenuIcon";
import Container from "./Container";
import InstagramIcon from "./InstagramIcon";
import LogoAlmendra from "./LogoAlmendra";

function Header({ openModal, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Update state based on scroll position
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed z-40 ${
        isScrolled ? "bg-wppButton" : "bg-transparent"
      } flex justify-center items-center transition-all`}
    >
      <div className="w-[100%] max-w-[1400px] relative py-5 2xl:pt-5 px-4 md:px-12 flex justify-between items-center ">
        <LogoAlmendra />
        <div className="flex gap-5 lg:gap-36 pb-[5px]">
          <div className="flex gap-[52px]">
            <button
              onClick={() => scrollToSection("apartments")}
              className="hidden lg:block text-sm 2xl:text-lg text-white font-light"
            >
              Apartamentos
            </button>
            <button
              onClick={() => scrollToSection("zonas")}
              className="hidden lg:block text-sm 2xl:text-lg text-white font-light"
            >
              Zonas comunes
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="hidden lg:block text-sm 2xl:text-lg text-white font-light"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:block text-sm 2xl:text-lg text-white font-light"
            >
              Contacto
            </button>
          </div>
          <div className="flex justify-center items-center">
            <InstagramIcon />
          </div>
          <button onClick={openModal} className="lg:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
