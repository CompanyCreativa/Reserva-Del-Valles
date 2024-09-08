import React from "react";

function GoogleMapIframe() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7851933809193!2d-75.4206683360688!3d6.024197498164948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46972c557d8ce3%3A0x4610e50c50052202!2sAlmendra%20del%20Vall%C3%A9s!5e0!3m2!1ses!2sco!4v1709207143489!5m2!1ses!2sco"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMapIframe;
