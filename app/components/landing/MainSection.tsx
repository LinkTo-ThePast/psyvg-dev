import Link from "next/link";

const MainSection = () => {
  return (
    <section
      className="flex-1 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center relative py-8 md:py-16 mt-4 
    md:mt-12 text-primary_white"
    >
      <h1 className="text-3xl font-bold underline">
        ¡Conoce tu perfil como videojugador!
      </h1>
      <h2 className="mt-5 text-2xl text-center">
        Responde una breve encuesta y descubre <br />
        cómo se relaciona tu personalidad y los <br /> videojuegos.
      </h2>
      <Link
        href={"/questions"}
        className="hover:cursor-pointer hover:underline mt-10 text-3xl"
      >
        Responder cuestionario
      </Link>
    </section>
  );
};

export default MainSection;
