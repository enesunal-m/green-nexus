import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementSummary = (props) => {
  return (
    <>
      <div
        className={`proposal-element-summary-container ${props.rootClassName} `}
      >
        <div className="proposal-element-summary-container1">
          <span className="proposal-element-summary-text">{props.name}</span>
          <textarea
            placeholder={props.textarea_placeholder}
            className="proposal-element-summary-textarea textarea"
          ></textarea>
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-summary-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-summary-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-summary-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .proposal-element-summary-textarea {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            text-align: center;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .proposal-element-summary-root-class-name {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-summary-root-class-name1 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-summary-root-class-name2 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-summary-root-class-name3 {
            width: 100%;
          }
          .proposal-element-summary-root-class-name4 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-summary-root-class-name5 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementSummary.defaultProps = {
  name: 'Name',
  rootClassName: '',
  textarea_placeholder: 'placeholder',
}

ProposalElementSummary.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  textarea_placeholder: PropTypes.string,
}

export default ProposalElementSummary
