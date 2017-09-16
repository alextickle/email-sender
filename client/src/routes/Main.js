import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import FormContainer from '../containers/FormContainer';
import MessagesContainer from '../containers/MessagesContainer';

const Main = props => (
  <div>
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (props.id ? <FormContainer /> : <LoginContainer />)}
        />
        <Route
          exact
          path="/form"
          render={() => (props.id ? <FormContainer /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/messages"
          render={() =>
            props.id ? <MessagesContainer /> : <Redirect to="/" />}
        />
        <Route exact path="/404" render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </main>
  </div>
);

export default Main;
