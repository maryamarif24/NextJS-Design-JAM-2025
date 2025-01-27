import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header/header'
import Footer from '@/Components/Footer/footer'
import SPHeader from '@/Components/SPHeader/sp'
import Counter from '@/Components/Counter/counter'
import LSize from '@/Components/LSizes/lsizes'
import XLSizes from '@/Components/XLSizes/sizes'
import XSSizes from '@/Components/XSSizes/xs'


const asgaard = () => {
  return (
      <div className="sofa">
          <Header></Header>
          <SPHeader/>
          
          <div className="asgaard-hero">
            <div className="asgaard-hero-img">
              <div className="img-sets">
                <div className="img-sets-1">
                  <Image
                    src="/Images/A1.svg"
                    width={76}
                    height={80}
                    alt="Asgaard Hero Image"
                  />
                </div>
                <div className="img-sets-2">
                  <Image
                    src="/Images/A2.svg"
                    width={76}
                    height={80}
                    alt="Asgaard Hero Image"
                  />
                </div>
                <div className="img-sets-3">
                  <Image
                    src="/Images/A3.svg"
                    width={76}
                    height={80}
                    alt="Asgaard Hero Image"
                  />
                </div>
                <div className="img-sets-4">
                  <Image
                    src="/Images/A4.svg"
                    width={76}
                    height={80}
                    alt="Asgaard Hero Image"
                  />
                </div>
              </div>
              <div className="main-img">
                <Image
                  src="/Images/Asgaard.svg"
                  width={493}
                  height={500}
                  alt="Asgaard Hero Image"
                />
              </div>
            </div>
            <div className="sofa-details">
              <h1>Asgaard sofa</h1>
              <p className="details-p1">Rs. 250,000.00</p>
              <div className="as-rate">
                <div className="as-image">
                  <Image
                    src="/Images/AStars.svg"
                    width={124}
                    height={20}
                    alt="Asgaard Hero Image"
                  />
                </div>
                <div className="rev">
                  <p>5 Customer Review</p>
                </div>
              </div>
              <p className="details-p2">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
              <div className="sofa-size">
                <p>Size</p>
                <div className="sizes">
                  <LSize/>
                  <XLSizes/>
                  <XSSizes/>
                </div>
              </div>
              <div className="color-select">
                <p>Color</p>
                <div className="c-palette">
                  <div className="c-1"></div>
                  <div className="c-2"></div>
                  <div className="c-3"></div>
                </div>
              </div>
              <div className="add-to-cart">
                <Counter/>
                <div className="as-btn-a-t-c">
                  <p>Add To Cart</p>
                </div>
              </div>
              <div className="as-p-details">
                <div className="a-p-d-1">
                  <div className="one1">
                    <p className="sku">SKU</p>
                    <p className="colon">:</p>
                    <p className="code">SS001</p>
                  </div>
                  <div className="two2">
                    <p className="sku">Category</p>
                    <p className="colon2">:</p>
                    <p className="code">Sofas</p>
                  </div>
                  <div className="three3">
                    <p className="sku">Tags</p>
                    <p className="colon3">:</p>
                    <p className="code">Sofa, Chair, Home, Shop</p>
                  </div>
                  <div className="four4">
                    <p className="sku">Share</p>
                    <p className="colon4">:</p>
                    <p className="code">
                      <div className="mr-[25px]">
                        <Image
                          src="/Images/FB.svg"
                          alt="Facebook"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="mr-[23px]">
                        <Image
                          src="/Images/LI.svg"
                          alt="LinkedIn"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="mr-[159px]">
                        <Image
                          src="/Images/Tw.svg"
                          alt="Twitter"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div>
                        <Image
                          src="/Images/Heart.svg"
                          alt="Heart"
                          width={25}
                          height={31.21}
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="des-as">
            <div className="des-as-header">
              <div className="des-as-title">
                <div >Description</div>
                <div className="text-[#9F9F9F]">Additional Information</div>
                <div className="text-[#9F9F9F]">Reviews [5]</div>
              </div>
            </div>
            <div className="des-as-p">
              <div>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </div>
              <div>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </div>
            </div>
            <div className="des-as-img">
              <div className="d-a-i-1">
                <Image
                  src="/Images/D1.svg"
                  width={605}
                  height={348}
                  alt='d1'
                />
              </div>
              <div className="d-a-i-2">
                <Image
                  src="/Images/D2.svg"
                  width={605}
                  height={348}
                  alt='d2'
                />
              </div>
            </div>
          </div>

          <div className="rel-as">
            <h2>Related Products</h2>
            <div className="top-picks-content">
                <a href="/Trenton">
                    <div className="container-1">
                        <div className="container-img">
                            <Image
                                src="/Images/Trenton.PNG"
                                width={250}
                                height={250}
                                alt='trenton'
                            />
                        </div>
                        <div className="container-text">
                            <p>Trenton modular sofa_3</p>
                            <div className="w-[158px] h-[36px] text-[24px] leading-[36px] font-medium ">Rs. 25,000.00</div>
                        </div>
                    </div>
                </a>
                <a href="/Granite">
                    <div className="container-2">
                        <div className="container-img-2">
                            <Image
                                src="/Images/ChairSet.PNG"
                                width={350}
                                height={250}
                                alt='ChairSet'
                            />
                        </div>
                        <div className="container-text-2">
                            <p>Granite dining table with dining chair</p>
                            <div className="w-[158px] h-[36px] text-[24px] leading-[36px] font-medium ">Rs. 25,000.00</div>
                        </div>
                    </div>
                </a>
                <a href="/Bar">
                    <div className="container-3">
                        <div className="container-img-3">
                            <Image
                                src="/Images/StoolSet.PNG"
                                width={250}
                                height={250}
                                alt='StoolSet'
                            />
                        </div>
                        <div className="container-text-3">
                            <p>Outdoor bar table and stool</p>
                            <div className="w-[158px] h-[36px] text-[24px] leading-[36px] font-medium ">Rs. 25,000.00</div>
                        </div>
                    </div>
                </a>
                <a href="/OpenTable">
                    <div className="container-4">
                        <div className="container-img-4">
                            <Image
                                src="/Images/OpenTable.PNG"
                                width={250}
                                height={250}
                                alt='OpenTable'
                            />
                        </div>
                        <div className="container-text-4">
                            <p>Outdoor bar table and stool</p>
                            <div className="w-[158px] h-[36px] text-[24px] leading-[36px] font-medium ">Rs. 25,000.00</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="more-btn">
              <div className="item-text">
                  <p>View More</p>
              </div>
            </div>
          </div>
          

          <Footer></Footer>
      </div>
)
}

export default asgaard