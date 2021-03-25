import React from 'react';
import Cart from './Cart';
import Home from './Home';
import ItemDetail from './ItemDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/products/:id">
        <ItemDetail />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;