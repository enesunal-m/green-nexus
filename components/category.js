import React from 'react'

import PropTypes from 'prop-types'

const Category = (props) => {
  return (
    <>
      <div className={`category-container ${props.rootClassName} `}>
        <div className="category-sidebar">
          <div className="category-nav-item">
            <span className="category-text">
              <span>Category</span>
              <br></br>
            </span>
            <div className="category-options">
              <ul className="list">
                <li className="category-li list-item">
                  <input type="checkbox" className="category-checkbox" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Air Pollution
                  </a>
                </li>
                <li className="category-li01 list-item">
                  <input type="checkbox" className="category-checkbox01" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Water
                  </a>
                </li>
                <li className="category-li02 list-item">
                  <input type="checkbox" className="category-checkbox02" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="category-link2"
                  >
                    Animals
                  </a>
                </li>
                <li className="category-li03 list-item">
                  <input type="checkbox" className="category-checkbox03" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="category-link3"
                  >
                    Climate change and global warming
                  </a>
                </li>
                <li className="category-li04 list-item">
                  <input type="checkbox" className="category-checkbox04" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="category-link4"
                  >
                    Soil degradation and erosion
                  </a>
                </li>
                <li className="category-li05 list-item">
                  <input type="checkbox" className="category-checkbox05" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="category-link5"
                  >
                    Energy production and consumption
                  </a>
                </li>
                <li className="category-li06 list-item">
                  <input type="checkbox" className="category-checkbox06" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="category-link6"
                  >
                    Urbanization
                  </a>
                </li>
                <li className="category-li07 list-item">
                  <input type="checkbox" className="category-checkbox07" />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="category-link7"
                  >
                    Industrial pollution
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="category-nav-item1">
            <span className="category-text03">Project stage</span>
            <div className="category-options1">
              <ul className="list">
                <li className="category-li08 list-item">
                  <input type="checkbox" className="category-checkbox08" />
                  <span className="category-text04">Ideation</span>
                </li>
                <li className="category-li09 list-item">
                  <input type="checkbox" className="category-checkbox09" />
                  <span className="category-text05">Planning</span>
                </li>
                <li className="category-li10 list-item">
                  <input type="checkbox" className="category-checkbox10" />
                  <span className="category-text06">Implementation</span>
                </li>
                <li className="category-li11 list-item">
                  <input type="checkbox" className="category-checkbox11" />
                  <span className="category-text07">Scaling</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="category-nav-item2">
            <span className="category-text08">fundıng type</span>
            <div className="category-options2">
              <ul className="list">
                <li className="category-li12 list-item">
                  <input type="checkbox" className="category-checkbox12" />
                  <span className="category-text09">Grants</span>
                </li>
                <li className="category-li13 list-item">
                  <input type="checkbox" className="category-checkbox13" />
                  <span className="category-text10">Loans</span>
                </li>
                <li className="category-li14 list-item">
                  <input type="checkbox" className="category-checkbox14" />
                  <span className="category-text11">Equity</span>
                </li>
                <li className="category-li15 list-item">
                  <input type="checkbox" className="category-checkbox15" />
                  <span className="category-text12">
                    <span>Crowdfunding</span>
                    <br></br>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="category-nav-item3">
            <span className="category-text15">Applıcatıon deadlıne</span>
            <div className="category-options3">
              <ul className="list">
                <li className="category-li16 list-item">
                  <input type="checkbox" className="category-checkbox16" />
                  <span className="category-text16">0-6 months</span>
                </li>
                <li className="category-li17 list-item">
                  <input type="checkbox" className="category-checkbox17" />
                  <span className="category-text17">6-12 months</span>
                </li>
                <li className="category-li18 list-item">
                  <input type="checkbox" className="category-checkbox18" />
                  <span className="category-text18">1-2 years</span>
                </li>
                <li className="category-li19 list-item">
                  <input type="checkbox" className="category-checkbox19" />
                  <span className="category-text19">
                    <span>2+ years</span>
                    <br></br>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <button className="category-button button">
            <span className="category-text22">
              <span>Show Projects</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .category-container {
            width: auto;
            height: 1004px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }

          .category-sidebar {
            width: 300px;
            height: 1024px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-color: #1faa5b;
            border-width: 1px;
            border-radius: 15px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
            border-top-width: 1px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .category-nav-item {
            gap: 0;
            display: flex;
            align-items: flex-start;
            border-color: #1faa5b;
            border-style: solid;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-text {
            font-weight: 600;
            border-color: #1faa5b;
            border-style: dashed;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-options {
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .category-li {
            color: #3f3f3f;
          }
          .category-checkbox {
            filter: hue-rotate(270deg);
          }
          .category-li01 {
            color: #3f3f3f;
          }
          .category-checkbox01 {
            filter: hue-rotate(270deg);
          }
          .category-li02 {
            color: #3f3f3f;
          }
          .category-checkbox02 {
            filter: hue-rotate(270deg);
          }
          .category-link2 {
            padding-left: 4px;
          }
          .category-li03 {
            color: #3f3f3f;
          }
          .category-checkbox03 {
            filter: hue-rotate(270deg);
          }
          .category-link3 {
            padding-left: 4px;
          }
          .category-li04 {
            color: #3f3f3f;
          }
          .category-checkbox04 {
            filter: hue-rotate(270deg);
          }
          .category-link4 {
            padding-left: 4px;
          }
          .category-li05 {
            color: #3f3f3f;
          }
          .category-checkbox05 {
            filter: hue-rotate(270deg);
          }
          .category-link5 {
            padding-left: 4px;
          }
          .category-li06 {
            color: #3f3f3f;
          }
          .category-checkbox06 {
            filter: hue-rotate(270deg);
          }
          .category-link6 {
            padding-left: 4px;
          }
          .category-li07 {
            color: #3f3f3f;
          }
          .category-checkbox07 {
            filter: hue-rotate(270deg);
          }
          .category-link7 {
            padding-left: 4px;
          }
          .category-nav-item1 {
            width: 100%;
            display: flex;
            border-color: #1faa5b;
            border-style: solid;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-text03 {
            width: auto;
            font-weight: 600;
            border-color: #1faa5b;
            border-style: dashed;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-options1 {
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .category-li08 {
            color: #3f3f3f;
          }
          .category-checkbox08 {
            filter: hue-rotate(270deg);
          }
          .category-text04 {
            padding-left: 4px;
          }
          .category-li09 {
            color: #3f3f3f;
          }
          .category-checkbox09 {
            filter: hue-rotate(270deg);
          }
          .category-text05 {
            padding-left: 4px;
          }
          .category-li10 {
            color: #3f3f3f;
          }
          .category-checkbox10 {
            filter: hue-rotate(270deg);
          }
          .category-text06 {
            padding-left: 4px;
          }
          .category-li11 {
            color: #3f3f3f;
          }
          .category-checkbox11 {
            filter: hue-rotate(270deg);
          }
          .category-text07 {
            padding-left: 4px;
          }
          .category-nav-item2 {
            width: 100%;
            display: flex;
            border-color: #1faa5b;
            border-style: solid;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-text08 {
            font-weight: 600;
            border-color: #1faa5b;
            border-style: dashed;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-options2 {
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .category-li12 {
            color: #3f3f3f;
          }
          .category-checkbox12 {
            filter: hue-rotate(270deg);
          }
          .category-text09 {
            padding-left: 4px;
          }
          .category-li13 {
            color: #3f3f3f;
          }
          .category-checkbox13 {
            filter: hue-rotate(270deg);
          }
          .category-text10 {
            padding-left: 4px;
          }
          .category-li14 {
            color: #3f3f3f;
          }
          .category-checkbox14 {
            filter: hue-rotate(270deg);
          }
          .category-text11 {
            padding-left: 4px;
          }
          .category-li15 {
            color: #3f3f3f;
          }
          .category-checkbox15 {
            filter: hue-rotate(270deg);
          }
          .category-text12 {
            padding-left: 4px;
          }
          .category-nav-item3 {
            width: 100%;
            display: flex;
            border-color: #1faa5b;
            border-style: solid;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-text15 {
            font-weight: 600;
            border-color: #1faa5b;
            border-style: dashed;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .category-options3 {
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .category-li16 {
            color: #3f3f3f;
          }
          .category-checkbox16 {
            filter: hue-rotate(270deg);
          }
          .category-text16 {
            padding-left: 4px;
          }
          .category-li17 {
            color: #3f3f3f;
          }
          .category-checkbox17 {
            filter: hue-rotate(270deg);
          }
          .category-text17 {
            padding-left: 4px;
          }
          .category-li18 {
            color: #3f3f3f;
          }
          .category-checkbox18 {
            filter: hue-rotate(270deg);
          }
          .category-text18 {
            padding-left: 4px;
          }
          .category-li19 {
            color: #3f3f3f;
          }
          .category-checkbox19 {
            filter: hue-rotate(270deg);
          }
          .category-text19 {
            padding-left: 4px;
          }
          .category-button {
            align-self: stretch;
            margin-top: var(--dl-space-space-threeunits);
            padding-top: 0px;
            background-color: #1faa5b;
          }
          .category-text22 {
            margin-top: 0px;
            text-align: center;
            padding-top: 0px;
          }
        `}
      </style>
    </>
  )
}

Category.defaultProps = {
  rootClassName: '',
}

Category.propTypes = {
  rootClassName: PropTypes.string,
}

export default Category
