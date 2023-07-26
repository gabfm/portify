import { styled } from "styled-components";
import { StyledSolidButton } from "../../../styles/buttons";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  width: 100%;

  & div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
    grid-gap: 1.0625rem;

    @media (min-width: 500px) {
        grid-template-columns: repeat(2, minmax(185px, 1fr));
    }
  }

  & input {
    border: .0625rem solid var(--color-primary);
    border-radius: 8px;
    padding: 22px 20px;
    width: 100%;
    color: var(--color-black);

    &::placeholder {
      color: var(--color-gray);
    }
  }

  & fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledRegisterButton = styled(StyledSolidButton)`
align-self: flex-end;
padding: 1.125rem 1.5rem;

@media (max-width: 441px) {
align-self: auto;
}
`