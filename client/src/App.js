import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import MainRouter from './routes/Router';
import { store } from './store/Store';

//theme
import { theme } from './styles/Theme-variable';
import GlobalStyles from './styles/Globalstyles';


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <MainRouter />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
