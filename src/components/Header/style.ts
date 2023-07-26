import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--color-black);
    padding: .875rem 0;
`

export const StyledHeaderContainer = styled.div<{ maxwidth: string; }>`
    ${StyledContainer}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    text-align: center;

    img {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    justify-content: center;
    }
`

export const StyledChildrenContainer = styled.div.attrs(props => ({
    className: props.className,
}))`
    display: flex;
    align-items: center;
    gap: 50px;

    & div {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    & p {
        color: var(--color-white);
    }

    & .RegisterButton {
        @media (max-width: 500px) {
            display: none;
        }
    }
`