import React from 'react'
import Image from 'next/image'

const items = () => {
  return (
    <div className="items max-md:w-[768px]">
        <div className="item1">
            <Image
                src="/Images/SideTable.PNG"
                width={450}
                height={450}
                alt="Side Table"
            />
            <h2>Side Table</h2>
            <div className="item-text">
                <p>View More</p>
            </div>
        </div>
        <div className="item2">
            <Image
                src="/Images/Sofa.PNG"
                width={400}
                height={450}
                alt="Sofa"
                className="ml-[60px] max-md:ml-0"
            />
            <h2>Side Table</h2>
            <div className="item-text">
                <p>View More</p>
            </div>
        </div>
    </div>
)
}

export default items