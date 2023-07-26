import { styled } from "styled-components";


export const StyledList = styled.li`
    height: fit-content;
    width: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    gap: 0.5rem;
    cursor:pointer;

    :hover {
        color: var(--color-primary);
    }

    p {
        font-size: 1.125rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: var(--color-black);
        text-transform: lowercase;
    }
`