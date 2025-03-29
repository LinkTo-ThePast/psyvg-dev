import Image from "next/image";

const RegisterPractice = () => {
  return (
    <div
      id="register-container"
      className="flex min-h-screen justify-center items-center bg-primary_green"
    >
      <section
        id="card-register-form"
        className="w-full max-w-sm bg-primary_white rounded-lg p-6"
      >
        <h3 className="font-bold text-lg text-center mb-2">
          Ingrese su número telefónico.
        </h3>
        <form>
          <div className="relative">
            <input id="phone" className="w-full p-2 peer" />
            <label htmlFor="phone" className="absolute left-3 ">
              Teléfono...
            </label>
            <Image
              src={"/assets/icons/mobile.png"}
              width={32}
              height={32}
              alt="Ícono en pixel art."
              className="absolute right-3 top-2"
            />
            <button className="w-full bg-primary_violet mt-2">
              Enviar código
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPractice;
