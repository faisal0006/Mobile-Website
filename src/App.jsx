import { useState } from 'react'
import './App.css';
import Header from './components/header';
import ProductList from './components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory]=useState('Budget');
  return (
    <div>
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <ProductList selectedCategory={selectedCategory}/>
    </div>
  )
}

export default App
