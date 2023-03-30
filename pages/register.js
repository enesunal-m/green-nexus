import React from 'react'
import Head from 'next/head'

import NavbarCircular from '../components/navbar-circular'
import Footer1 from '../components/footer1'

const Register = (props) => {
  return (
    <>
      <div className="register-container">
        <Head>
          <title>Register - Green Nexus: The Hub for Green Fundraising</title>
          <meta
            name="description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
          <meta
            property="og:title"
            content="Register - Green Nexus: The Hub for Green Fundraising"
          />
          <meta
            property="og:description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
        </Head>
        <NavbarCircular rootClassName="navbar-circular-root-class-name4"></NavbarCircular>
        <div className="register-container1">
          <h1 className="register-text">Create an Account</h1>
          <div className="register-container2">
            <input
              type="text"
              placeholder="Your Name"
              className="register-input input"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="register-textinput input"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="register-textinput1 input"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="register-textinput2 input"
            />
            <input
              type="text"
              placeholder="Password"
              className="register-textinput3 input"
            />
            <button className="register-button button">
              <span className="register-text1">
                <span>Register</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="register-container3">
          <Footer1 rootClassName="footer1-root-class-name4"></Footer1>
        </div>
      </div>
      <style jsx>
        {`
          .register-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/registerphoto-1500w.png');
          }
          .register-container1 {
            flex: 0.5;
            width: 45%;
            height: 100%;
            display: flex;
            box-shadow: 5px 5px 5px 0px #d4d4d4;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            border-radius: 80px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.8);
          }
          .register-text {
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
          }
          .register-container2 {
            flex: 0 0 auto;
            width: 85%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .register-input {
            width: 70%;
            height: 100%;
            font-size: 20px;
            margin-top: var(--dl-space-space-threeunits);
          }
          .register-textinput {
            width: 70%;
            height: 100%;
            font-size: 20px;
            margin-top: var(--dl-space-space-threeunits);
          }
          .register-textinput1 {
            width: 70%;
            height: 100%;
            font-size: 20px;
            margin-top: var(--dl-space-space-threeunits);
          }
          .register-textinput2 {
            width: 70%;
            height: 100%;
            font-size: 20px;
            margin-top: var(--dl-space-space-threeunits);
          }
          .register-textinput3 {
            width: 70%;
            height: 100%;
            font-size: 20px;
            margin-top: var(--dl-space-space-threeunits);
            background-color: #ffffff;
          }
          .register-button {
            display: flex;
            font-size: 20px;
            margin-top: var(--dl-space-space-fourunits);
            border-radius: 16px;
            background-color: var(--dl-color-primary-primarygreen);
          }
          .register-text1 {
            color: #ffffff;
          }
          .register-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-scheme-white80);
          }
        `}
      </style>
    </>
  )
}

export default Register
