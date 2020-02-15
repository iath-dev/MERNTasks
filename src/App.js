import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthPage, RegisterPage, ProjectsPage } from './layouts';
import ProjectState from './contexts/projects/state';

function App() {
  return (
    <ProjectState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AuthPage} exact />
          <Route path="/register" component={RegisterPage} />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
      </BrowserRouter>
    </ProjectState>
  );
}

export default App;
