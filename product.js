import React from 'react';
import SubProduct from './subProduct';
function Cart({ name, storage, price, brand }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Storage: {storage}GB</h2>
      <h3>Price: {price}</h3>
      <h4>Brand: {brand}</h4>
      <SubProduct color='blue' RAM={8} />


    </div>
  );
}

export default Cart;