import React from 'react'

const VerticalLine = (props) => {
  return (
    <>
      <div className="vertical-line-container"></div>
      <style jsx>
        {`
          .vertical-line-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default VerticalLine
