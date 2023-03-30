import React from 'react'

import PropTypes from 'prop-types'

import GradientLine from './gradient-line'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-hero section-container ${props.rootClassName} `}>
        <GradientLine rootClassName="gradient-line-root-class-name"></GradientLine>
        <div className="hero-card">
          <div className="hero-max-width max-content-container">
            <div className="hero-heading-container">
              <span className="hero-text">{props.text}</span>
              <h1 className="hero-text1 animated-gradient-text">
                <span className="Heading1">Green Nexus:</span>
                <span className="Heading1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="hero-text4"></br>
                <span className="hero-text5">
                  The Hub for Green Fundraising
                </span>
              </h1>
              <div className="hero-container">
                <button className="hero-primary main-button button-primary button-lg button NormalButton">
                  <svg viewBox="0 0 1024 1024" className="hero-icon">
                    <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
                  </svg>
                  <span className="hero-text6">I&apos;m a Patron</span>
                </button>
                <button className="hero-primary1 main-button button-primary NormalButton button-lg button">
                  <svg
                    viewBox="0 0 585.1428571428571 1024"
                    className="hero-icon2"
                  >
                    <path d="M420.571 329.143c0 9.714-8.571 18.286-18.286 18.286s-18.286-8.571-18.286-18.286c0-39.429-61.143-54.857-91.429-54.857-9.714 0-18.286-8.571-18.286-18.286s8.571-18.286 18.286-18.286c53.143 0 128 28 128 91.429zM512 329.143c0-114.286-116-182.857-219.429-182.857s-219.429 68.571-219.429 182.857c0 36.571 14.857 74.857 38.857 102.857 10.857 12.571 23.429 24.571 34.857 37.714 40.571 48.571 74.857 105.714 80.571 170.286h130.286c5.714-64.571 40-121.714 80.571-170.286 11.429-13.143 24-25.143 34.857-37.714 24-28 38.857-66.286 38.857-102.857zM585.143 329.143c0 58.857-19.429 109.714-58.857 153.143s-91.429 104.571-96 165.714c16.571 9.714 26.857 28 26.857 46.857 0 13.714-5.143 26.857-14.286 36.571 9.143 9.714 14.286 22.857 14.286 36.571 0 18.857-9.714 36-25.714 46.286 4.571 8 7.429 17.714 7.429 26.857 0 37.143-29.143 54.857-62.286 54.857-14.857 33.143-48 54.857-84 54.857s-69.143-21.714-84-54.857c-33.143 0-62.286-17.714-62.286-54.857 0-9.143 2.857-18.857 7.429-26.857-16-10.286-25.714-27.429-25.714-46.286 0-13.714 5.143-26.857 14.286-36.571-9.143-9.714-14.286-22.857-14.286-36.571 0-18.857 10.286-37.143 26.857-46.857-4.571-61.143-56.571-122.286-96-165.714s-58.857-94.286-58.857-153.143c0-155.429 148-256 292.571-256s292.571 100.571 292.571 256z"></path>
                  </svg>
                  <span className="hero-text7">ı have an project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            height: 1008px;
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .hero-card {
            width: 779px;
            height: 382px;
            border-radius: 30px;
          }
          .hero-max-width {
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: center;
          }
          .hero-heading-container {
            flex: 1;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-text {
            color: var(--dl-color-scheme-white);
            display: none;
            font-size: 30px;
            text-align: center;
            line-height: 1.44;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .hero-text1 {
            width: 952px;
            font-size: 56px;
            text-align: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 70px;
            letter-spacing: 0.01em;
            padding-bottom: var(--dl-space-space-threeunits);
            background-image: linear-gradient(
              90deg,
              rgb(24, 153, 124) 0%,
              rgb(24, 153, 59) 46%,
              rgba(54, 153, 24, 0.92) 100%
            );
          }
          .hero-text4 {
            color: var(--dl-color-scheme-white);
            text-decoration: none;
          }
          .hero-text5 {
            color: var(--dl-color-scheme-white);
            text-decoration: none;
          }
          .hero-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .hero-primary {
            display: flex;
            position: relative;
            box-shadow: 7px 12px 50px 0px #151515;
            margin-left: var(--dl-space-space-sixunits);
            padding-top: 20px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 40px;
            margin-bottom: 38px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: 20px;
            background-color: var(--dl-color-buttons-mainbutton);
          }
          .hero-icon {
            top: 14px;
            fill: #d9d9d9;
            left: 16px;
            width: 30px;
            height: 30px;
            position: absolute;
            align-self: stretch;
            padding-right: 0px;
          }
          .hero-text6 {
            padding-left: var(--dl-space-space-unit);
          }
          .hero-primary1 {
            display: flex;
            position: relative;
            align-self: flex-end;
            box-shadow: 5px 5px 50px 0px #151515;
            margin-left: 0px;
            padding-top: 20px;
            border-style: solid;
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 40px;
            margin-bottom: 40px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: 20px;
            text-transform: capitalize;
            background-color: var(--dl-color-buttons-mainbutton);
          }
          .hero-icon2 {
            top: 17px;
            fill: #d9d9d9;
            left: 16px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .hero-text7 {
            padding-left: var(--dl-space-space-unit);
          }
          .hero-root-class-name {
            height: 100%;
          }
          @media (max-width: 991px) {
            .hero-heading-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
          }
          @media (max-width: 767px) {
            .hero-text1 {
              font-size: 48px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  rootClassName: '',
  text: 'Uniting Innovators for a Sustainable Tomorrow - Fund Eco-Friendly Technologies Today!',
}

Hero.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Hero
