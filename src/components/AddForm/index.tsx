import {
  FC,
  FormEvent,
  FormHTMLAttributes,
  useCallback,
  useState,
} from "react";
import toast from "react-hot-toast";
import Button, { TButtonVariantProps } from "../elements/button";
import Input from "../elements/input";
import "./AddForm.scss";

const AddForm: FC<TAddFormProps> = ({
  handleSubmit,
  inputPlaceholder,
  buttonLabel,
  buttonVariant = "secondary",
  isRequired = true,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isRequired && !inputValue) {
        toast.error("Dəyər daxil edilməlidir ");
        return;
      }

      handleSubmit(inputValue);
      setInputValue("");
    },
    [handleSubmit, inputValue, isRequired]
  );

  return (
    <form onSubmit={onSubmit} className="form" noValidate {...rest}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={inputPlaceholder}
        required={isRequired}
      />
      <Button className="w-full" type="submit" variant={buttonVariant}>
        {buttonLabel}
      </Button>
    </form>
  );
};

export default AddForm;

type TAddFormProps = {
  handleSubmit: (value: string) => void;
  buttonLabel: string;
  inputPlaceholder?: string;
  isRequired?: boolean;
  buttonVariant?: TButtonVariantProps;
} & FormHTMLAttributes<HTMLFormElement>;
