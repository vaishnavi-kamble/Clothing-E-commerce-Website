import React from 'react'
import Hero from '../Components/Hero/hero'
import Popular from '../Components/Popular/Popular'
import Newsletter from '../Components/Newsletter/Newsletter'

export const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Newsletter/>
    </div>
  )
}
export default Homepage