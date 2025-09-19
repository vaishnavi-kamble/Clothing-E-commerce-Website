
import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item'

export const Shopcategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>

      <div className="shopcategory-products">
        {all_products.map((item,i) =>{
          if(props.category == item.category){
            return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price} description={item.description}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default Shopcategory