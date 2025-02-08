import FormWrapper from "../components/auth/FormWrapper";
import ValidatorInstance from "../helpers/validation/validator";
import Validator from "../helpers/validation/validator";

const LoginPage = () => {
  const loginButton = (formData: unknown) => {
    const retrieveuserInput = () => {
      const emailInput = formData.get("email");
      const passInput = formData.get("password");

      if (ValidatorInstance.emailValidator(emailInput)) {
        const emailMessage = "Valid email!";
      } else {
        const getErrorMessage =
          ValidatorInstance.errorMessage["emailValidation"];
      }

      if (ValidatorInstance.passwordValidator(passInput)) {
        const passMessage = "Valid password";
      } else {
        const getErrorMessage =
          ValidatorInstance.errorMessage["passwordValidation"];
        console.log("just some validation");
      }
    };
  };

  return (
    <FormWrapper>
      <div className=" flex flex-col m-auto gap-2 p- bg-slate-600">
        <h1 className="mb-4">welcome to login page</h1>
        <form action={loginButton}>
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
