import IButton from "@/app/utils/interfaces/types";

const variants = {
  primary: "bg-primary_pink",
  secondary: "bg-primary_white",
  default: "bg-secondaru_white",
};

const texts = {
  primary: "text-primary_white scale",
  secondary: "text-secondary_violet scale",
  default: "text-primary_white scale",
};

const Button = ({ text, variant, type, disabled = false }: IButton) => {
  return <Button></Button>;
};

export default Button;
