import React from "react";
import wppButtonImg from "../assets/wppButton.png";

function wppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-10 wpp-button">
      <a
        href="https://api.whatsapp.com/send?phone=573175388121"
        target="_blank"
      >
        <img src={wppButtonImg} alt="" className="w-14 md:w-auto wpp-button" />
      </a>
    </div>
  );
}

export default wppButton;
