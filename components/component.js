import React from 'react'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container"></div>
      <style jsx>
        {`
          .component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default AppComponent
