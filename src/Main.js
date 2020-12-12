import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import Men from "./components/men";
import Women from "./components/women";
import Cart from "./components/cart";
import Myaccount from "./components/myaccount";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
      <Route path="/cart" component={Cart} />
      <Route path="/myaccount" component={Myaccount} />
    </Switch>
  </BrowserRouter>
);

export default Main;
