import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StyledRoot from './StyledRoot/StyledRoot';
import { store } from './mainStore';
import Home from './pages/Home/Home';
import mainTheme from './themes/mainTheme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <StyledRoot id="styleRoot">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </StyledRoot>
    </ThemeProvider>
  </Provider>
);

export default App;
