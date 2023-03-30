import React from 'react'

import PropTypes from 'prop-types'

const SubmitButton = (props) => {
  return (
    <>
      <div className="submit-button-container">
        <span>{props.text}</span>
      </div>
      <style jsx>
        {`
          .submit-button-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

SubmitButton.defaultProps = {
  text: 'Submit',
}

SubmitButton.propTypes = {
  text: PropTypes.string,
}

export default SubmitButton
