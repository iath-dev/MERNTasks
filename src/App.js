import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthPage, RegisterPage, ProjectsPage } from './layouts';
import ProjectState from './contexts/projects/state';
import TasksProvider from './contexts/tasks/provider';
import AlertsProvider from './contexts/alerts/provider';

function App() {
  return (
    <ProjectState>
      <TasksProvider>
        <AlertsProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={AuthPage} exact />
              <Route path="/register" component={RegisterPage} />
              <Route path="/projects" component={ProjectsPage} />
            </Switch>
          </BrowserRouter>
        </AlertsProvider>
      </TasksProvider>
    </ProjectState>
  );
}

export default App;
