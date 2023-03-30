import React from 'react'

import PropTypes from 'prop-types'

const NavbarLine = (props) => {
  return (
    <>
      <div className="navbar-line-container bg-animation">
        <header
          data-thq="thq-navbar"
          className="navbar-line-navbar-interactive"
        >
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="navbar-line-logo"
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-line-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="navbar-line-nav"
            >
              <div className="navbar-line-container1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="navbar-line-icon"
                >
                  <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
                </svg>
                <span className="navbar-line-text">
                  <span>Search</span>
                  <br></br>
                </span>
              </div>
              <a href="#about_us" className="navbar-line-link">
                About
              </a>
              <span className="navbar-line-text03">Features</span>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-line-link1"
              >
                <span className="navbar-line-text04">Projects</span>
                <br></br>
              </a>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="navbar-line-btn-group"
          >
            <button className="navbar-line-login gradient-text button-secondary-white button NormalButton">
              Login
            </button>
            <div className="navbar-line-container2"></div>
            <button className="navbar-line-register button-secondary gradient-text button NormalButton">
              Register
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-line-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-line-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-line-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-line-nav1"
            >
              <div className="navbar-line-container3">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="navbar-line-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-line-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-line-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-line-nav2"
              >
                <span className="navbar-line-text06">About</span>
                <span className="navbar-line-text07">Features</span>
                <span className="navbar-line-text08">Pricing</span>
                <span className="navbar-line-text09">Team</span>
                <span className="navbar-line-text10">Blog</span>
              </nav>
              <div className="navbar-line-container4">
                <button className="navbar-line-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="navbar-line-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-line-icon06"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-line-icon08"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-line-icon10"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-line-container {
            width: 100%;
            height: 88px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .navbar-line-navbar-interactive {
            color: var(--dl-color-scheme-white);
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: sticky;
            box-shadow: 2px 2px 10px 0px #757575;
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            border-color: var(--dl-color-scheme-darkblue);
            border-width: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            background-size: 200%;
            justify-content: space-between;
            background-image: linear-gradient(
              90deg,
              rgb(255, 255, 255) 0%,
              rgb(255, 255, 255) 99%
            );
          }
          .navbar-line-logo {
            height: 2rem;
          }
          .navbar-line-desktop-menu {
            display: flex;
          }
          .navbar-line-nav {
            flex: 0 0 auto;
            color: #093e17;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-line-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-line-icon {
            fill: #093e17;
            width: 24px;
            height: 24px;
            margin-top: 1px;
            margin-left: 1px;
            margin-right: 5px;
            margin-bottom: 1px;
          }
          .navbar-line-text {
            font-style: normal;
            font-weight: 700;
            margin-right: 0px;
          }
          .navbar-line-link {
            color: rgba(9, 62, 23, 0.83);
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-line-link:hover {
            color: rgba(9, 62, 23, 0.56);
          }
          .navbar-line-text03 {
            color: rgba(9, 62, 23, 0.83);
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .navbar-line-text03:hover {
            color: rgba(9, 62, 23, 0.56);
          }
          .navbar-line-link1 {
            color: rgba(9, 62, 23, 0.83);
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-line-link1:hover {
            color: rgba(9, 62, 23, 0.56);
          }
          .navbar-line-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-line-login {
            border-width: 1px;
            margin-right: 0px;
            padding-right: 0.5rem;
            background-color: transparent;
            background-image: linear-gradient(
              90deg,
              rgb(153, 24, 118) 0%,
              rgb(83, 75, 45) 99%
            );
          }
          .navbar-line-container2 {
            width: 2px;
            height: 30px;
            display: block;
            border-radius: 16px;
            background-color: #393939;
          }
          .navbar-line-register {
            border-width: 1px;
            padding-left: 0.5rem;
            background-color: transparent;
            background-image: linear-gradient(
              90deg,
              rgb(83, 74, 41) 0%,
              rgb(153, 24, 118) 99%
            );
          }
          .navbar-line-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-line-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-line-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-line-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-line-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-line-image {
            height: 2rem;
          }
          .navbar-line-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-line-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-line-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-line-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-line-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-line-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-line-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-line-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-line-container4 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .navbar-line-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-line-icon-group {
            display: flex;
          }
          .navbar-line-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-line-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-line-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 991px) {
            .navbar-line-container {
              width: 816px;
            }
            .navbar-line-desktop-menu {
              display: none;
            }
            .navbar-line-btn-group {
              display: none;
            }
            .navbar-line-login {
              padding-right: 1rem;
            }
            .navbar-line-register {
              padding-left: var(--dl-space-space-unit);
            }
            .navbar-line-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-line-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-line-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-line-link1 {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-line-text04 {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-line-icon02 {
              fill: #ffffff;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 479px) {
            .navbar-line-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-line-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarLine.defaultProps = {
  rootClassName: '',
}

NavbarLine.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavbarLine
