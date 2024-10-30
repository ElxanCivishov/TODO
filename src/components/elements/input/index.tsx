import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

const Input: FC<TInputProps> = (props) => {
  return (
    <div className="input-wrapper">
      <input {...props} />
    </div>
  );
};

export default Input;

export type TInputProps = InputHTMLAttributes<HTMLInputElement>;
