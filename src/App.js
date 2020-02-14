import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthPage, RegisterPage, ProjectsPage } from './layouts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AuthPage} exact />
        <Route path="/register" component={RegisterPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
