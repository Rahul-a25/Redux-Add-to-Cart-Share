
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Product from './component/Product'
import Cart from './component/Cart'
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
