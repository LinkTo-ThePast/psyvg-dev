interface IButton {
  // properties
  text: string;
  variant: "primary" | "secondary" | "default";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;

  // functionality
  onClick?: () => void;
}

export default IButton;
