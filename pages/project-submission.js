import React from 'react'
import Head from 'next/head'

import NavbarCircular from '../components/navbar-circular'
import ProposalElementInput from '../components/proposal-element-input'
import ProposalElementDate from '../components/proposal-element-date'
import ProposalElementSummary from '../components/proposal-element-summary'
import ProposalElementCheckbox from '../components/proposal-element-checkbox'
import ProposalElementFile from '../components/proposal-element-file'
import ProposalElementEmail from '../components/proposal-element-email'
import ProposalElementNumber from '../components/proposal-element-number'
import Footer1 from '../components/footer1'

const ProjectSubmission = (props) => {
  return (
    <>
      <div className="project-submission-container">
        <Head>
          <title>
            Project-Submission - Green Nexus: The Hub for Green Fundraising
          </title>
          <meta
            name="description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
          <meta
            property="og:title"
            content="Project-Submission - Green Nexus: The Hub for Green Fundraising"
          />
          <meta
            property="og:description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
        </Head>
        <div className="project-submission-container1">
          <NavbarCircular rootClassName="navbar-circular-root-class-name3"></NavbarCircular>
        </div>
        <div className="project-submission-container2">
          <div className="project-submission-container3">
            <h1 className="project-submission-text">
              <span>Project Informations</span>
              <br></br>
            </h1>
            <ProposalElementInput
              name="Project Title"
              rootClassName="proposal-element-input-root-class-name6"
              textinput_placeholder="Project Title..."
            ></ProposalElementInput>
            <ProposalElementDate
              name="Start Date"
              rootClassName="proposal-element-date-root-class-name6"
            ></ProposalElementDate>
            <ProposalElementDate
              name="End Date"
              rootClassName="proposal-element-date-root-class-name7"
            ></ProposalElementDate>
            <ProposalElementSummary
              name="Project Summary"
              rootClassName="proposal-element-summary-root-class-name4"
              textarea_placeholder="Summary..."
            ></ProposalElementSummary>
            <ProposalElementCheckbox
              name="Categories"
              rootClassName="proposal-element-checkbox-root-class-name3"
            ></ProposalElementCheckbox>
            <ProposalElementFile
              name="Project Files"
              rootClassName="proposal-element-file-root-class-name3"
            ></ProposalElementFile>
          </div>
          <div className="project-submission-container4">
            <h1 className="project-submission-text3">
              <span>Team Informations</span>
              <br></br>
            </h1>
            <ProposalElementInput
              name="Team Leader Name"
              rootClassName="proposal-element-input-root-class-name7"
            ></ProposalElementInput>
            <ProposalElementEmail
              name="Team Leader E-Mail"
              rootClassName="proposal-element-email-root-class-name3"
            ></ProposalElementEmail>
            <ProposalElementNumber
              name="Team Size"
              rootClassName="proposal-element-number-root-class-name1"
            ></ProposalElementNumber>
            <ProposalElementSummary
              name="Team Member Names - E-Mails"
              rootClassName="proposal-element-summary-root-class-name5"
              textarea_placeholder="Team Members..."
            ></ProposalElementSummary>
            <div className="project-submission-container5">
              <button className="project-submission-button button">
                Send Project!
              </button>
            </div>
          </div>
        </div>
        <div className="project-submission-container6">
          <Footer1 rootClassName="footer1-root-class-name1"></Footer1>
        </div>
      </div>
      <style jsx>
        {`
          .project-submission-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxvcmFuZ2V8ZW58MHx8fHwxNjgwMTM1MzM2&ixlib=rb-4.0.3&w=1500');
          }
          .project-submission-container1 {
            width: 100%;
            height: 127px;
            display: flex;
            align-self: center;
          }
          .project-submission-container2 {
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .project-submission-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #2f2f2f;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: 30px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #fbfafa;
          }
          .project-submission-text {
            color: #c05746;
            width: 100%;
            align-self: flex-start;
            text-align: center;
            font-family: Roboto;
            border-color: var(--dl-color-scheme-darkblue);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .project-submission-container4 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            box-shadow: 5px 5px 10px 0px #2f2f2f;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            padding-top: var(--dl-space-space-unit);
            margin-right: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 30px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: #fbfafa;
          }
          .project-submission-text3 {
            color: #c05746;
            width: 100%;
            align-self: center;
            text-align: center;
            font-family: Roboto;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-scheme-darkblue);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .project-submission-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: flex-end;
          }
          .project-submission-button {
            color: var(--dl-color-scheme-white);
            align-self: center;
            margin-top: 0px;
            font-family: Roboto;
            margin-right: 0px;
            border-radius: 15px;
            background-color: #c05746;
          }
          .project-submission-container6 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbfafa;
          }
          @media (max-width: 1200px) {
            .project-submission-text3 {
              color: #c05746;
            }
            .project-submission-button {
              background-color: #c05746;
            }
            .project-submission-container6 {
              height: auto;
              align-self: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProjectSubmission
