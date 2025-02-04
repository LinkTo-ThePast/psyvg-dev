import FormWrapper from "../components/ui/auth/FormWrapper";

const LoginPage = () => {
  return (
    <FormWrapper>
      <div className="m-auto gap-5 p- bg-slate-600">
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
        </form>
      </div>
    </FormWrapper>
  );
};

export default LoginPage;
