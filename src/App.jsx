import React from 'react'
import Header from './components/header'
import Showcase from './components/showcase'
import Products from './components/products'
import Brand from './components/brand'
import AboutUs from './components/about-us'
import NewProducts from './components/new-products'

const App = () => {
  return (
    <div >
      <Header/>
      <Showcase/>
      <Products/>
      <Brand/>
      <AboutUs/>
      <NewProducts/>
    </div>
  )
}

export default App
