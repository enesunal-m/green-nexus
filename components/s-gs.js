import React from 'react'

import PropTypes from 'prop-types'

const SDGs = (props) => {
  return (
    <>
      <div
        id="sdg"
        className={`s-gs-about bg-animation section-container ${props.rootClassName} `}
      >
        <div className="s-gs-max-width max-content-container">
          <div className="s-gs-text-container">
            <span className="s-gs-text">{props.text}</span>
            <h2 className="s-gs-text1 Heading2">{props.heading}</h2>
            <span className="s-gs-text2">{props.text1}</span>
            <div className="s-gs-check-item">
              <svg viewBox="0 0 1024 1024" className="s-gs-icon">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="s-gs-text3">{props.text211}</span>
            </div>
            <span className="s-gs-text4">{props.text11}</span>
            <div className="s-gs-checklist">
              <div className="s-gs-check-item1">
                <svg viewBox="0 0 1024 1024" className="s-gs-icon02">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="s-gs-text5">{props.text4}</span>
              </div>
              <div className="s-gs-check-item2">
                <svg viewBox="0 0 1024 1024" className="s-gs-icon04">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="s-gs-text6">{props.text41}</span>
              </div>
              <div className="s-gs-check-item3">
                <svg viewBox="0 0 1024 1024" className="s-gs-icon06">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="s-gs-text7">{props.text5}</span>
              </div>
              <div className="s-gs-check-item4">
                <svg viewBox="0 0 1024 1024" className="s-gs-icon08">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="s-gs-text8">{props.text6}</span>
              </div>
            </div>
          </div>
          <div className="s-gs-image-container"></div>
        </div>
      </div>
      <style jsx>
        {`
          .s-gs-about {
            position: relative;
            background-image: linear-gradient(
              90deg,
              rgb(0, 178, 53) 0%,
              rgb(32, 161, 119) 30%,
              rgb(0, 178, 53) 63%,
              rgb(32, 161, 119) 99%
            );
          }
          .s-gs-max-width {
            flex-direction: row;
            justify-content: space-between;
          }
          .s-gs-text-container {
            flex: 1;
            width: 80%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .s-gs-text {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .s-gs-text1 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .s-gs-text2 {
            color: #a1204a;
            font-size: 18px;
            font-style: normal;
            font-family: Source Sans Pro;
            font-weight: 700;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .s-gs-check-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .s-gs-icon {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .s-gs-text3 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-weight: 500;
          }
          .s-gs-text4 {
            color: #a1204a;
            font-size: 18px;
            font-style: normal;
            font-family: Source Sans Pro;
            font-weight: 700;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .s-gs-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-gs-check-item1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .s-gs-icon02 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .s-gs-text5 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-weight: 500;
          }
          .s-gs-check-item2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .s-gs-icon04 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .s-gs-text6 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-weight: 500;
          }
          .s-gs-check-item3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .s-gs-icon06 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .s-gs-text7 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-weight: 500;
          }
          .s-gs-check-item4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .s-gs-icon08 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .s-gs-text8 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            font-weight: 500;
          }
          .s-gs-image-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .s-gs-root-class-name {
            background-image: linear-gradient(
              90deg,
              rgb(0, 178, 53) 0%,
              rgb(32, 161, 119) 25%,
              rgb(0, 178, 53) 51%,
              rgb(32, 161, 119) 77%,
              rgb(0, 178, 53) 98%
            );
          }
          @media (max-width: 1200px) {
            .s-gs-max-width {
              max-width: 90%;
            }
            .s-gs-text2 {
              font-size: 20px;
            }
            .s-gs-text3 {
              font-size: 18px;
            }
            .s-gs-text4 {
              font-size: 20px;
            }
            .s-gs-text5 {
              font-size: 18px;
            }
            .s-gs-text6 {
              font-size: 18px;
            }
            .s-gs-text7 {
              font-size: 18px;
            }
            .s-gs-text8 {
              font-size: 18px;
            }
          }
          @media (max-width: 991px) {
            .s-gs-max-width {
              flex-direction: column;
            }
            .s-gs-text-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .s-gs-image-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SDGs.defaultProps = {
  rootClassName: '',
  heading: 'Empowering Sustainable Development Goals',
  text41:
    '2. SDG 9 (Industry, Innovation, and Infrastructure): Green Nexus encourages innovation by facilitating collaboration and knowledge-sharing among green entrepreneurs, experts, and investors. Through our platform, users can develop and scale sustainable technologies, products, and services, contributing to resilient infrastructure and inclusive industrialization.',
  text1: 'Introduction to the United Nations Sustainable Development Goals:',
  text: 'SDG',
  text6:
    '4. SDG 17 (Partnerships for the Goals): We believe that strong partnerships are key to driving collective action towards a sustainable future. Green Nexus fosters collaboration among various stakeholders, including entrepreneurs, investors, mentors, and experts. By bringing together diverse perspectives and resources, our platform helps build the partnerships necessary to achieve the SDGs.',
  text11: 'How Green Nexus Supports the SDGs?',
  text5:
    '3. SDG 12 (Responsible Consumption and Production): By supporting sustainable businesses and innovations, Green Nexus helps promote responsible consumption and production practices. Our platform encourages the adoption of eco-friendly solutions and the development of a more circular economy, reducing environmental impacts and fostering sustainable growth.',
  text211:
    'The United Nations Sustainable Development Goals (SDGs) are a set of 17 global objectives established in 2015 to address urgent economic, social, and environmental challenges. These goals aim to end poverty, protect the planet, and ensure peace and prosperity for all by 2030. The SDGs serve as a blueprint for governments, businesses, and individuals to collaborate and contribute to a more sustainable future. Green Nexus is proud to align with and support several of these important goals, driving positive change and fostering a greener tomorrow.',
  text4:
    '1. SDG 8 (Decent Work and Economic Growth): Our platform connects green entrepreneurs with investors, mentors, and resources, promoting economic growth and job creation in the sustainable sector. By empowering eco-friendly businesses, we contribute to the development of decent work opportunities within the green economy.',
}

SDGs.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text41: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text5: PropTypes.string,
  text211: PropTypes.string,
  text4: PropTypes.string,
}

export default SDGs
