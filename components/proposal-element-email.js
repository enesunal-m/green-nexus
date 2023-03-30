import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementEmail = (props) => {
  return (
    <>
      <div
        className={`proposal-element-email-container ${props.rootClassName} `}
      >
        <div className="proposal-element-email-container1">
          <span className="proposal-element-email-text">{props.name}</span>
          <input
            type="email"
            placeholder={props.textinput_placeholder}
            className="proposal-element-email-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-email-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-email-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-email-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .proposal-element-email-textinput {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            text-align: center;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .proposal-element-email-root-class-name {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-email-root-class-name1 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-email-root-class-name2 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-email-root-class-name3 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementEmail.defaultProps = {
  textinput_placeholder: 'Enter something...',
  rootClassName: '',
  name: 'Name',
}

ProposalElementEmail.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
}

export default ProposalElementEmail
