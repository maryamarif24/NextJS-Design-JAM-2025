import React from 'react'
import Header from '@/Components/Header/header'
import Hero from '@/Components/Hero/hero'
import Items from '@/Components/Items/items'
import Arrivals from '@/Components/NewArrivals/arrivals'
import Toppicks from '@/Components/TopPicks/toppicks'
import Blogs from '@/Components/Blog/blogs'
import Instagram from '@/Components/Instagram/instagram'
import Footer from '@/Components/Footer/footer'
import Head from 'next/head'


const page = () => {
  return (
    <div>

      <Header />
      <Hero />
      <Items />
      <Toppicks />
      <Arrivals />
      <Blogs />
      <Instagram />
      <Footer />
    </div>
  )
}

export default page