import AddToCart from './AddToCart';
import React from "react";
import cartIcon from '../assets/cart.png';


const Header = ({ selectedCategory,setSelectedCategory,count}) => {

  const data=['MyPhoneJourney','History','Budget','MidRange','Premium']
  

  return (
    <>
      <div className='header-items'>
        {data.map(category=>(
          <div
          className={
            "header-item " +
            (category === selectedCategory ? "header-item-selected" : "")}
          key={category}
          onClick={()=>setSelectedCategory(category)}
                
          >{category}</div>
        ))}

          <div className="header-cart">
            <img 
              style={{width:'2rem',height:'2.2rem'}}
              src={cartIcon}
              alt="Cart"
              className="cart-icon"/>
            <p className="count">{count > 0 ? count : ""}</p>
              
          </div>
        </div>
    </>
    );
};

export default Header;
