import React from 'react'
import Image from 'next/image'

const shophero = () => {
  return (
    <div className="shop-hero">
        <div className="shop-hero-div">
            <div className="shop-hero-logo">
                <Image
                    src="/Images/Logo.svg"
                    width={100}
                    height={100}
                    alt="Logo"
                />
                <h1>WishList</h1>
            </div>
            <div className="hero-menu">
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
                <div className="current">Wishlist</div>
            </div>
        </div>
    </div>
)
}

export default shophero