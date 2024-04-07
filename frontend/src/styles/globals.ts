import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #202024;
        color: #ffff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
        color: #ffff;
    }
`

export const SeparatorLine = styled.img`
    position: relative;
    left: 50%;
    transform: translateX(-50%)
`