import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Loginsignup from './Pages/Loginsignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import Aboutus from './Pages/Aboutus';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Women' element={<Shopcategory category="Women"/>} />
        <Route path='/Men' element={<Shopcategory category="Men"/>} />
        <Route path='/Kids' element={<Shopcategory category="Kids"/>} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='product' element={<Product/>} >
          <Route path=':productId' element={<Product/>} />
          </Route>

          <Route path='/cart' element={<Cart/>} />
          <Route path='/signup' element={<Loginsignup/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
