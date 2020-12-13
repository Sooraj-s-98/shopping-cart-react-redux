import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return(
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
     <h2>Shopping IBIL</h2>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shopping-cart">My cart</Link>
          </li>
        </ul>
      </div> 
    </nav>
  );
}
