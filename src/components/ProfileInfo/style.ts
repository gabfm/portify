import { css, styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

const HeaderFlex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledMain = styled.main<{ maxwidth: string }>`
  ${StyledContainer}
  gap: 1.5rem;

  h2 {
    text-align: center;
  }
`;

export const StyledHeaderInfo = styled.div`
    ${HeaderFlex}
    gap: 2.8125rem;
    width: 100%;

    & div {
        ${HeaderFlex}
        gap: .875rem;
    }
`