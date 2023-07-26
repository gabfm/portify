import { css, styled } from "styled-components";

export const StyledDefaultInputs = css`
    border: 0.0625rem solid var(--color-primary);
  border-radius: 8px;
  padding: 1.375rem 1.25rem;
  width: 100%;
  color: var(--color-black);

  &::placeholder {
    color: var(--color-gray);
  }
`

export const StyledInput = styled.input`
  ${StyledDefaultInputs}
`;

export const StyledSelect = styled.select`
  ${StyledDefaultInputs}
  color: var(--color-gray);
  transition: 0.2s;

  &:hover {
    color: var(--color-black);
  }

  &:focus {
    color: var(--color-black);
  }
`;

export const StyledTextArea = styled.textarea`
  ${StyledDefaultInputs}
  font-family: var(--font-secondary);
  min-height: 8.75rem;
  resize: none;
`;