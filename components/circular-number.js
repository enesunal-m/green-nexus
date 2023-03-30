import React from 'react'

import PropTypes from 'prop-types'

const CircularNumber = (props) => {
  return (
    <>
      <div className="circular-number-container">
        <div className="circular-number-container1">
          <span className="circular-number-text">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .circular-number-container {
            width: 70px;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .circular-number-container1 {
            width: 70px;
            height: 70px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0px;
            border-color: #c05746;
            border-width: 5px;
            padding-left: 0px;
            border-radius: var(--dl-radius-radius-round);
            padding-right: 0px;
            padding-bottom: 0px;
            justify-content: center;
            background-color: rgba(192, 87, 70, 0.52);
          }
          .circular-number-text {
            font-size: 50px;
          }
        `}
      </style>
    </>
  )
}

CircularNumber.defaultProps = {
  text: '1',
}

CircularNumber.propTypes = {
  text: PropTypes.string,
}

export default CircularNumber
