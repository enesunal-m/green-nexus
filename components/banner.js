import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div
        className={`banner-banner section-container ${props.rootClassName} `}
      >
        <div className="banner-max-width max-content-container">
          <span className="banner-text">{props.text}</span>
          <h2 className="banner-text1 Heading2">Join Green Nexus Today!</h2>
          <span className="banner-text2">
            Are you ready to make a difference and contribute to a more
            sustainable future? Whether you&apos;re an idea owner with a
            groundbreaking project or an investor looking for innovative and
            eco-friendly opportunities, Green Nexus is the platform for you.
          </span>
          <button className="banner-primary button-lg button-secondary-white button">
            {props.primary}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner-banner {
            height: auto;
            position: relative;
            background-color: #15b78a;
          }
          .banner-max-width {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .banner-text {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .banner-text1 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .banner-text2 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .banner-primary {
            border-radius: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }

          @media (max-width: 1200px) {
            .banner-text2 {
              line-height: 26px;
            }
            .banner-root-class-name {
              background-color: #15b78a;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  text: 'what are you waiting?',
  primary: 'Register',
  rootClassName: '',
}

Banner.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner
