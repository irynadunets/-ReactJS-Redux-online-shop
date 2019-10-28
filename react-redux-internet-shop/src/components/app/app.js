import React from 'react';
import './app.css';
import { Switch, Route } from "react-router-dom";
import Header from '../../containers/header/header';
import {   HomePage,  CartPage, LoginPage, RegisterPage } from  '../pages';

const App = () => {
  return (
    <div>
    <Header  numGoods={0} total={0} />
    <Switch>
     <Route
      path="/"
      component={ HomePage }
       exact />
     <Route
        path="/cart"
        component={ CartPage }
         />
      <Route
           path="/login"
         component={ LoginPage }
        />
      <Route
          path="/register"
        component={ RegisterPage }
       />
    </Switch>
    </div>
  );
};

export default App;
