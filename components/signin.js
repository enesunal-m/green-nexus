import React from 'react'

import PropTypes from 'prop-types'

const Signin = (props) => {
  return (
    <>
      <div className={`signin-container ${props.rootClassName} `}>
        <div className="signin-container1">
          <div className="signin-container2">
            <button className="signin-button button">
              <svg viewBox="0 0 860.0137142857142 1024" className="signin-icon">
                <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
              </svg>
              <span className="signin-text">Sign in With Google</span>
            </button>
          </div>
          <div className="signin-container3">
            <button className="signin-button1 button">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="signin-icon2"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <span className="signin-text1">Sign in With Twitter</span>
            </button>
          </div>
          <div className="signin-container4">
            <button className="signin-button2 button">
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="signin-icon4"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <span className="signin-text2">Sign in With Facebook</span>
            </button>
          </div>
          <div className="signin-container5">
            <button type="button" className="signin-button3 button">
              <svg viewBox="0 0 1024 1024" className="signin-icon6">
                <path d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"></path>
              </svg>
              <span className="signin-text3">Sign in With Phone</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .signin-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .signin-container1 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .signin-container2 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 1px;
            flex-direction: column;
          }
          .signin-button {
            width: 420px;
            display: flex;
            font-size: 30px;
            align-self: center;
            border-color: #000000;
            border-width: 1px;
            border-radius: 20px;
            flex-direction: row;
          }
          .signin-icon {
            fill: #000000;
            width: 30px;
            height: 30px;
            align-self: center;
          }
          .signin-text {
            align-self: center;
            padding-left: var(--dl-space-space-threeunits);
          }
          .signin-container3 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .signin-button1 {
            color: #ffffff;
            width: 420px;
            display: flex;
            font-size: 30px;
            align-self: center;
            margin-top: 20px;
            border-radius: 20px;
            flex-direction: row;
            background-color: #00acee;
          }
          .signin-icon2 {
            width: 30px;
            height: 30px;
            align-self: center;
          }
          .signin-text1 {
            align-self: center;
            padding-left: var(--dl-space-space-threeunits);
          }
          .signin-container4 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: var(--dl-color-scheme-darkblue);
            border-width: 0px;
            flex-direction: column;
          }
          .signin-button2 {
            color: #ffffff;
            width: 420px;
            display: flex;
            font-size: 30px;
            align-self: center;
            margin-top: 20px;
            border-radius: 20px;
            flex-direction: row;
            background-color: #3b5998;
          }
          .signin-icon4 {
            width: 30px;
            height: 30px;
            align-self: center;
          }
          .signin-text2 {
            margin-left: var(--dl-space-space-threeunits);
          }
          .signin-container5 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .signin-button3 {
            color: #ffffff;
            width: 420px;
            position: relative;
            font-size: 30px;
            align-self: center;
            margin-top: 20px;
            border-radius: 20px;
            background-color: #008000;
          }
          .signin-icon6 {
            top: 12px;
            fill: #d9d9d9;
            left: 20px;
            width: 30px;
            height: 30px;
            position: absolute;
          }
          .signin-text3 {
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .signin-root-class-name {
            margin-top: 80px;
            margin-bottom: 80px;
          }
          @media (max-width: 991px) {
            .signin-icon6 {
              top: 14px;
              left: 21px;
              position: absolute;
            }
          }
          @media (max-width: 767px) {
            .signin-container5 {
              width: 60%;
            }
            .signin-button3 {
              width: 420px;
              display: flex;
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .signin-button3 {
              width: 420px;
            }
          }
        `}
      </style>
    </>
  )
}

Signin.defaultProps = {
  rootClassName: '',
}

Signin.propTypes = {
  rootClassName: PropTypes.string,
}

export default Signin
