import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../containers/LoginContainer';

const Main = props => (
  <div>
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (props.userId ? <FormContainer /> : <LoginContainer />)}
        />
        <Route
          exact
          path="/form"
          render={() =>
            props.userId ? <FormContainer /> : <Redirect to="/" />}
        />
        <Route
          exact
          path="/messages"
          render={() =>
            props.userId ? <MessagesContainer /> : <Redirect to="/" />}
        />
        <Route exact path="/404" render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </main>
  </div>
);

export default Main;
