import React from 'react'
import Header from '@/Components/Header/header'
import BlogHero from '@/Components/BlogHero/blghero'
import Why from '@/Components/Why/why'
import Image from 'next/image'
import Footer from '@/Components/Footer/footer'

const Blog1 = () => {
  return (
    <div className="blog-post">
        <Header />
        <BlogHero />

        <div className="blog-content">
            <div className="blog-c-a">
                <div className="bca">
                    <div className="bca-img">
                        <Image
                            src="/Images/R1.svg"
                            width={817}
                            height={500}
                            alt="Blog Image"
                        />
                    </div>
                    <div className="bcai-details">
                        <div className="bcai-admin">
                            <Image
                                src="/Images/BUser.svg"
                                width={20}
                                height={20}
                                alt='user'
                            />
                            <h1>Admin</h1>
                        </div>
                        <div className="bcai-date">
                            <Image
                                src="/Images/BCalendar.svg"
                                width={20}
                                height={20}
                                alt='user'
                            />
                            <h1>14 Oct 2022</h1>
                        </div>
                        <div className="bcai-tag">
                            <Image
                                src="/Images/BTag.svg"
                                width={24}
                                height={24}
                                alt='user'
                            />
                            <h1>Wood</h1>
                        </div>
                    </div>
                    <div className="bca-heading">
                        <h1>Going all-in with millennial design</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h2>
                    </div>
                    <div className="bca-btn">
                        <div className="bca-text">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>
                <div className="bca">
                    <div className="bca-img">
                        <Image
                            src="/Images/R2.svg"
                            width={817}
                            height={500}
                            alt="Blog Image"
                        />
                    </div>
                    <div className="bcai-details">
                        <div className="bcai-admin">
                            <Image
                                src="/Images/BUser.svg"
                                width={20}
                                height={20}
                                alt='user'
                            />
                            <h1>Admin</h1>
                        </div>
                        <div className="bcai-date">
                            <Image
                                src="/Images/BCalendar.svg"
                                width={20}
                                height={20}
                                alt='user'
                            />
                            <h1>14 Oct 2022</h1>
                        </div>
                        <div className="bcai-tag">
                            <Image
                                src="/Images/BTag.svg"
                                width={24}
                                height={24}
                                alt='user'
                            />
                            <h1>Handmade</h1>
                        </div>
                    </div>
                    <div className="bca-heading">
                        <h1>Exploring new ways of decorating</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h2>
                    </div>
                    <div className="bca-btn">
                        <div className="bca-text">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>
                <div className="bca">
                    <div className="bca-img">
                        <Image
                            src="/Images/R3.svg"
                            width={817}
                            height={500}
                            alt="Blog Image"
                        />
                    </div>
                    <div className="bcai-details">
                        <div className="bcai-admin">
                            <Image
                                src="/Images/BUser.svg"
                                width={20}
                                height={20}
                                alt='user'
                            />
                            <h1>Admin</h1>
                        </div>
                        <div className="bcai-date">
                            <Image
                                src="/Images/BCalendar.svg"
                                width={20}
                                height={20}
                                alt='user'
                            />
                            <h1>14 Oct 2022</h1>
                        </div>
                        <div className="bcai-tag">
                            <Image
                                src="/Images/BTag.svg"
                                width={24}
                                height={24}
                                alt='user'
                            />
                            <h1>Wood</h1>
                        </div>
                    </div>
                    <div className="bca-heading">
                        <h1>Handmade pieces that took time to make</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h2>
                    </div>
                    <div className="bca-btn">
                        <div className="bca-text">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blogcategories">
                <div className="blogc1">
                    <div className="bca-search">
                        <Image
                            src="/Images/SI.svg"
                            width={24}
                            height={24}
                            alt="Search Icon"
                        />
                    </div>
                    <div className="bca-categories">
                        <h1>Categories</h1>
                        <div className="crafts2">
                            <h1>Crafts</h1>
                            <h2>2</h2>
                        </div>
                        <div className="crafts2">
                            <h1>Design</h1>
                            <h2>8</h2>
                        </div>
                        <div className="crafts2">
                            <h1>Handmade</h1>
                            <h2>7</h2>
                        </div>
                        <div className="crafts2">
                            <h1>Interior</h1>
                            <h2>1</h2>
                        </div>
                        <div className="crafts2">
                            <h1>Wood</h1>
                            <h2>6</h2>
                        </div>
                    </div>
                </div>
                <div className="blogc2">
                    <h1>Recent Posts</h1>
                    <div className="bc2-items">
                        <Image
                            src="/Images/BC1.svg"
                            width={80}
                            height={80}
                            alt="bc1"
                        />
                        <div className="bc2i">
                            <h1>Going all-in with millennial design</h1>
                            <h2>03 Aug 2022</h2>
                        </div>
                    </div>
                    <div className="bc2-items">
                        <Image
                            src="/Images/BC2.svg"
                            width={80}
                            height={80}
                            alt="bc1"
                        />
                        <div className="bc2i">
                            <h1>Exploring new ways of decorating</h1>
                            <h2>03 Aug 2022</h2>
                        </div>
                    </div>
                    <div className="bc2-items">
                        <Image
                            src="/Images/BC3.svg"
                            width={80}
                            height={80}
                            alt="bc1"
                        />
                        <div className="bc2i">
                            <h1>Handmade pieces that took time to make</h1>
                            <h2>03 Aug 2022</h2>
                        </div>
                    </div>
                    <div className="bc2-items">
                        <Image
                            src="/Images/BC4.svg"
                            width={80}
                            height={80}
                            alt="bc1"
                        />
                        <div className="bc2i">
                            <h1>Modern home in Milan</h1>
                            <h2>03 Aug 2022</h2>
                        </div>
                    </div>
                    <div className="bc2-items">
                        <Image
                            src="/Images/BC5.svg"
                            width={80}
                            height={80}
                            alt="bc1"
                        />
                        <div className="bc2i">
                            <h1>Colorful office redesign</h1>
                            <h2>03 Aug 2022</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bca-sliders">
            <div className="bcas-1">1</div>
            <div className="bcas-2">2</div>
            <div className="bcas-2">3</div>
            <div className="bcas-4">Next</div>
        </div>

        <Why />
        <Footer />
    </div>
)
}

export default Blog1