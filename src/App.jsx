import { useState } from 'react'
import './styles/App.css';
import Header from './components/header';
import ProductList from './components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory]=useState('MyPhoneJourney');
  const [count, setCount]=useState(0);
  return (
    <div>
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} count={count}/>
      <ProductList selectedCategory={selectedCategory} setCount={setCount} count={count}/>
    </div>
  )
}

export default App;
