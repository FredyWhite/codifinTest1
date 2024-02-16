import React, { Fragment, useState, useContext } from 'react';
import useNavigation from '../../hooks/useNavigation';
import { contextShoppingCart } from '../../context/ShoppingCartContext'
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { handleNavigation } = useNavigation();
  const { shoppingCart, handleGetTotalPrice, handleRemoveFromCart } = useContext(contextShoppingCart);

  return (
    <Fragment>
      <div>
        <button onClick={() => handleNavigation("ListProducts")}>
          <span>Back</span>
        </button>
      </div>
      <div className="shopping-cart">
        <span className="shopping-cart__title">Shopping Cart</span>
        {
          shoppingCart.length > 0 ? shoppingCart.map(item => (
            <div key={item.id} className="shopping-cart__item">
              <span className="shopping-cart__item-name">
                <span>{item.quantity}</span>
                {item.name}
              </span>
              <span className="shopping-cart__item-price">${item.price * item.quantity}</span>
              <button
                className="shopping-cart__item-remove"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          )) : <div className="shopping-cart__alert">Your shopping cart is waiting to be filled! Add products now to start your shopping experience!</div>
        }
        {shoppingCart.length > 0 &&
          <div className="shopping-cart__total">
            <span>Total </span>
            <span>${handleGetTotalPrice()}</span>
          </div>
        }
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
