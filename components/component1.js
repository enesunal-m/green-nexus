import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className={`component1-container ${props.rootClassName} `}>
        <span className="component1-text">
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
        </span>
        <span className="component1-text33">
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
          <span>|</span>
          <br></br>
        </span>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 3.71875px;
            height: 345px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component1-text {
            top: 0px;
            left: 0px;
            position: absolute;
            line-height: 0.7;
          }
          .component1-text33 {
            top: 165.875px;
            left: 0px;
            position: absolute;
            line-height: 0.7;
          }
          .component1-root-class-name {
            left: 404px;
            bottom: -6px;
            position: absolute;
          }
          .component1-root-class-name2 {
            left: 816px;
            bottom: -6px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  rootClassName: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component1
