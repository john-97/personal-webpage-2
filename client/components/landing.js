import React from 'react'
import Header from './common/header'
import Footer from './common/footer'
import WelcomePage from './landing/welcome-page'
import HoverDisplay from './common/hover-display'

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-page-body">
        <WelcomePage />
        <div className="landing-page-body-welcome">
          <HoverDisplay />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
