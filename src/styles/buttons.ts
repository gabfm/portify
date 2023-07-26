import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
  font-family: var(--font-primary);
    font-weight: 700;
    color: var(--color-white);
    text-transform: lowercase;

    border: 1px solid transparent;
    border-radius: 255px;
    padding: .75rem 1.375rem;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLink = styled(Link)`
    font-family: var(--font-primary);
    font-weight: 700;
    color: var(--color-white);
    text-transform: lowercase;
`

export const StyledLinkButton = styled(Link)`
    ${ButtonStyles};
    background-color: var(--color-primary);
`

export const StyledSolidButton = styled.button`
    ${ButtonStyles};
    background-color: var(--color-primary);
`

export const StyledLinkOutline = styled(Link)`
    ${ButtonStyles};
    background-color: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
`

export const StyledLinkOutline2 = styled(Link)`
    ${ButtonStyles};
    background-color: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-white);
`

export const StyledOutline2Button = styled.button`
    ${ButtonStyles};
    background-color: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-white);
`