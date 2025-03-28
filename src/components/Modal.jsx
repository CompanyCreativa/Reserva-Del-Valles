import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import BlueLogo from "./BlueLogo";

function Modal({ isOpen, closeModal, scrollToSection }) {
  return (
    <>
      {isOpen && (
        <div className="w-full">
          <div className="fixed inset-0 z-20 bg-black opacity-70 h-full w-full"></div>
          <div className=" fixed top-0 z-50 w-full ">
            <div className="bg-abstractCream w-full py-12 px-10 flex justify-between gap-5  ">
              <div>
                <BlueLogo />
              </div>
              <div className="flex flex-col gap-5 -mt-3">
                <button
                  onClick={() => {
                    scrollToSection("apartments");
                    closeModal();
                  }}
                  className=" text-base text-almendra-blue font-semibold "
                >
                  Apartamentos
                </button>
                <button
                  onClick={() => {
                    scrollToSection("zonas");
                    closeModal();
                  }}
                  className=" text-base text-almendra-blue font-semibold "
                >
                  Zonas comunes
                </button>
                <button
                  onClick={() => {
                    scrollToSection("ubicacion");
                    closeModal();
                  }}
                  className=" text-base text-almendra-blue font-semibold "
                >
                  Ubicación
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact-mobile");
                    closeModal();
                  }}
                  className=" text-base text-almendra-blue font-semibold "
                >
                  Contacto
                </button>
              </div>
            </div>
            <div className=" w-full flex items-end justify-end pt-5 pr-5">
              <button onClick={closeModal}>
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
