import React from 'react'

const ProjectGrids = (props) => {
  return (
    <>
      <div className="project-grids-container">
        <div className="project-grids-container1"></div>
      </div>
      <style jsx>
        {`
          .project-grids-container {
            width: 100%;
            height: 1061px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .project-grids-container1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: grid;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default ProjectGrids
