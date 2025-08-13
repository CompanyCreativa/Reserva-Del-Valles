import MenuIcon from "./MenuIcon";
import logoReserva from "../assets/logo-reserva.png";
import decoration from "../assets/decoration.png";

function Header({ openModal, scrollToSection }) {
  return (
    <div className="w-full fixed  z-40 py-5 2xl:pt-5 px-4 md:px-12 xl:px-32 flex justify-between items-center bg-ppalColor bangla text-color-regular text-sm 2xl:text-lg">
      <img
        src={decoration}
        className="absolute w-[120px] md:w-auto md:-top-20 left-0"
      />
      <img src={logoReserva} className="ml-[37%] md:ml-40" />
      <div className="flex gap-5 lg:gap-36 ">
        <div className="flex gap-[52px] mt-[5px] -ml-16 ">
          <button
            onClick={() => scrollToSection("apartments")}
            className="hidden lg:inline-block relative overflow-hidden h-[1.5em] group"
          >
            {/* Texto normal */}
            <span className="block text-color-regular transition-transform duration-300 group-hover:-translate-y-full">
              Apartamentos
            </span>

            {/* Texto en color */}
            <span className="absolute top-full left-0 block text-accent-color-hover transition-transform duration-300 group-hover:-translate-y-full">
              Apartamentos
            </span>
          </button>
          <button
            onClick={() => scrollToSection("zonas")}
            className="hidden lg:inline-block relative overflow-hidden h-[1.5em] group"
          >
            {/* Texto normal */}
            <span className="block text-color-regular transition-transform duration-300 group-hover:-translate-y-full">
              Planos
            </span>

            {/* Texto en color */}
            <span className="absolute top-full left-0 block text-accent-color-hover transition-transform duration-300 group-hover:-translate-y-full">
              Planos
            </span>
          </button>
          <button
            onClick={() => scrollToSection("ubicacion")}
            className="hidden lg:inline-block relative overflow-hidden h-[1.5em] group"
          >
            {/* Texto normal */}
            <span className="block text-color-regular transition-transform duration-300 group-hover:-translate-y-full">
              Zonas Comunes
            </span>

            {/* Texto en color */}
            <span className="absolute top-full left-0 block text-accent-color-hover transition-transform duration-300 group-hover:-translate-y-full">
              Zonas Comunes
            </span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:inline-block relative overflow-hidden h-[1.5em] group"
          >
            {/* Texto normal */}
            <span className="block text-color-regular transition-transform duration-300 group-hover:-translate-y-full">
              Ubicación
            </span>

            {/* Texto en color */}
            <span className="absolute top-full left-0 block text-accent-color-hover transition-transform duration-300 group-hover:-translate-y-full">
              Ubicación
            </span>
          </button>
        </div>
        <button onClick={openModal} className="lg:hidden">
          <MenuIcon />
        </button>
      </div>
      <button className="pt-4 border-2 border-color-regular px-10 py-2 rounded-full hover:bg-accent-color-hover hover:text-ppalColor hover:border-accent-color-hover transition ease-in-out duration-200 shadow-md hidden lg:block">
        Contacto
      </button>
    </div>
  );
}

export default Header;
