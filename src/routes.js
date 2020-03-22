import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Dashboard from './pages/Dashboard'

// import { Container } from './styles';

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'    component={Home}/>
            <Route path='/services'  component={Servicos}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes