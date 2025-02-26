import IButton from "@/app/utils/interfaces/types";

const variants = {
  primary: "bg-primary_pink",
  secondary: "bg-primary_white",
  default: "bg-secondary_white",
};

const texts = {
  primary: "text-primary_white scale",
  secondary: "text-secondary_violet scale",
  default: "text-primary_white scale",
};

const Button = ({
  text,
  variant,
  type,
  disabled = false,
  onClick,
}: IButton) => {
  return (
    <button
      className={`w-full p-4 pointer rounded-full ${variants[variant]} ${
        texts[variant]
      } ${disabled ? " hover cursor-not-allowed" : ""}`}
      type={type ? type : "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
