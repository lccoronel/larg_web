import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../modules/SignIn';
import Home from '../modules/Home';
import Team from '../modules/Team';
import Office from '../modules/Office';
import Register from '../modules/Register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/team" component={Team} />
        <Route path="/office" component={Office} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
