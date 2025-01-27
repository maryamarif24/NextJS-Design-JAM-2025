import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header/header'
import Footer from '@/Components/Footer/footer'
import Why from '@/Components/Why/why'
import CartHero from '@/Components/CartHero/chero'


const page = () => {
  return (
    <div className="account">
        <Header/>
        <CartHero/>

        <div className="h-cart">
            <div className="h-cart-items">
                <div className="h-c-products">
                    <div className="h-c-p-header">
                        <h1 className='mr-[114px]'>Product</h1>
                        <h1 className='mr-[137px]'>Price</h1>
                        <h1 className='mr-[36px]'>Quantity</h1>
                        <h1>Subtotal</h1>
                    </div>
                    <div className="h-c-p-details">
                        <div className="hcpd-img">
                            <Image
                                src="/Images/As-cart.svg"
                                width={106}
                                height={106}
                                alt="As-cart"
                            />
                        </div>
                        <h1>Asgaard sofa</h1>
                        <h2>Rs. 250,000.00</h2>
                        <div className="quan">1</div>
                        <h3>Rs. 250,000.00</h3>
                        <div className="dustbin">
                            <Image
                                src="/Images/Dustbin.svg"
                                width={28}
                                height={28}
                                alt="Dustbin"
                            />
                        </div>
                    </div>
                </div>
                <div className="cart-totals">
                    <h1>Cart Totals</h1>
                    <div className="cart-totals-h2">
                        <h1>Subtotal</h1>
                        <h3>Rs. 250,000.00</h3>
                    </div>
                    <div className="cart-totals-total">
                        <h1>Total</h1>
                        <h3>Rs. 250,000.00</h3>
                    </div>
                    <div className="total-button">
                        <h1>Check Out</h1>
                    </div>
                </div>
            </div>
        </div>

        <Why/>
        <Footer/>
    </div>
)
}

export default page