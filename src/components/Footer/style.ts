import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";


export const StyledFooter = styled.footer<{ maxwidth: string }>`
    background-color: var(--color-light-gray);
    padding: 40px 0px;

    & div {
        ${StyledContainer}
        flex-direction: row;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
        align-items: center;

        & p {
            text-align: center;
            color: var(--color-black);
        }

        @media (min-width: 560px) {
            justify-content: space-between;
        }
    }
`