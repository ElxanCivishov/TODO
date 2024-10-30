import { ButtonHTMLAttributes, FC } from "react";
import "./button.scss";

const Button: FC<TButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={`button ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

export type TButtonVariantProps = "primary" | "secondary" | "danger";

type TButtonProps = {
  variant?: TButtonVariantProps;
} & ButtonHTMLAttributes<HTMLButtonElement>;
