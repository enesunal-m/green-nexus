import React from 'react'

import PropTypes from 'prop-types'

import GradientLineorangepurple from './gradient-lineorangepurple'

const Process = (props) => {
  return (
    <>
      <div
        id="process"
        className={`process-process section-container ${props.rootClassName} `}
      >
        <div className="process-container">
          <span className="process-text">{props.text}</span>
          <h2 className="process-text01 Heading2">
            <span>
              We use a simple four step process.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Take a look.</span>
          </h2>
          <GradientLineorangepurple rootClassName="gradient-lineorangepurple-root-class-name"></GradientLineorangepurple>
        </div>
        <div className="process-container01">
          <div className="process-container02">
            <h1 className="process-text05">{props.heading}</h1>
            <h1 className="process-text06">{props.heading1}</h1>
          </div>
          <div className="process-container03">
            <div className="process-container04">
              <div className="process-step">
                <div className="process-container05">
                  <span className="process-text07 gradient-text">
                    {props.text1}
                  </span>
                  <div className="process-container06">
                    <span className="process-text08 gradient-text">
                      {props.text4}
                    </span>
                    <span className="process-text09">{props.text5}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="process-container07">
                  <span className="process-text10 gradient-text">
                    {props.text11}
                  </span>
                  <div className="process-container08">
                    <span className="process-text11">{props.text41}</span>
                    <span className="process-text12">{props.text51}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-container09">
              <div className="process-step1 process-step1">
                <div className="process-container10">
                  <span className="process-text13 gradient-text">
                    {props.text2}
                  </span>
                  <div className="process-container11">
                    <span className="process-text14">{props.text6}</span>
                    <span className="process-text15">{props.text7}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="process-container12">
                  <span className="process-text16 gradient-text">
                    {props.text21}
                  </span>
                  <div className="process-container13">
                    <span className="process-text17">{props.text61}</span>
                    <span className="process-text18">{props.text71}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-container14">
              <div className="process-step2 process-step2">
                <div className="process-container15">
                  <span className="process-text19 gradient-text">
                    {props.text3}
                  </span>
                  <div className="process-container16">
                    <span className="process-text20">{props.text8}</span>
                    <span className="process-text21">{props.text9}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="process-container17">
                  <span className="process-text22 gradient-text">
                    {props.text31}
                  </span>
                  <div className="process-container18">
                    <span className="process-text23">{props.text81}</span>
                    <span className="process-text24">{props.text91}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-container19">
              <div className="process-step3 process-step3">
                <div className="process-container20">
                  <span className="process-text25 gradient-text">
                    {props.text32}
                  </span>
                  <div className="process-container21">
                    <span className="process-text26">{props.text82}</span>
                    <span className="process-text27">{props.text92}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="process-container22">
                  <span className="process-text28 gradient-text">
                    {props.text321}
                  </span>
                  <div className="process-container23">
                    <span className="process-text29">{props.text821}</span>
                    <span className="process-text30">{props.text921}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-container24">
              <div className="process-step4 process-step4">
                <span className="process-text31 gradient-text">
                  {props.text33}
                </span>
                <div className="process-container25">
                  <span className="process-text32">{props.text83}</span>
                  <span className="process-text33">{props.text93}</span>
                </div>
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="process-icon">
              <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .process-process {
            width: 100%;
            height: 100%;
            position: relative;
            padding-bottom: var(--dl-space-space-unit);
            background-color: transparent;
          }
          .process-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .process-text {
            color: var(--dl-color-primary-primarygreen);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-threeunits);
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .process-text01 {
            color: #000000;
            width: 1080px;
            text-align: center;
            margin-left: var(--dl-space-space-threeunits);
            margin-bottom: 0px;
          }
          .process-container01 {
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .process-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .process-text05 {
            color: #c05746;
            padding-left: 15%;
            padding-bottom: 0px;
          }
          .process-text06 {
            color: #5823dc;
            padding-right: 15%;
            padding-bottom: 0px;
          }
          .process-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .process-container04 {
            flex: 1;
            height: auto;
            display: table;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .process-step {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container05 {
            display: flex;
          }
          .process-text07 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              270deg,
              rgb(0, 0, 0) 0%,
              rgba(192, 87, 70, 0.92) 100%
            );
          }
          .process-container06 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text08 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text09 {
            color: #000000;
          }
          .process-step1 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container07 {
            display: flex;
          }
          .process-text10 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(183, 80, 174, 0.92) 100%
            );
          }
          .process-container08 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text11 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text12 {
            color: #000000;
          }
          .process-container09 {
            width: 100%;
            display: table;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .process-step1 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            margin-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container10 {
            display: flex;
          }
          .process-text13 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              270deg,
              rgb(0, 0, 0) 0%,
              rgba(192, 87, 70, 0.92) 100%
            );
          }
          .process-container11 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text14 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text15 {
            color: #000000;
          }
          .process-step2 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            margin-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            padding-left: 0px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container12 {
            display: flex;
          }
          .process-text16 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(183, 80, 174, 0.92) 100%
            );
          }
          .process-container13 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text17 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text18 {
            color: #000000;
          }
          .process-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: table;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .process-step2 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container15 {
            display: flex;
          }
          .process-text19 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              270deg,
              rgb(0, 0, 0) 0%,
              rgba(192, 87, 70, 0.92) 100%
            );
          }
          .process-container16 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text20 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text21 {
            color: #000000;
          }
          .process-step3 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            padding-left: 0px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container17 {
            display: flex;
          }
          .process-text22 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(183, 80, 174, 0.92) 100%
            );
          }
          .process-container18 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text23 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text24 {
            color: #000000;
          }
          .process-container19 {
            flex: 0 0 auto;
            width: 100%;
            display: table;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .process-step3 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container20 {
            display: flex;
          }
          .process-text25 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              270deg,
              rgb(0, 0, 0) 0%,
              rgba(192, 87, 70, 0.92) 100%
            );
          }
          .process-container21 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text26 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text27 {
            color: #000000;
          }
          .process-step4 {
            flex: 1;
            width: 50%;
            height: auto;
            display: table-cell;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            padding-left: 0px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-container22 {
            display: flex;
          }
          .process-text28 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(183, 80, 174, 0.92) 100%
            );
          }
          .process-container23 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text29 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text30 {
            color: #000000;
          }
          .process-container24 {
            width: 100%;
            height: 211px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .process-step4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 53px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text31 {
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 0px;
            background-image: linear-gradient(
              270deg,
              rgb(183, 80, 174) 0%,
              rgba(192, 87, 70, 0.92) 99%
            );
          }
          .process-container25 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .process-text32 {
            color: #000000;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text33 {
            color: #000000;
            text-align: center;
          }
          .process-icon {
            fill: var(--dl-color-primary-primarygreen);
            height: 100px;
          }

          @media (max-width: 1200px) {
            .process-process {
              height: 100%;
            }
            .process-container {
              width: 80%;
              height: auto;
              position: relative;
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .process-text {
              text-align: center;
              margin-left: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .process-text01 {
              width: auto;
              text-align: center;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .process-text05 {
              color: var(--dl-color-primary-orange);
              padding-bottom: 0px;
            }
            .process-text06 {
              color: var(--dl-color-primary-purple);
              padding-bottom: 0px;
            }
            .process-step {
              height: auto;
            }
            .process-text31 {
              background-image: linear-gradient(
                270deg,
                rgb(88, 35, 220) 0%,
                rgba(192, 87, 70, 0.92) 100%
              );
            }
          }
          @media (max-width: 991px) {
            .process-text08 {
              color: transparent;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 0%,
                rgba(192, 87, 70, 0.92) 100%
              );
            }
            .process-root-class-name {
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .process-text07 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text10 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text13 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text16 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text19 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text22 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text25 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text28 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .process-text07 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text10 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text13 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text16 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text19 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text22 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text25 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text28 {
              margin-right: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Process.defaultProps = {
  rootClassName: '',
  heading1: 'For Investors',
  text921:
    'Invest in the projects that you believe in, providing the necessary funding for idea owners to move forward and grow their initiatives. As an investor, you play a crucial role in driving sustainable development and fostering a greener future.',
  text7:
    'With your team assembled, submit your project by providing detailed information about your idea, including its objectives, sustainability impact, and alignment with the United Nations Sustainable Development Goals.',
  text6: 'Submit Your Project',
  text61: 'Discover Projects',
  text: 'Our Process for Idea Owners and Investors',
  text3: '03',
  text92:
    'If your project is selected, it will be featured on our Projects page, where investors can view and learn more about your idea. This visibility provides an opportunity to attract funding and support from like-minded individuals and organizations.',
  text31: '03',
  text33: '05',
  text82: 'Showcase Your Project',
  text41: 'Sign Up',
  text93:
    "With the support of investors, idea owners can work on developing and scaling their sustainable projects. Use the Green Nexus platform to track progress, engage with backers, and share updates on the project's impact and achievements.",
  text32: '04',
  text81: 'Evaluate Opportunities',
  text83: 'Collaborate and Scale',
  text321: '04',
  heading: 'For Idea Owners',
  text4: 'Sign Up and Create Your Team',
  text2: '02',
  text1: '01',
  text11: '01',
  text91:
    'Assess the projects based on their objectives, sustainability impact, and alignment with the United Nations Sustainable Development Goals. Choose the ones that resonate with your interests and values.',
  text51:
    'Register on the Green Nexus platform using your Google account. This quick and easy step allows you to access all investment opportunities on our platform.',
  text9:
    "Our platform utilizes a selected DAO in conjunction with Google's Natural Language API to evaluate and examine submitted projects. This innovative approach ensures that only the most promising and impactful ideas are selected for further development.",
  text8: 'Evaluation and Examination',
  text71:
    'Browse the showcased projects on our Projects page, where you can view and learn more about the sustainable ideas that have been selected through our evaluation process.',
  text21: '02',
  text5:
    'Begin by signing up on the Green Nexus platform using your Google account. Once registered, you can create your team by inviting fellow team members to join and collaborate on your sustainable project.',
  text821: 'Invest and Support',
}

Process.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  text921: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text61: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text92: PropTypes.string,
  text31: PropTypes.string,
  text33: PropTypes.string,
  text82: PropTypes.string,
  text41: PropTypes.string,
  text93: PropTypes.string,
  text32: PropTypes.string,
  text81: PropTypes.string,
  text83: PropTypes.string,
  text321: PropTypes.string,
  heading: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  text91: PropTypes.string,
  text51: PropTypes.string,
  text9: PropTypes.string,
  text8: PropTypes.string,
  text71: PropTypes.string,
  text21: PropTypes.string,
  text5: PropTypes.string,
  text821: PropTypes.string,
}

export default Process
