import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const arrivals = () => {
  return (
    <div className="arrivals max-md:w-[768px] max-md:h-[800px] max-md:mt-[1100px] max-md:block ">
        <div className="arrivals-img max-md:w-[600px] max-md:mt-[50px] max-md:pl-[50px] ">
            <Image
                src="/Images/SofaSet.PNG"
                width={900}
                height={900}
                alt="Sofa Set"
            />
        </div>
        <div className="arrivals-container max-md:-mt-[100px] max-md:ml-[190px] ">
            <div className="arrivals-text">
                <div className="a-text">
                    <p>New Arrivals</p>
                    <h1>Asgaard sofa</h1>
                </div>
            </div>
            <a href="/Asgaard">
                <Button variant="outline" size="outline" className="arrivals-btn">Order Now</Button>
            </a>
        </div>
    </div>
)
}

export default arrivals