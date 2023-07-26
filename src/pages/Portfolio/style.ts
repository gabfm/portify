import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

export const StyledThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.backgroundColor};

  & h1,
  h2, h3,
  p {
    color: ${({ theme }) => theme.color};
  }
`;

export const StyledPortfolioContainer = styled.div<{ maxwidth: string }>`
  ${StyledContainer}

  & main {
    margin: 3.5625rem 0;
  }
`;

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const StyledUserSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 100px;

  & h1,
  span {
    line-height: 1;
  }

  @media (max-width: 48rem) {
    gap: 36px;
    flex-direction: column;
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  max-width: 28.125rem;
  width: 100%;
`;

export const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5.1875rem;

  & h1,
  span {
    line-height: 1;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: 100%;
  }
`;