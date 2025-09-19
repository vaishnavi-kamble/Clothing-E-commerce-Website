import React from 'react'
import './Breadcrum.css'
import next_icon from '../Assests/next_icon.png'

export const Breadcrum = (props) => {
    const {product} = props

  return (
    <div className='breadcrum'>
        HOME <img src={next_icon} alt="" /> {product.category} <img src={next_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum