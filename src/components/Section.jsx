import React from "react";

function Section({ children, id }) {
  return (
    <section
      id={id}
      className="w-full flex flex-col items-center justify-center pt-10 lg:pt-20 bg-transparent"
    >
      {children}
    </section>
  );
}

export default Section;
