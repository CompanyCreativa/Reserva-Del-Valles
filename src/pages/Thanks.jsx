import BlueLogo from "../components/BlueLogo";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/almendraBlueLogo.png";
import { useEffect } from "react";

function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="h-screen bg-cream flex flex-col gap-5 justify-center items-center font-medium px-4">
      <h1 className="text-[#7F1F1B] bangla text-3xl lg:text-5xl text-center font-semibold">
        ¡Gracias por enviarnos tus datos!
      </h1>
      <span className="text-[#003551] text-xl lg:text-3xl  text-center">
        En breve un asesor se comunicará contigo para contarte todos
        <br /> los detalles de Almendra del valles.
      </span>
      <div className="mt-5 lg:mt-0">
        <Link to="/">
          <img src={Logo} alt="" className="w-40 lg:w-60" />
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
