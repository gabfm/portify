import { css, styled } from "styled-components";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
`;

export const StyledContainer = css<{ maxwidth: string; }>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "1200px")};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 2vw, 2rem);
`;