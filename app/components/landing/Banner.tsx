import Button from "../reusable/buttons/Button";

const Banner = () => {
  return (
    <div className="flex flex-col bg-primary_green w-screen min-h-screen">
      <div className="text-primary_white">
        <h1>Personalidad y videojuegos</h1>
        <p className="max-w-11">
          La manera en la que juegas puede decir muchas cosas sobre tu
          personalidad.
        </p>
        <Button text="Responder preguntas" variant="primary" />
      </div>
    </div>
  );
};

export default Banner;
