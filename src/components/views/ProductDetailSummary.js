import React from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log(props);
  return(
    <div class="col-12 col-md-5 m-1">

      <div class=" product-box">
        <h3 class="prod-title"><Link to="/product-detail/{props.product.Id}">{props.product.Title}</Link></h3>
        <Link to="/product-detail/{props.product.Id}"><img class=" rounded mx-auto d-block" src={props.product.ImageUrl} /></Link>
        <div class="prod-details">
          <p class="description"> {props.product.Description}</p>
          <p class="product-prop"><b>Organic:</b> {props.product.Organic}</p>
          <p class="product-prop"><b>Price:</b> {props.product.Price}</p>
        </div>
      <AddToCart />
    </div>
    </div>
  );
}
