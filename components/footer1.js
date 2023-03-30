import React from 'react'

import PropTypes from 'prop-types'

import GradientLine1 from './gradient-line1'

const Footer1 = (props) => {
  return (
    <>
      <footer className={`footer1-footer ${props.rootClassName} `}>
        <div className="footer1-container">
          <div className="footer1-container1">
            <div className="footer1-container2">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="footer1-image"
              />
              <span className="footer1-text">
                <span>© 2023 Green Nexus,</span>
                <br></br>
                <span> All Rights Reserved.</span>
              </span>
              <div className="footer1-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer1-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer1-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="footer1-icon4"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <div className="footer1-links-container">
              <div className="footer1-container3">
                <div className="footer1-container4">
                  <span className="footer1-text04">{props.text}</span>
                  <span className="footer1-text05">{props.text1}</span>
                  <span className="footer1-text06">{props.text2}</span>
                  <span className="footer1-text07">{props.text3}</span>
                  <span>{props.text4}</span>
                </div>
                <div className="footer1-container5">
                  <span className="footer1-text09">{props.text5}</span>
                  <span className="footer1-text10">{props.text6}</span>
                  <span className="footer1-text11">{props.text7}</span>
                  <span className="footer1-text12">{props.text8}</span>
                  <span>{props.text9}</span>
                </div>
              </div>
              <div className="footer1-container6">
                <div className="footer1-container7">
                  <span className="footer1-text14">{props.text10}</span>
                  <span className="footer1-text15">{props.text11}</span>
                  <span className="footer1-text16">{props.text12}</span>
                  <span className="footer1-text17">{props.text13}</span>
                  <span>{props.text14}</span>
                </div>
                <div className="footer1-container8">
                  <span className="footer1-text19">{props.text15}</span>
                  <span className="footer1-text20">{props.text16}</span>
                  <span className="footer1-text21">{props.text17}</span>
                  <span className="footer1-text22">{props.text18}</span>
                  <span>{props.text19}</span>
                </div>
              </div>
            </div>
          </div>
          <GradientLine1 rootClassName="gradient-line1-root-class-name5"></GradientLine1>
        </div>
      </footer>
      <style jsx>
        {`
          .footer1-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .footer1-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer1-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .footer1-container2 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: 0px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .footer1-image {
            height: 2rem;
          }
          .footer1-text {
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .footer1-icon-group {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .footer1-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .footer1-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .footer1-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text04 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text09 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-container6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-container7 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text14 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text17 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-container8 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text19 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text20 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text22 {
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 1200px) {
            .footer1-text04 {
              color: #1fb583;
            }
            .footer1-text09 {
              color: #1fb583;
            }
            .footer1-text14 {
              color: #1fb583;
            }
            .footer1-text19 {
              color: #1fb583;
            }
          }
          @media (max-width: 991px) {
            .footer1-footer {
              flex-direction: column;
            }
            .footer1-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              flex-direction: row;
            }
            .footer1-container3 {
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer1-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer1-container3 {
              width: 100%;
              justify-content: space-between;
            }
            .footer1-container5 {
              margin-right: 0px;
            }
            .footer1-container6 {
              margin-top: var(--dl-space-space-twounits);
            }
            .footer1-container7 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer1-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer1-image {
              margin-bottom: 0px;
            }
            .footer1-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer1-container3 {
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
            .footer1-container4 {
              margin-right: var(--dl-space-space-unit);
            }
            .footer1-container5 {
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  rootClassName: '',
  image_alt: 'logo',
  text12: 'Privacy Policy',
  text13: 'Legal',
  text10: 'Support',
  text7: 'Careers',
  text15: 'Resources',
  text6: 'About',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text18: 'Service',
  text3: 'Tutorials',
  text16: 'Blog',
  text8: 'Contact',
  text19: 'Product',
  text14: 'Help center',
  text17: 'Pricing',
  text11: 'Terms of service',
  text1: 'Features',
  text: 'Product',
  text9: 'Blog',
  text5: 'Company',
  text2: 'Pricing',
  text4: 'Releases',
}

Footer1.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text10: PropTypes.string,
  text7: PropTypes.string,
  text15: PropTypes.string,
  text6: PropTypes.string,
  image_src: PropTypes.string,
  text18: PropTypes.string,
  text3: PropTypes.string,
  text16: PropTypes.string,
  text8: PropTypes.string,
  text19: PropTypes.string,
  text14: PropTypes.string,
  text17: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text9: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default Footer1
