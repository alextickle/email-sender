import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';

const Main = props => (
  <div>
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (props.user ? <HomeContainer /> : <LoginContainer />)}
        />
        <Route
          exact
          path="/home"
          render={() => (props.user ? <HomeContainer /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/404"
          render={() =>
            props.user ? <HomeContainer /> : <h1>Page Not Found</h1>}
        />
      </Switch>
    </main>
  </div>
);

export default Main;
