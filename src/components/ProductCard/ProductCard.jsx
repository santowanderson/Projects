import propTypes from 'prop-types';
import React, { useContext } from 'react';
import { BsCartPlusFill } from "react-icons/bs";

import AppContext from '../../context/AppContext';
import '../../utils/formatCurrency';
import formatCurrency from '../../utils/formatCurrency';
import './ProductCard.css';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);
  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  return (
    <section className='product_card'>
      <img 
        className='card_image'
        src={ thumbnail.replace(/\w\.jpg/gi, 'W.jpg') } 
        alt="Product" 
      />
      <div className="card_infos">
        <h2 className='card_price'>{ formatCurrency(price, 'BRL') }</h2>
        <h2 className="card_title">{ title }</h2>
      </div>
      <button 
        onClick={ handleAddCart }
        type='button' 
        className='button_add_cart'>
          <BsCartPlusFill />
        </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;