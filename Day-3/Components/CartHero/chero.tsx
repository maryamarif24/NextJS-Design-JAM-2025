import React from 'react'
import Image from 'next/image'

const CartHero = () => {
  return (
    <div className="ac-hero">
        <div className="ac-hero-div">
            <div className="ac-hero-logo">
                <Image
                    src="/Images/Logo.svg"
                    width={100}
                    height={100}
                    alt="Logo"
                />
                <h1>Cart</h1>
            </div>
            <div className="ac-menu">
                <div className="link">
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
                <div className="drpdwn">
                    <Image
                        src="/Images/Right Arrow.svg"
                        width={20}
                        height={20}
                        alt="Right Arrow"
                        className="mx-[6px]"
                    />
                </div>
                <div className="current">Cart</div>
            </div>
        </div>
    </div>
)
}

export default CartHero