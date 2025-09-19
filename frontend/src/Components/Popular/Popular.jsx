import React from 'react'
import './Popular.css'
import popular_product from '../Assests/popularhomepage'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Our Top Seller Products</h1>
        <hr />
        <div className="popular-item"> 
            {popular_product.map((item,i)=>{
                return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })} 
        </div>
    </div>
  )
}

export default Popular