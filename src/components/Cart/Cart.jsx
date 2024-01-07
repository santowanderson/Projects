import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={ `cart ${isCartVisible ? 'cart_active' : ''}` }>
      <div className='cart_items'>
        { cartItems.map((cartItem) => <CartItem key={ cartItem.id } data={ cartItem } />) }
      </div>
      <div className='cart_resume'>
        { formatCurrency(totalPrice, 'BRL') }
      </div>
    </section>
  );
}

export default Cart;