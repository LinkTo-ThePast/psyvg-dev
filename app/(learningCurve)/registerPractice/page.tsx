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
        <h3 className="font-bold text-lg">
          Por favor, ingrese su número telefónico.
        </h3>
        <form>
          <input placeholder="Número telefónico..."></input>
        </form>
      </section>
    </div>
  );
};

export default RegisterPractice;
