import React from 'react'

import PropTypes from 'prop-types'

const GradientLineorangepurple = (props) => {
  return (
    <>
      <div
        className={`gradient-lineorangepurple-container ${props.rootClassName} `}
      >
        <div className="gradient-lineorangepurple-container1 gradient-animation"></div>
      </div>
      <style jsx>
        {`
          .gradient-lineorangepurple-container {
            width: 100%;
            height: 0px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .gradient-lineorangepurple-container1 {
            background-image: linear-gradient(
              90deg,
              rgb(192, 87, 70) 1%,
              rgb(88, 35, 220) 100%
            );
          }
          .gradient-lineorangepurple-root-class-name {
            height: 0px;
          }
        `}
      </style>
    </>
  )
}

GradientLineorangepurple.defaultProps = {
  rootClassName: '',
}

GradientLineorangepurple.propTypes = {
  rootClassName: PropTypes.string,
}

export default GradientLineorangepurple
