import { useRef, useState } from "react";
import Input from "./Input";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r145bos",
        "template_deo8o5c",
        form.current,
        "FWjbrvz8yv7lrOYwV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setPhone("");
          setIsCheckboxChecked(false);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (submitted) {
    window.location.href = "/gracias";
  }

  return (
    <div className="flex flex-col gap-5 md:justify-between md:gap-0 h-full ">
      <h1 className="text-almendra-blue text-[30px] md:text-4xl archivo font-semibold">
        ¡Quiero más información!
      </h1>
      <form
        action=""
        className="flex flex-col gap-5 items-start"
        ref={form}
        onSubmit={sendEmail}
      >
        <Input
          label={"Nombre"}
          type={"text"}
          name={"from_name"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label={"Correo"}
          type={"email"}
          name={"from_email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label={"Celular"}
          type={"number"}
          name={"from_phone"}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label className="flex gap-2">
          <input
            type="checkbox"
            id="privacyPolicies"
            value="privacyPolicies"
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            required
          />
          Acepto las{" "}
          <a
            href="https://www.valorizaconstructora.com/wp-content/uploads/politica-datos-personales.pdf"
            target="_blank"
            className="text-almendra-blue font-semibold"
          >
            políticas de privacidad
          </a>
        </label>
        <input
          type="submit"
          name="submitForm"
          id="submitForm"
          value="Enviar"
          className="bg-[#14A77A] text-white rounded-lg px-9 py-3 text-lg cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Form;
