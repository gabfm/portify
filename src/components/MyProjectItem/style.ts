import { styled } from "styled-components";

export const StyledList = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    @media (max-width: 425px) {
        justify-content: center;
    }

    .rigth_container {
      display: flex;
      align-items: center;
        gap: 50px;
        flex-wrap: wrap;
        justify-content: center;
    }

    h3, p {
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    .cover_img {
      width: 242px;
      height: 150px;
      border-radius: 20px;
      object-fit: cover;
    }

    .info_container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 435px;
    }
`

export const StyledButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    & button {
        background-color: transparent;
    }
`