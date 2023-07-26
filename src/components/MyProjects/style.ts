import { styled } from "styled-components";
import { StyledSolidButton } from "../../styles/buttons";

export const StyledMyProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
`;

export const StyledMyProjectHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const StyledMyProjectButton = styled(StyledSolidButton)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5625rem 1.75rem 0.5625rem 1.1875rem;

  img {
    width: 37px;
  }
`;

export const StyledMyProjectList = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
  }

  .noProjectParagraph {
    text-align: center;
  }
`