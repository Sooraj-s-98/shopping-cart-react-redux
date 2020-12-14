import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return(
    <React.Fragment>
      <h2>Shopping IBIL</h2>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact={true} to="/" activeClassName='active' className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shopping-cart" activeClassName='active' className="nav-link">My cart</NavLink>
          </li>
        </ul>
      </div> 
    </React.Fragment>
  );
}
