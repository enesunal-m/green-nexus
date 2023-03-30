import React from 'react'

import PropTypes from 'prop-types'

import NavbarCircular from './navbar-circular'
import Hero from './hero'

const HeroAndNav = (props) => {
  return (
    <>
      <div className={`hero-and-nav-container ${props.rootClassName} `}>
        <NavbarCircular rootClassName="navbar-circular-root-class-name1"></NavbarCircular>
        <div className="hero-and-nav-container1">
          <Hero rootClassName="hero-root-class-name"></Hero>
        </div>
      </div>
      <style jsx>
        {`
          .hero-and-nav-container {
            width: 100%;
            height: 800px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHRyZWV8ZW58MHx8fHwxNjgwMDgxMTA2&ixlib=rb-4.0.3&w=1500');
          }
          .hero-and-nav-container1 {
            width: 100%;
            height: 700px;
            display: flex;
            align-items: flex-start;
            padding-top: 15%;
            flex-direction: column;
            padding-bottom: 15%;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

HeroAndNav.defaultProps = {
  rootClassName: '',
}

HeroAndNav.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeroAndNav
