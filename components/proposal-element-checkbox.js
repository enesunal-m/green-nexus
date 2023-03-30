import React from 'react'

import PropTypes from 'prop-types'

const ProposalElementCheckbox = (props) => {
  return (
    <>
      <div
        className={`proposal-element-checkbox-container ${props.rootClassName} `}
      >
        <div className="proposal-element-checkbox-container1">
          <span className="proposal-element-checkbox-text">{props.name}</span>
          <div className="proposal-element-checkbox-container2">
            <div className="proposal-element-checkbox-container3">
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox"
              />
              <span>Air Pollution</span>
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox1"
              />
              <span>
                <span>Water</span>
                <br></br>
              </span>
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox2"
              />
              <span>Animals</span>
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox3"
              />
              <span>
                <span>Climate change and global warming</span>
                <br></br>
              </span>
            </div>
            <div className="proposal-element-checkbox-container4">
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox4"
              />
              <span>Soil degradation and erosion</span>
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox5"
              />
              <span>Energy production and consumption</span>
            </div>
            <div className="proposal-element-checkbox-container5">
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox6"
              />
              <span>Urbanization</span>
              <input
                type="checkbox"
                checked="true"
                className="proposal-element-checkbox-checkbox7"
              />
              <span>Industrial pollution</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .proposal-element-checkbox-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-checkbox-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-element-checkbox-text {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-family: Roboto;
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #000000;
            border-width: 1px;
            border-radius: 15px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .proposal-element-checkbox-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .proposal-element-checkbox-checkbox {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-checkbox1 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-checkbox2 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-checkbox3 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .proposal-element-checkbox-checkbox4 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-checkbox5 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .proposal-element-checkbox-checkbox6 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-checkbox7 {
            filter: hue-rotate(270deg);
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .proposal-element-checkbox-root-class-name {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-checkbox-root-class-name1 {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
          }
          .proposal-element-checkbox-root-class-name2 {
            margin-top: var(--dl-space-space-halfunit);
            background-color: rgba(217, 217, 217, 0.1);
          }
          .proposal-element-checkbox-root-class-name3 {
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ProposalElementCheckbox.defaultProps = {
  name: 'Name',
  rootClassName: '',
}

ProposalElementCheckbox.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProposalElementCheckbox
