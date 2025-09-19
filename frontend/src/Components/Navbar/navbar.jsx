import React,{ useContext, useEffect, useState } from 'react'
import './navbar.css'
import logo from '../Assests/logo.png'
import shoppingcart from '../Assests/shoppingcart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
//navbar
  const [menu,setMenu] = useState("Hemo Decor");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="nav-bar"> 
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}> <Link style={{textDecoration:'none'}} to='/'>Home</Link> {menu==="Home"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Women")}}> <Link style={{textDecoration:'none'}} to='/Women'>Women</Link> {menu==="Women"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Men")}}> <Link style={{textDecoration:'none'}} to='/Men'>Men</Link> {menu==="Men"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Kids")}}> <Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>  {menu==="Kids"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("About Us")}}> <Link style={{textDecoration:'none'}} to='/Aboutus'>About Us</Link> {menu==="About Us"?<hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/signup"> <button>Login</button> </Link>
           <Link to="/cart"> <img src={shoppingcart} alt="" /> </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
