import React from 'react'

import PropTypes from 'prop-types'

const GradientLine = (props) => {
  return (
    <>
      <div className={`gradient-line-container ${props.rootClassName} `}>
        <div className="gradient-animation"></div>
      </div>
      <style jsx>
        {`
          .gradient-line-container {
            width: 100%;
            height: 0px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .gradient-line-root-class-name {
            display: none;
            margin-right: 0px;
          }
          .gradient-line-root-class-name1 {
            margin-top: var(--dl-space-space-fourunits);
          }

          @media (max-width: 767px) {
            .gradient-line-root-class-name1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .gradient-line-root-class-name2 {
              margin-top: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

GradientLine.defaultProps = {
  rootClassName: '',
}

GradientLine.propTypes = {
  rootClassName: PropTypes.string,
}

export default GradientLine
