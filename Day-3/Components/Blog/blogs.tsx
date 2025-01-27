import React from 'react'
import Image from 'next/image'

const blogs = () => {
  return (
    <div className="blogs max-md:w-[768px] ">
        <div className="blog-header max-md:w-[768px]">
            <div className="blog-header-content max-md:w-[768px] max-md:items-center">
                <div className="bhc-1 max-md:w-[768px] max-md:text-[30px] max-md:m-0 max-md:mb-[20px] max-md:ml-[200px] ">Our Blogs</div>
                <div className="bhc-2 max-md:w-[479px] max-md:text-center max-md:m-0 max-md:p-0 max-md:ml-[60px] ">Find a bright ideal to suit your taste with our great selection</div>
            </div>
        </div>
        <div className="blog-content max-md:w-[768px] max-md:block max-md:h-[1000px]">
            <div className="b-c-details max-md:w-[768px] max-md:block max-md:h-[1000px] max-md:ml-[100px]">
                <div className="b-c-d-1  max-md:w-[768px] max-md:mb-[20px]">
                    <div className="bcd1-img">
                        <Image
                            src="/Images/Blog1.svg"
                            width={393}
                            height={393}
                            alt="Blog 1"
                        />
                    </div>
                    <div className="bcd1-text">
                        <p>Going all-in with millennial design</p>
                        <div className="bcd-text">
                            <p>Read More</p>
                        </div>
                        <div className="blog-read-time">
                            <div className="time">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>5 min</p>
                            </div>
                            <div className="calendar">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-c-d-2 max-md:mb-[20px]">
                    <div className="bcd1-img">
                        <Image
                            src="/Images/Blog2.svg"
                            width={393}
                            height={393}
                            alt="Blog 1"
                        />
                    </div>
                    <div className="bcd1-text">
                        <p>Going all-in with millennial design</p>
                        <div className="bcd-text">
                            <p>Read More</p>
                        </div>
                        <div className="blog-read-time">
                            <div className="time">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>5 min</p>
                            </div>
                            <div className="calendar">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-c-d-3 max-md:mb-[20px]">
                    <div className="bcd1-img">
                        <Image
                            src="/Images/Blog3.svg"
                            width={393}
                            height={393}
                            alt="Blog 1"
                        />
                    </div>
                    <div className="bcd1-text">
                        <p>Going all-in with millennial design</p>
                        <div className="bcd-text">
                            <p>Read More</p>
                        </div>
                        <div className="blog-read-time">
                            <div className="time">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>5 min</p>
                            </div>
                            <div className="calendar">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blg-button max-md:w-[768px] max-md:mt-[800px] max-md:m-0 max-md:p-0 max-md:-ml-[120px] ">
                <div className="blog-btn">
                    <div className="blog-text">
                        <a href="/Blog">View All Post</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default blogs