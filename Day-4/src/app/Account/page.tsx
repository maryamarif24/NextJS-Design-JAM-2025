import React from 'react'
import Header from '@/Components/Header/header'
import Footer from '@/Components/Footer/footer'
import Acchero from '@/Components/AccHero/achero'
import Why from '@/Components/Why/why'


const page = () => {
  return (
    <div className="account">
        <Header/>
        <Acchero/>

        <div className="ac-login-page">
            <div className="log-reg">
                <div className="ac-log">
                    <h1>Log In</h1>
                    <div className="username">
                        <h1>Username or email address</h1>
                        <div className="i-field"></div>
                    </div>
                    <div className="pswrd">
                        <h1>Password</h1>
                        <div className="i-field"></div>
                    </div>
                    <div className="rmbr-me">
                        <div className="cebox"></div>
                        <div className="rmbrme">Remember me</div>
                    </div>
                    <div className="log-it">
                        <div className="log-btn">
                            <h1>Log In</h1>
                        </div>
                        <h2>Lost Your Password?</h2>
                    </div>
                </div>
                <div className="ac-reg">
                    <h1>Register</h1>
                    <div className="e-a">
                        <h1>Email address</h1>
                        <div className="i-field"></div>
                    </div>
                    <h2>A link to set a new password will be sent to your email address.</h2>
                    <h3>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-medium">privacy policy.</span></h3>
                    <div className="reg-b">
                        <div className="reg-btn">
                            <h1>Register</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Why/>
        <Footer/>
    </div>
)
}

export default page