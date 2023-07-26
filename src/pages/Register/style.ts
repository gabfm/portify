import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";
import { StyledLink } from "../../styles/buttons";

export const StyledMain = styled.main<{ maxwidth: string }>`
  ${StyledContainer}
  gap: 1.5rem;

  p {
    margin-bottom: 1.125rem;
  }
`;

export const StyledRegisterLink = styled(StyledLink)`
  display: flex;
  gap: 0.8125rem;
  align-items: center;

  font-size: 1.125rem;
  color: var(--color-primary);
`;