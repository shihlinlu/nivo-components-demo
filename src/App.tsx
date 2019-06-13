import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { ThemeProvider } from 'main-styled-components';
import { StyledRoot } from 'src/styledRoot/StyledRoot';

import mainTheme from 'themes/mainTheme';
import Home from 'pages/Home/Home';
import HyperloopCalculatorContainer from 'pages/HyperloopCalculator/HyperloopCalculatorContainer';
import { history, store } from './mainStore';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={mainTheme}>
        <StyledRoot id="styleRoot">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/hyperloopCalculator"
              component={HyperloopCalculatorContainer}
            />
          </Switch>
        </StyledRoot>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
