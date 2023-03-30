import React from 'react'

import PropTypes from 'prop-types'

const GradientLine1 = (props) => {
  return (
    <>
      <div className={`gradient-line1-container ${props.rootClassName} `}>
        <div className="gradient-line1-container1 gradient-animation"></div>
      </div>
      <style jsx>
        {`
          .gradient-line1-container {
            width: 100%;
            height: 0px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .gradient-line1-container1 {
            background-image: linear-gradient(
              270deg,
              rgb(0, 232, 33) 1%,
              rgb(20, 255, 210) 24%,
              rgb(0, 255, 167) 47%,
              rgb(40, 255, 214) 72%,
              rgb(0, 198, 24) 100%
            );
          }
          .gradient-line1-root-class-name {
            display: none;
            margin-right: 0px;
          }
          .gradient-line1-root-class-name1 {
            margin-top: 64px;
          }

          .gradient-line1-root-class-name3 {
            margin-top: var(--dl-space-space-threeunits);
          }
        `}
      </style>
    </>
  )
}

GradientLine1.defaultProps = {
  rootClassName: '',
}

GradientLine1.propTypes = {
  rootClassName: PropTypes.string,
}

export default GradientLine1
