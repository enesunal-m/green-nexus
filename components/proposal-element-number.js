import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementNumber = (props) => {
  return (
    <>
      <div
        className={`proposal-element-number-container ${props.rootClassName} `}
      >
        <div className="proposal-element-number-container1">
          <span className="proposal-element-number-text">{props.name}</span>
          <input
            type="number"
            placeholder={props.textinput_placeholder}
            className="proposal-element-number-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-number-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-number-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-number-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .proposal-element-number-textinput {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            text-align: center;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .proposal-element-number-root-class-name {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-number-root-class-name1 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementNumber.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Enter something...',
  name: 'Name',
}

ProposalElementNumber.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  name: PropTypes.string,
}

export default ProposalElementNumber
