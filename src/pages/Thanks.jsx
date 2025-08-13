import BlueLogo from "../components/BlueLogo";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className="h-screen bg-cream flex flex-col gap-5 justify-center items-center font-medium px-4">
      <h1 className="text-opaque-green text-3xl lg:text-5xl text-center">
        ¡Gracias por enviarnos tus datos!
      </h1>
      <span className="text-almendra-blue text-xl lg:text-3xl fragment text-center">
        En breve un asesor se comunicará contigo para contarte todos
        <br /> los detalles de Almendra del valles.
      </span>
      <div className="mt-5 lg:mt-0">
        <Link to="/">
          <BlueLogo />
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
