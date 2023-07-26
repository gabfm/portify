import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

export const StyledMain = styled.main<{ maxwidth: string; }>`
    ${StyledContainer}
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 60px;

    & img {
        width: clamp(100px, 50vw, 520px);

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
        }
`

export const StyledForm = styled.form`
    height: auto;
    width: 550px;
    
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 4rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
    }

    p {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        font-weight: 400;

        color: #00000080;

        margin-top: 2.5rem;
    }
    input {
        height: 65px;
        width: 100%;    
    
        border: 1px solid var(--color-primary);
        border-radius: .5rem;
    
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        
        color: var(--color--grey-0);
    }

    .paragraph-margin {
        margin-bottom: 1rem;
    }

    .btn-white{
        width: 175px;

        border: 1px solid var(--color-primary);
        color: var(--color-primary);
    }
`


export const StyledButton = styled.button`
    height: 55px;
    width: 130px;

    font-size: 1rem;
    font-weight: 700;

    border-radius: 255px;
    padding: 0.5rem 1rem;
    
    color: var(--color-white);

    margin-top: 2.5rem;

    background-color: ${({color}) => color === "green" ? "var(--color-primary)" : "var(--color-white)"};
`
