import { styled } from "styled-components";
import { StyledSolidButton } from "../../styles/buttons";

export const StyledModal = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(17, 188, 199, 0.2);
      z-index: 9999;

      .divContainer{
        display: flex;
        flex-direction: column;
        width: clamp(200px, 100%, 644px);
        max-height: calc(100dvh - 1.25rem);
        margin: 1.25rem;
        background-color: rgba(255, 255, 255, 1);
        padding: 2rem;
        gap: 1rem;
        overflow-y: auto;
      }

      .divTitle{
        display: flex;
        justify-content: space-between;
        
        
        img{
          cursor:pointer;
        }
      }

      .inputContainer{
        display: flex;
        flex-direction: column;
        gap: 1rem;

      }
      .divContainerBts{
        display: flex;
        justify-content: end;
      }
    
`
     
 export const StyledButton = styled(StyledSolidButton)`
     padding: 1.125rem 1.875rem;

     @media (max-width: 768px) {
            width: 100%;
    }
 `