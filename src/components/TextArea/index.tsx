import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyledTextArea } from "../../styles/inputs";
import { StyledLabel } from "../../styles/typography";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id?: string;
  error?: FieldError;
}

const TextArea = forwardRef(
  (
    { label, error, ...rest }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <>
        {StyledLabel ? <StyledLabel htmlFor="">{label}</StyledLabel> : null}
        <StyledTextArea ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </>
    );
  }
);

export default TextArea;