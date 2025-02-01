import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <div className="herosection max-md:w-[768px]">
        <div className="herosection-left-side max-md:w-[245px]">
            <h1>Rocket single seater</h1>
            <div className="hsec-text">
                <p>Shop Now</p>
            </div>
        </div>
        <div className="herosection-right-side">
            <Image
                src="/Images/Single Seater.svg"
                width={853}
                height={1000}
                alt="Single Seater"
            />
        </div>
    </div>
)
}

export default hero