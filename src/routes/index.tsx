import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreatePoint from '../pages/CreatePoint';
import PointCreated from '../pages/PointCreated';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create-point" exact component={CreatePoint}/>
    <Route path="/point-created" exact component={PointCreated}/>
  </Switch>
);

export default Routes;
