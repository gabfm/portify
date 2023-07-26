import { styled } from "styled-components"
import { StyledContainer } from "../../styles/grid"
import { StyledLinkButton, StyledLinkOutline } from "../../styles/buttons";

export const StyledMain = styled.main<{ maxwidth: string; }>`
    ${StyledContainer}
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 60px;

    @media (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
        }
`

export const StyledContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 47px;
    width: 100%;
`

export const StyledContainerImg = styled.figcaption`
    & img {
        width: clamp(100px, 50vw, 520px);

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

export const StyledPortifyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    max-width: 550px;
`

export const StyledContainerBtns = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
            justify-content: center;
    }
`

export const StyledHomeLink = styled(StyledLinkButton)`
    padding: 1.125rem 2.75rem;

    @media (max-width: 768px) {
            width: 100%;
            text-align: center;
    }
`

export const StyledHomeLinkOutline = styled(StyledLinkOutline)`
    padding: 1.125rem 2.75rem;

    @media (max-width: 768px) {
            width: 100%;
            text-align: center;
    }
`