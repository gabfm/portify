import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyledSelect } from "../../styles/inputs";
import { StyledLabel } from "../../styles/typography";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label?: string;
    id?: string;
    error?: FieldError | undefined;
    children: React.ReactNode;
}

const Select = forwardRef(({ label, error, children, ...rest }: ISelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <>
      {StyledLabel ? <StyledLabel htmlFor="">{label}</StyledLabel> : null}
      <StyledSelect ref={ref} {...rest}>
        {children}
      </StyledSelect>
      {error ? <p>{error.message}</p> : null}
    </>
  );
});

export default Select;