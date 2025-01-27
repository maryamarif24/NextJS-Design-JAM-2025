import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className="header max-md:w-[768px]">
        <div className="header-menu-img md:hidden ml-[190px]">
            <Image
                src="/Images/Menu.svg"
                width={30}
                height={30}
                alt="Menu"
            />
        </div>
        <div className="header-links max-md:hidden">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
        <div className="header-btns max-md:hidden">
            <div className="btns">
                <a href="/Account">
                    <Image
                        src="/Images/Account.svg"
                        width={28}
                        height={28}
                        alt="Account"
                    />
                </a>
                <Image
                    src="/Images/Search.svg"
                    width={28}
                    height={28}
                    alt="Search"
                />
                <Image
                    src="/Images/WishList.svg"
                    width={28}
                    height={28}
                    alt="Wishlist"
                />
                <a href="/Cart">
                    <Image
                        src="/Images/Cart.svg"
                        width={28}
                        height={28}
                        alt="Cart"
                    />
                </a>
            </div>
        </div>
    </div>
)
}

export default header