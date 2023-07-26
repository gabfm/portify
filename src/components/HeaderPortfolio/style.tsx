import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

export const StyledHeader = styled.header`
    width: 100%;
    padding: 1.5rem 0;
`

export const StyledHeaderContainer = styled.div<{ maxwidth: string; }>`
    ${StyledContainer}
    flex-direction: row;
    justify-content: center;

    & div {
        display: flex;
        align-items: center;
        gap: 50px;
    }
`