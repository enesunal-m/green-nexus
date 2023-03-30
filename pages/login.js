import React from 'react'
import Head from 'next/head'

import NavbarCircular from '../components/navbar-circular'
import LogInCard from '../components/log-in-card'
import Signin from '../components/signin'
import Footer1 from '../components/footer1'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - Green Nexus: The Hub for Green Fundraising</title>
          <meta
            name="description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
          <meta
            property="og:title"
            content="Login - Green Nexus: The Hub for Green Fundraising"
          />
          <meta
            property="og:description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
        </Head>
        <div className="login-container1">
          <NavbarCircular
            rootClassName="navbar-circular-root-class-name6"
            Login=" "
          ></NavbarCircular>
          <div className="login-container2">
            <LogInCard rootClassName="log-in-card-root-class-name"></LogInCard>
            <button className="login-forgotemail button">
              Forgot Password?
            </button>
            <button className="login-button button">
              <span>
                <span>Sign In</span>
                <br></br>
              </span>
            </button>
          </div>
          <Signin rootClassName="signin-root-class-name"></Signin>
        </div>
        <div className="login-container3">
          <Footer1 rootClassName="footer1-root-class-name3"></Footer1>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/menes_growing_trees_vines_and_some_leaves_green_tones_7e7851e3-eb3d-4328-8d78-614cc6526cea-1500w.png');
          }
          .login-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: var(--dl-color-buttons-mainbutton);
            border-width: 2px;
            flex-direction: column;
          }
          .login-container2 {
            width: 30%;
            height: auto;
            display: flex;
            align-self: center;
            box-shadow: 2px 12px 50px 0px #000000;
            margin-top: 100px;
            transition: 0.3s;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            border-radius: 50px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: rgba(255, 255, 255, 0.95);
          }

          .login-forgotemail {
            color: rgb(0, 104, 255);
            font-size: 16px;
            align-self: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-right: 140px;
            background-color: transparent;
          }
          .login-button {
            color: rgb(255, 255, 255);
            font-size: 25px;
            align-self: center;
            margin-top: 30px;
            border-color: #5983bd;
            border-width: 3px;
            border-radius: 16px;
            background-color: var(--dl-color-primary-primarygreen);
          }
          .login-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-scheme-white80);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
        `}
      </style>
    </>
  )
}

export default Login
