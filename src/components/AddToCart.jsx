
import React from 'react';
import Header from './header';
const AddToCart = ({phonePrice, quantity, onAdd, onIncrement, onDecrement }) => {

  if (quantity === 0) {
    return (
      <button onClick={() => { onAdd();}}>
                <div className="default-btn">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="#ffffff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cart-icon"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
                      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                    ></path>
                  </svg>
                  <span>Add to Cart</span>
                </div>
                <div className="hover-btn">
                  <span> ₹ {phonePrice}</span>
                </div>
              </button>
    );
  } else {
    return (
      <div className='add-to-cart-container'>
        <div className='minus' onClick={onDecrement}>-</div>
        <div className='quantity'>{quantity}</div>
        <div className='plus' onClick={onIncrement}>+</div>
      </div>
    );
  }
};

export default AddToCart;
