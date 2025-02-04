import FormWrapper from "../components/ui/auth/FormWrapper";

const LoginPage = () => {
  return (
    <FormWrapper>
      <div className=" flex flex-col m-auto gap-2 p- bg-slate-600">
        <h1 className="mb-4">welcome to login page</h1>
        <form>
          <label>
            <p>Email:</p>
            <input type="text" name="email"></input>
          </label>
          <label>
            <p>Password:</p>
            <input type="password" name="password"></input>
          </label>
          <br></br>
          <button
            type="submit"
            className="mt-4 justify-center items-center size-10 bg-white w-16"
          >
            Login
          </button>
        </form>
      </div>
    </FormWrapper>
  );
};

export default LoginPage;
