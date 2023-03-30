import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementDate = (props) => {
  return (
    <>
      <div
        className={`proposal-element-date-container ${props.rootClassName} `}
      >
        <div className="proposal-element-date-container1">
          <span className="proposal-element-date-text">{props.name}</span>
          <input
            type="date"
            placeholder={props.textinput_placeholder1}
            className="proposal-element-date-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-date-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-date-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-date-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .proposal-element-date-textinput {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            text-align: center;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .proposal-element-date-root-class-name {
            align-self: center;
            margin-left: 0px;
          }
          .proposal-element-date-root-class-name1 {
            align-self: center;
            margin-left: 0px;
            margin-right: 0px;
          }
          .proposal-element-date-root-class-name2 {
            align-self: center;
            margin-left: 0px;
          }
          .proposal-element-date-root-class-name3 {
            align-self: center;
            margin-left: 0px;
            margin-right: 0px;
          }
          .proposal-element-date-root-class-name4 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-date-root-class-name5 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-date-root-class-name6 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-date-root-class-name7 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementDate.defaultProps = {
  textinput_placeholder1: 'Enter something...',
  rootClassName: '',
  name: 'Name',
}

ProposalElementDate.propTypes = {
  textinput_placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
}

export default ProposalElementDate
