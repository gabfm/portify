import { styled } from "styled-components";
import { StyledSolidButton } from "../../../styles/buttons";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const StyledCreatePortfolioButton = styled(StyledSolidButton)`
align-self: flex-end;
padding: 1.125rem 1.5rem;

@media (max-width: 550px) {
align-self: auto;
}
`