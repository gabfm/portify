import { styled } from "styled-components";


export const StyledList = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;

    @media (max-width: 542px) {
        flex-wrap: wrap;
    }
`

export const StyledProjectContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.3125rem;
    
    @media (max-width: 542px) {
        flex-wrap: wrap;
    }
`

export const StyledProjectImg = styled.div`
    min-width: fit-content;
    & img {
    width: 100%;
    border-radius: 20px;

    /* @media (min-width: 26.625rem) {
        max-width: 350px;
    } */

    @media (min-width: 543px) {
        max-width: 240px;
        min-width: 240px;
    }
}
`

export const StyledProjectInfo = styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 500px;
`

export const StyledLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;

    @media (max-width: 542px) {
        margin: 0 auto;
    }
`