import React from 'react'
import Image from 'next/image'

const tagline = () => {
  return (
    <div className="tagline">
        <div className="Filter">
            <Image
                src="/Images/Filters.svg"
                width={30}
                height={30}
                alt="filters"
            />
            <p>Filter</p>
        </div>
        <div className="img-1">
            <Image
                src="/Images/Grid.svg"
                width={30}
                height={30}
                alt="grid"
            />
        </div>
        <div className="img-2">
            <Image
                src="/Images/View.svg"
                width={30}
                height={30}
                alt="view"
            />
        </div>
        <div className="results">
            <p>Showing 1–16 of 32 results</p>
        </div>
        <div className="show">
            <p>Show</p>
            <Image
                src="/Images/16.svg"
                width={55}
                height={55}
                alt='16'
            />
        </div>
        <div className="sort">
            <p>Short by</p>
            <Image
                src="/Images/Default.svg"
                width={188}
                height={55}
                alt='sort'
            />
        </div>
    </div>
)
}

export default tagline