import React from 'react'
import Budget from '../budget'
import MidRange from '../midrange'
import Premium from '../premium';

const categories = {
  Budget,
  MidRange,
  Premium
};

const ProductList = ({selectedCategory}) => {

  const phones = categories[selectedCategory] || [];
  return (
    <>
      <div className='phone-display'>
        {phones.map((phone, index) => (
            <div className='phone-card' key={index}>
              <img src={phone.img} alt={phone.name}/>
              <h3>{phone.name}</h3>
              <p>Price: ₹ {phone.price}</p>
            </div>
          ))}
      </div>
    </>

  )
}

export default ProductList 