import React from 'react'
import Head from 'next/head'

import NavbarCircular from '../components/navbar-circular'
import Category from '../components/category'
import ProjectCards from '../components/project-cards'
import Footer1 from '../components/footer1'

const Projects = (props) => {
  return (
    <>
      <div className="projects-container">
        <Head>
          <title>Projects - Green Nexus: The Hub for Green Fundraising</title>
          <meta
            name="description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
          <meta
            property="og:title"
            content="Projects - Green Nexus: The Hub for Green Fundraising"
          />
          <meta
            property="og:description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
        </Head>
        <div className="projects-container1">
          <NavbarCircular rootClassName="navbar-circular-root-class-name7"></NavbarCircular>
        </div>
        <div className="projects-container2">
          <div className="projects-container3">
            <Category rootClassName="category-root-class-name"></Category>
          </div>
          <div className="projects-container4">
            <div className="projects-container5">
              <ProjectCards rootClassName="project-cards-root-class-name3"></ProjectCards>
              <ProjectCards rootClassName="project-cards-root-class-name5"></ProjectCards>
              <ProjectCards rootClassName="project-cards-root-class-name8"></ProjectCards>
            </div>
            <div className="projects-container6">
              <ProjectCards rootClassName="project-cards-root-class-name4"></ProjectCards>
              <ProjectCards rootClassName="project-cards-root-class-name6"></ProjectCards>
              <ProjectCards rootClassName="project-cards-root-class-name10"></ProjectCards>
            </div>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name5"></Footer1>
      </div>
      <style jsx>
        {`
          .projects-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .projects-container2 {
            width: 100%;
            height: 1029px;
            display: flex;
            align-items: flex-start;
          }
          .projects-container3 {
            width: 301px;
            height: 880px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .projects-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .projects-container5 {
            flex: 0;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .projects-container6 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Projects
