import React from 'react'

import PropTypes from 'prop-types'

const LogInCard = (props) => {
  return (
    <>
      <div className={`log-in-card-container ${props.rootClassName} `}>
        <div className="log-in-card-container1">
          <div className="log-in-card-container2">
            <span className="log-in-card-text">{props.EmailText}</span>
            <span className="log-in-card-text1 input">{props.text}</span>
          </div>
          <div className="log-in-card-container3">
            <span className="log-in-card-text2">{props.PasswordText}</span>
            <span className="log-in-card-text3 input">{props.text1}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .log-in-card-container {
            width: 966px;
            height: 214px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .log-in-card-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .log-in-card-container2 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .log-in-card-text {
            color: #000000;
            width: 130%;
            height: auto;
            font-size: 30px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 400;
          }
          .log-in-card-text1 {
            width: 130%;
            height: 35px;
            font-size: 30px;
            align-self: center;
            border-radius: 20px;
          }
          .log-in-card-container3 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .log-in-card-text2 {
            color: #000000;
            width: 130%;
            font-size: 30px;
            align-self: center;
            text-align: left;
          }
          .log-in-card-text3 {
            width: 130%;
            height: 35px;
            font-size: 20px;
            align-self: center;
            border-radius: 20px;
          }
          .log-in-card-root-class-name {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

LogInCard.defaultProps = {
  text: '',
  rootClassName: '',
  PasswordText: 'Password',
  EmailText: 'Email:',
  text1: '',
}

LogInCard.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  PasswordText: PropTypes.string,
  EmailText: PropTypes.string,
  text1: PropTypes.string,
}

export default LogInCard
