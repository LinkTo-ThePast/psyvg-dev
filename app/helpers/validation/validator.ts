import { EMAIL_PATTERN, PASS_PATTERN } from "./constants";

class Validator {
  readonly email_pattern: RegExp = EMAIL_PATTERN;
  readonly pass_pattern: RegExp = PASS_PATTERN;

  email!: string;
  password!: string;
  errorMessage!: object;

  public emailValidator(email: string): boolean {
    if (email.match(this.email_pattern)) {
      return true;
    } else if (email === null) {
      this.errorMessage = {
        emailValidation: "Please, do not left empty email field!",
      };
      return false;
    } else {
      this.errorMessage = {
        emailValidation:
          "Email invalid format. Please, assure your email is correct",
      };
      return false;
    }
  }

  public passwordValidator(password: string): boolean {
    if (password.match(this.pass_pattern)) {
      return true;
    } else if (password === null) {
      this.errorMessage = {
        passwordValidation: "Please, do not left empty password field",
      };
      return false;
    } else {
      this.errorMessage = {
        passwordValidation:
          "Password invalid format. Please, assure your password is correct. ",
      };
      return false;
    }
  }
}

const ValidatorInstance = new Validator();
export default ValidatorInstance;
