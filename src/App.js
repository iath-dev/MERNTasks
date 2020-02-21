import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthPage, RegisterPage, ProjectsPage } from './layouts';
import ProjectState from './contexts/projects/state';
import TasksProvider from './contexts/tasks/provider';
import AlertsProvider from './contexts/alerts/provider';
import AuthProvider from './contexts/auth/provider';
import tokenAuth from './config/token';
import PrivateRoute from './routes/private';

const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TasksProvider>
        <AlertsProvider>
          <AuthProvider>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={AuthPage} exact />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/projects" component={ProjectsPage} />
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </AlertsProvider>
      </TasksProvider>
    </ProjectState>
  );
}

export default App;
