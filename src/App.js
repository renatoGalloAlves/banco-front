import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import { ContasContextProvider } from './contexts/contas';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ContasContextProvider>
          <GlobalStyles />
          {content}
        </ContasContextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
