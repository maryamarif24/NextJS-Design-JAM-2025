import React from 'react'
import Header from '@/Components/Header/header'
import Footer from '@/Components/Footer/footer'
import ShopHero from '@/Components/ShopHero/shophero'
import Products from '@/Components/Products/products'
import TagLine from '@/Components/ShopTagline/tagline'
import Why from '@/Components/Why/why'


const page = () => {
  return (
    <div>
        <Header />
        <ShopHero />
        <TagLine />
        <Products />
        <Why />
        <Footer />
    </div>
  )
}

export default page