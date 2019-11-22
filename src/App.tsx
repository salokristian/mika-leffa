import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ShowDatePicker from 'finnkino/ShowDatePicker';
import TheatreAreaSearch from 'finnkino/TheatreAreaSearch';
import theme from 'theme/default';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  > ${Main} {
    flex-grow: 1;
  }
`;

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
      font-size: inherit;
    }

    /*  
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.

    If it is desirable to show a focus indicator other than the default browser indicator, 
    it should be done case-by-case with the following selector:
      
      .focus-visible
    
    */
    &.js-focus-visible :focus:not(.focus-visible) {
      outline: none;
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

      /* The content of the page should span at least the whole page */
    > ${StyledApp} {
        flex-grow: 1;
      }
    }
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Main>
          <TheatreAreaSearch />
          <ShowDatePicker />
        </Main>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
