import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default (props) => {
  return(
    <div>
      <Link id="nav-view-cart-link" to="/shopping-cart" className="btn btn-secondary">
         <FaShoppingCart/> { props.cartItemCount }
      </Link>
    </div>
  );
}
