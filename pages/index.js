import React from 'react'
import Head from 'next/head'

import HeroAndNav from '../components/hero-and-nav'
import Services from '../components/services'
import PortofolioCard from '../components/portofolio-card'
import SDGs from '../components/s-gs'
import Process from '../components/process'
import Banner from '../components/banner'
import Footer1 from '../components/footer1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Green Nexus: The Hub for Green Fundraising</title>
          <meta
            name="description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
          <meta
            property="og:title"
            content="Green Nexus: The Hub for Green Fundraising"
          />
          <meta
            property="og:description"
            content="Green Nexus unites idea owners &amp; investors to foster sustainable projects, promoting eco-innovation and advancing UN Sustainable Development Goals."
          />
        </Head>
        <main className="home-main">
          <HeroAndNav rootClassName="hero-and-nav-root-class-name"></HeroAndNav>
          <Services></Services>
          <div className="home-portofolio section-container">
            <div className="home-max-width max-content-container">
              <div className="home-text-container">
                <span className="home-text">our work</span>
                <h2 className="home-text01 Heading2">
                  <span>Explore our portfolio</span>
                </h2>
                <span className="home-text03">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation.
                  </span>
                </span>
                <button className="button-secondary button-lg button">
                  See all projects
                </button>
              </div>
              <div className="home-tab-selector-header">
                <span className="home-text07 tab-selector-btn">
                  Advertising
                </span>
                <span className="home-text08 tab-selector-btn">
                  Social Media
                </span>
                <span className="home-text09 tab-selector-btn">Branding</span>
                <span className="home-text10 tab-selector-btn">UI / UX</span>
                <span className="home-text11 tab-selector-btn">Packaging</span>
                <span className="tab-selector-btn">Product Design</span>
              </div>
              <div className="home-tab-selector-cards-container">
                <PortofolioCard
                  image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                  rootClassName="portofolio-card-root-class-name"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                  project_title="A brand-new advertising idea"
                  rootClassName="portofolio-card-root-class-name5"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Coca-Cola Summer Concept Campaign - 2021"
                  rootClassName="portofolio-card-root-class-name4"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Ad Campaign - I love you as much as I love Nutella"
                  rootClassName="portofolio-card-root-class-name3"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Coca-Colla Next Door Campaign - conceptual"
                  rootClassName="portofolio-card-root-class-name2"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Starbucks secret is a smile when you get your latte"
                  rootClassName="portofolio-card-root-class-name1"
                ></PortofolioCard>
              </div>
            </div>
          </div>
          <SDGs rootClassName="s-gs-root-class-name"></SDGs>
          <Process rootClassName="process-root-class-name"></Process>
          <Banner rootClassName="banner-root-class-name"></Banner>
        </main>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-portofolio {
            display: none;
          }
          .home-max-width {
            flex-direction: column;
          }
          .home-text-container {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            color: var(--dl-color-scheme-black80);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-tab-selector-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-text07 {
            margin-right: 30px;
          }
          .home-text08 {
            margin-right: 30px;
          }
          .home-text09 {
            margin-right: 30px;
          }
          .home-text10 {
            margin-right: 30px;
          }
          .home-text11 {
            margin-right: 30px;
          }
          .home-tab-selector-cards-container {
            width: 100%;
            display: grid;
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(3, 1fr);
          }
          @media (max-width: 991px) {
            .home-tab-selector-cards-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-tab-selector-cards-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
