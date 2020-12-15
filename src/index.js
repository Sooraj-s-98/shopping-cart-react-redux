import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home';
import ShoppingCart from './components/pages/ShoppingCart';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import NavContainer from './components/containers/NavContainer';
import store from './store';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <NavContainer />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
          <Route path="/product-detail/:productId" component={ProductDetailsPage}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
