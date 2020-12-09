import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from 'theme/theme-styled';
import GlobalStyle from 'theme/global-style';

import Layout from 'components/Layout';

import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Favorites from 'pages/Favorites';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artist/detail/:id" component={Detail} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
