import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyledInput } from "../../styles/inputs";
import { StyledLabel, StyledRobotoP } from "../../styles/typography";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  error?: FieldError;
}

const Input = forwardRef(
  (
    { label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        {label ? <StyledLabel htmlFor="">{label}</StyledLabel> : null}
        <StyledInput id={id} ref={ref} {...rest} />
        {error ? <StyledRobotoP>{error.message}</StyledRobotoP> : null}
      </fieldset>
    );
  }
);

export default Input;