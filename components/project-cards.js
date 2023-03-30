import React from 'react'

import PropTypes from 'prop-types'

const ProjectCards = (props) => {
  return (
    <>
      <div className={`project-cards-container ${props.rootClassName} `}>
        <div className="project-cards-container1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&amp;ixlib=rb-1.2.1&amp;h=400"
            className="project-cards-image"
          />
          <div className="project-cards-container2">
            <span className="project-cards-text">{props.Category}</span>
            <span className="project-cards-text1">{props.ProjectName}</span>
            <span className="project-cards-text2">{props.Description}</span>
            <div className="project-cards-container3">
              <div className="project-cards-profile">
                <img
                  alt="profile"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                  className="project-cards-image1"
                />
                <span className="project-cards-text3">{props.Name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .project-cards-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            min-width: 0;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .project-cards-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: #19cf68;
            border-width: 2px;
            flex-direction: column;
          }
          .project-cards-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .project-cards-container2 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .project-cards-text {
            color: #1faa5b;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .project-cards-text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .project-cards-text2 {
            color: #595959;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .project-cards-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #1faa5b;
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .project-cards-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .project-cards-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .project-cards-text3 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }

          .project-cards-root-class-name3 {
            width: var(--dl-size-size-xxlarge);
            height: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-twounits);
          }
          .project-cards-root-class-name4 {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-twounits);
          }
          .project-cards-root-class-name5 {
            width: var(--dl-size-size-xxlarge);
            height: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-twounits);
          }
          .project-cards-root-class-name6 {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-twounits);
          }
          .project-cards-root-class-name8 {
            width: var(--dl-size-size-xxlarge);
            height: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-twounits);
          }
          .project-cards-root-class-name10 {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .project-cards-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

ProjectCards.defaultProps = {
  rootClassName: '',
  ProjectName: 'PROJECT NAME',
  Category: 'CATEGORY',
  Name: 'Doruk Yalçın',
  Description: 'Description',
}

ProjectCards.propTypes = {
  rootClassName: PropTypes.string,
  ProjectName: PropTypes.string,
  Category: PropTypes.string,
  Name: PropTypes.string,
  Description: PropTypes.string,
}

export default ProjectCards
