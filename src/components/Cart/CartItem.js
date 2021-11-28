import React, { useContext } from 'react';

import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../../context/cart';

const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <div>
      <article className="cart-item">
        <img src={image} alt="" />
        <div>
          <h4>{title}</h4>
          <h5>${price}</h5>
          <button type="button" className="cart-btn remove-btn"
            onClick={() => {
              removeItem(id)
            }}>remove</button>
        </div>
        <div>
          <button type="button" className="cart-btn amount-btn"
            onClick={() => {
              increaseAmount(id);
            }}>
            <FaAngleUp></FaAngleUp>
          </button>
          <p className="item-amount">{amount}</p>
          <button type="button" className="cart-btn amount-btn" onClick={() => {
            decreaseAmount(id, amount);
          }}>
            <FaAngleDown></FaAngleDown>
          </button>
        </div>
      </article>
    </div>
  );
};

export default CartItem;