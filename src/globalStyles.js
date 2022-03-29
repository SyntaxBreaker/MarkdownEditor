import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html, body {
        height: 100%;
    }

    #root {
        height: 100%;
    }

    pre {
        overflow-x: auto;
    }
`;

export default GlobalStyle;