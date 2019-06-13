import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'main-styled-components';

import { StyledRoot } from 'src/styledRoot/StyledRoot';
import mainTheme from 'themes/mainTheme';
import Home from 'pages/Home/Home';
import HyperloopCalculatorContainer from 'pages/HyperloopCalculator/HyperloopCalculatorContainer';
import { store } from './mainStore';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <StyledRoot id="styleRoot">
        <Router>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/hyperloopCalculator"
            component={HyperloopCalculatorContainer}
          />
        </Router>
      </StyledRoot>
    </ThemeProvider>
  </Provider>
);

export default App;
