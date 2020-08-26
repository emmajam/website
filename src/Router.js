import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import EasterEgg from './EasterEgg';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/easteregg' component={EasterEgg}></Route>
    </Switch>
  );
}

export default Router;