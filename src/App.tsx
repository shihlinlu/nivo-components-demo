import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'main-styled-components';

import { StyledRoot } from 'src/StyledRoot/StyledRoot';
import mainTheme from 'themes/mainTheme';
import Home from 'pages/Home/Home';
import { store } from './mainStore';

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
