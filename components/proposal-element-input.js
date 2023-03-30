import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementInput = (props) => {
  return (
    <>
      <div
        className={`proposal-element-input-container ${props.rootClassName} `}
      >
        <div className="proposal-element-input-container1">
          <span className="proposal-element-input-text">{props.name}</span>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="proposal-element-input-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-input-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-input-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-input-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-textinput {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            text-align: center;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .proposal-element-input-root-class-name {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name1 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name2 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name3 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name4 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name5 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name6 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-input-root-class-name7 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementInput.defaultProps = {
  rootClassName: '',
  name: 'Name',
  textinput_placeholder: 'Enter something...',
}

ProposalElementInput.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default ProposalElementInput
