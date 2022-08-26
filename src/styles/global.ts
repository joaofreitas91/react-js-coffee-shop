import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['base-text']};
  }
 `
