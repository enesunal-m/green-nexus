import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementFile = (props) => {
  return (
    <>
      <div
        className={`proposal-element-file-container ${props.rootClassName} `}
      >
        <div className="proposal-element-file-container1">
          <span className="proposal-element-file-text">{props.name}</span>
          <input
            type="file"
            placeholder={props.textinput_placeholder}
            className="proposal-element-file-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-file-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-file-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-file-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .proposal-element-file-textinput {
            width: 100%;
            height: 100%;
            align-self: flex-end;
            text-align: center;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .proposal-element-file-root-class-name {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-file-root-class-name1 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-file-root-class-name2 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-file-root-class-name3 {
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementFile.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Enter something...',
  name: 'Name',
}

ProposalElementFile.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  name: PropTypes.string,
}

export default ProposalElementFile
