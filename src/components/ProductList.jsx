import React, { useState } from 'react';
import Budget from '../data/budget';
import MidRange from '../data/midrange';
import Premium from '../data/premium';
import AddToCart from './AddToCart';
import MyPhoneJourney from '../data/myphoneData';
import PhoneJourney from './MyPhone';
import PhoneHistory from './PhoneHistory';

const categories = {
  Budget,
  MidRange,
  Premium,
  MyPhoneJourney,
  PhoneHistory
};

const ProductList = ({ selectedCategory, setCount, count }) => {
  if (selectedCategory === 'MyPhoneJourney') {
    return <PhoneJourney />;
  }

  if (selectedCategory === 'History') {
    return <PhoneHistory/>;
  }
  
  const phones = categories[selectedCategory] || [];

  const [cart, setCart] = useState({});

  const handleAdd = (index) => {
    setCart(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
    setCount(count + 1);
  };

  const handleIncrement = (index) => {
    setCart(prev => ({
      ...prev,
      [index]: prev[index] + 1
    }));
    setCount(count + 1);
  };

  const handleDecrement = (index) => {
    setCart(prev => {
      const newCount = Math.max((prev[index] || 1) - 1, 0);
      const updatedCart = { ...prev, [index]: newCount };
      if (newCount === 0) delete updatedCart[index];
      return updatedCart;
    });
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className='phone-display'>
      {phones.map((phone, index) => (
        <div className='phone-card' key={index}>
          <img src={phone.img} alt={phone.name} />
          <h3 className='phone-name'>{phone.name}</h3>
          <p className='phone-price'>Price: ₹ {phone.price}</p>
          <AddToCart
            phonePrice={phone.price}
            quantity={cart[index] || 0}
            onAdd={() => handleAdd(index)}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
