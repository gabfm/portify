import { styled } from "styled-components";
import { StyledLinkOutline, StyledSolidButton } from "../../../styles/buttons";

export const StyledFormHeader = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledForm = styled.form`
    height: auto;
    width: 550px;
    
    display: flex;
    flex-direction: column;
    gap: 30px;

    & fieldset {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const StyledContainerBtns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8125rem;
    align-items: flex-start;
    flex-wrap: wrap;

    @media (max-width: 768px) {
            align-items: center;
    }
`

export const StyledLoginButton = styled(StyledSolidButton)`
    padding: 1.125rem 2.5rem;

    @media (max-width: 768px) {
            width: 100%;
            text-align: center;
    }
`

export const StyledLoginLinkOutline = styled(StyledLinkOutline)`
    padding: 1.125rem 2.5rem;

    @media (max-width: 768px) {
            width: 100%;
            text-align: center;
    }
`