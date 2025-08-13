import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import BlueLogo from "./BlueLogo";
import logoReserva from "../assets/logo-reserva.png";
import { AnimatePresence, motion } from "motion/react";

function Modal({ isOpen, closeModal, scrollToSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="w-full   bg-ppalColor">
          <motion.div
            className="fixed top-0 z-50 w-full "
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ isOpen: false, y: -1000 }}
          >
            <div className="bg-ppalColor h-[100vh] w-full py-12 px-10 flex flex-col gap-5  ">
              <div className="flex items-start justify-between">
                <img src={logoReserva} className="w-32" />
                <button onClick={closeModal}>
                  <CloseIcon />
                </button>
              </div>
              <div className="flex items-start flex-col gap-8 -mt-3 flex-1 justify-center bangla text-accent-color-hover text-2xl mb-20">
                <button
                  onClick={() => {
                    scrollToSection("apartments");
                    closeModal();
                  }}
                  className="  "
                >
                  Apartamentos
                </button>
                <button
                  onClick={() => {
                    scrollToSection("plans");
                    closeModal();
                  }}
                  className=" "
                >
                  Planos
                </button>
                <button
                  onClick={() => {
                    scrollToSection("zonas");
                    closeModal();
                  }}
                  className="  "
                >
                  Zonas comunes
                </button>
                <button
                  onClick={() => {
                    scrollToSection("ubicacion");
                    closeModal();
                  }}
                  className=" "
                >
                  Ubicación
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact-mobile");
                    closeModal();
                  }}
                  className=" "
                >
                  Contacto
                </button>
              </div>
            </div>
            <div className="w-full flex items-end justify-end pt-5 pr-5"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
