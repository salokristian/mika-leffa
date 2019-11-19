import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TheatreAreaSearch from 'finnkino/theatreAreaSearch';
import theme from 'theme/default';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    font: 1rem 'Roboto', sans-serif;
    font-size: 100%;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondaryDarker};

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
      color: inherit;
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

      /* The content of the page, i.e. the StyledApp component below */
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
      <GlobalStyle />
      <StyledApp>
        <Header />
        <TheatreAreaSearch />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
