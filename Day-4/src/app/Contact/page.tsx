import React from 'react'
import Header from '@/Components/Header/header'
import Footer from '@/Components/Footer/footer'
import ContactHero from '@/Components/ConHero/contacthero'
import Why from '@/Components/Why/why'
import Image from 'next/image'



const Contact = () => {
  return (
    <div className="contact-page">
        <Header />
        <ContactHero />

        <div className="contact-hero-sec">
            <div className="c-h-s-heading">
                <h1>Get In Touch With Us</h1>
                <div className="chs-sub">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
            </div>
            <div className="c-h-s-content">
                <div className="chs-left">
                    <div className="chs-address">
                        <div>
                            <Image
                                src="/Images/Location.svg"
                                width={22}
                                height={28.18}
                                alt="Location"
                            />
                        </div>
                        <div className="chsa-content">
                            <h1>Address</h1>
                            <h2>236 5th SE Avenue, New York NY10000, United States</h2>
                        </div>
                    </div>
                    <div className="chs-phone">
                        <div>
                            <Image
                                src="/Images/Phone.svg"
                                width={30}
                                height={30}
                                alt="Phone"
                            />
                        </div>
                        <div className="chsp-content">
                            <h1>Phone</h1>
                            <h2>Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789</h2>
                        </div>
                    </div>
                    <div className="chs-time">
                        <div>
                            <Image
                                src="/Images/Clokc.svg"
                                width={23}
                                height={23}
                                alt="Clock"
                            />
                        </div>
                        <div className="chst-content">
                            <h1>Working Time</h1>
                            <h2>
                                Monday-Friday: 9:00 - 22:00
                                <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="chs-right">
                    <div className="chs-name">
                        <h1>Your name</h1>
                        <input type="text" placeholder="Abc" className="chs-name-input"/>
                    </div>
                    <div className="chs-name">
                        <h1>Email address</h1>
                        <input type="text" placeholder="Abc@def.com" className="chs-name-input"/>
                    </div>
                    <div className="chs-name">
                        <h1>Subject</h1>
                        <input type="text" placeholder="This is an optional" className="chs-name-input"/>
                    </div>
                    <div className="chs-mess">
                        <h1>Message</h1>
                        <input type="text" placeholder="Hi! i&apos;d like to ask about" className="chs-mess-input"/>
                    </div>
                    <button className="chs-button">Sbumit</button>
                </div>
            </div>
        </div>

        <Why />
        <Footer />
    </div>
)
}

export default Contact