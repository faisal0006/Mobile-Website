// import React,{useState} from 'react'

const Header = ({selectedCategory,setSelectedCategory}) => {

  const data=['Budget','MidRange','Premium','My Phone Journey']
  

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
              style={{width:'1.5rem',height:'1rem'}}
              src='../public/assets/cart.png'
              alt="Cart"
              className="cart-icon"
            />
          </div>
        </div>
    </>
    );
};

export default Header;