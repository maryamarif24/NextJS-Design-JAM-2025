import React from 'react'

const footer = () => {
  return (
    <div className="footer max-md:w-[768px] max-md:h-[2000px] ">
        <div className="footer-content max-md:w-[768px]">
            <div className="f-c-1 max-md:block">
                <div className="f-c-1-1">
                    <p>400 University Drive Suite 200 Coral Gables,</p>
                    <p>FL 33146</p>
                </div>
                <div className="f-c-1-2">
                    <div className="fc-1-2-left max-md:block">
                        <div className="fc-link max-md:mb-[55px] ">
                            <p className="one">Links</p>
                            <div className='home-links'>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Shop">Shop</a></li>
                                    <li><a href="/About">About</a></li>
                                    <li><a href="/Contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="help">
                            <p className="one">Help</p>
                            <div className='help-links'>
                                <ul>
                                    <li><a href="#">Payment Options</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Privacy Policies</a></li>                                </ul>
                            </div>
                        </div>
                        <div className="newsletter max-md:mb-[40px]">
                            <p className="one">Newsletter</p>
                            <p className="form">
                                <input type="text" placeholder='Enter Your Email Address'/>
                                <button>SUBSCRIBE</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-c-2 max-md:w-[768px] max-md:m-0 max-md:pl-[0px] max-md:mt-[840px] ">
                <p>2022 Meubel House. All rights reverved</p>
            </div>
        </div>
    </div>
)
}

export default footer