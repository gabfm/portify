import { styled } from "styled-components";

export const StyledBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    & p {
        text-align: center;
    }

    & h3 {
        font-size: 2.25rem;
        text-align: center;
    }

    & h3:last-of-type {
        color: var(--color-primary);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    & button {
        padding: 1.125rem 2rem;
    }
`