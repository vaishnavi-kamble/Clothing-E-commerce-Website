import React, { createContext, useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext';
import remove_icon from '../Assests/remove_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext);
    console.log(all_products);
  return (
    <div className='cartitems'>

        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_products.map((e) => {
            if(cartItems[e.id] > 0){
                 return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItems[e.id]}</button> 
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h2>Total</h2>
                        <h2>{getTotalCartAmount()}</h2>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>

        </div>

    </div>
  )
}

export default CartItems