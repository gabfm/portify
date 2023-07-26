import styled, { css } from "styled-components";

const TextDefaultStyles = css`
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  color: var(--color-black);
`;

export const StyledTitle1 = styled.h1`
  ${TextDefaultStyles}
  font-family: var(--font-primary);
  font-size: clamp(2.5rem, 10vw, 4rem);
  line-height: 1.5;
  font-weight: 700;
`;

export const StyledTitle2 = styled.h2`
  ${TextDefaultStyles}
  font-family: var(--font-primary);
  font-size: clamp(2.5rem, 7vw, 2.75rem);
  line-height: 1.5;
  font-weight: 700;
`;

export const StyledTitle3 = styled.h3`
  ${TextDefaultStyles}
  font-family: var(--font-primary);
  font-size: 1.75rem;
  line-height: 1.5;
  font-weight: 700;
`;

export const StyledMontserratP = styled.p`
  ${TextDefaultStyles}
  font-family: var(--font-primary);
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
`;

export const StyledRobotoP = styled.p`
  ${TextDefaultStyles}
  font-family: var(--font-secondary);
  line-height: 1.5;
  font-weight: 400;
  color: var(--color-gray);
`;

export const StyledSpan = styled.span`
  ${TextDefaultStyles}
  font-family: var(--font-primary);
  font-size: 1.3125rem;
  line-height: 1.5;
  font-weight: 700;
  color: var(--color-primary);
`;

export const StyledLabel = styled.label`
  ${TextDefaultStyles}
  font-family: var(--font-primary);
  font-size: .875rem;
  line-height: 1.5;
  font-weight: 700;
  color: var(--color-primary);
`;