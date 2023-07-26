import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #11BCC7;

        --color-white: #FFFFFF;
        --color-gray: #808080;
        --color-light-gray: #F5F5F5;
        --color-black: #000000;

        --font-primary: "Montserrat", sans-serif;
        --font-secondary: "Roboto", sans-serif;
    }

    body {
        font-family: var(--font-secondary);
    }

    span {
        font-family: var(--font-primary);
        font-weight: 700;
        font-size: 1.125rem;
    }

`