import React from 'react'
import Image from 'next/image'

const spHeader = () => {
  return (
    <div className="asgaard-header">
        <div className="sp-link">
            <a href="/" className="sp-link-1">Home</a>
            <Image
                src="/Images/Right Arrow.svg"
                width={24}
                height={24}
                alt="Arrow"
            />
        </div>
        <div className="sp-link">
            <a href="/Shop" className='sp-link-1'>Shop</a>
            <Image
                src="/Images/Right Arrow.svg"
                width={24}
                height={24}
                alt="Arrow"
            />
        </div>
        <div className="product-name">
            <p>Asgaard Sofa</p>
        </div>
    </div>
)
}

export default spHeader