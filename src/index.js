import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home';
import ShoppingCart from './components/pages/ShoppingCart';
import NavContainer from './components/containers/NavContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <Router>
      <div className="App">
        <NavContainer />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
