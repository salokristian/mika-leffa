import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'theme/default';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    font: 1rem 'Roboto', sans-serif;
    font-size: 100%;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondaryDark};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Nunito', sans-serif;
    }

    input,
    select,
    textarea,
    button {
      font-family: inherit;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    border: 0;

    > #root {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      // The content of the page, i.e. the StyledApp component below
      > * {
        flex-grow: 1;
      }
    }
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  > main {
    flex-grow: 1;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledApp>
          <header>
            <h1>Mika leffa</h1>
          </header>
          <main>MAIN</main>
          <footer>Made with &#10084;&#65039; by salokristian</footer>
        </StyledApp>
      </>
    </ThemeProvider>
  );
};

export default App;
