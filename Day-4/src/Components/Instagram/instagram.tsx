import React from 'react'
import { Button } from '../ui/button'

const instagram = () => {
  return (
    <div className="instagram max-md:w-[768px] max-md:h-[500px] max-md:mt-[1200px]">
        <div className="insta-content max-md:w-[768px]">
            <div className="insta-content-header max-md:w-[768px] max-md:p-0 max-md:m-0">
                <div className="i-c-h-1 max-md:w-[768px] max-md:text-left ">Our Instagram</div>
                <div className="i-c-h-2">Follow our store on Instagram</div>
            </div>
            <div className="insta-btn max-md:w-[768px]">
                <Button variant="follow" size="follow">Follow Us</Button>
            </div>
        </div>
    </div>
)
}

export default instagram