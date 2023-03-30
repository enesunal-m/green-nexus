import React from 'react'

import PropTypes from 'prop-types'

const Logo = (props) => {
  return (
    <>
      <div className="logo-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="logo-image"
        />
      </div>
      <style jsx>
        {`
          .logo-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .logo-image {
            width: 431px;
            height: 306px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

Logo.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Logo.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Logo
