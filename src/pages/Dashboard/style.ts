import { styled } from "styled-components"
import { StyledContainer } from "../../styles/grid";

export const StyledMain = styled.main<{ maxwidth: string; }>`
    ${StyledContainer}
    margin: 4rem auto;
    gap: 8rem;
`

export const StyledDashboardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.1875rem;

    & span {
        font-style: normal;
        text-decoration: none;
        text-transform: none;
        color: var(--color-primary);
        font-family: var(--font-primary);
        font-size: clamp(2.5rem, 7vw, 2.75rem);
        line-height: 1.5;
        font-weight: 700;
    }
`

