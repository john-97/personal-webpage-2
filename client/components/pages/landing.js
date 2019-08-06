import React from 'react'
import WelcomePage from '../landing-components/welcome-page'
import HoverDisplay from '../common/hover-display'

const Landing = () => {
  return (
    <div className="landing-page-body">
      <WelcomePage />
      <div className="landing-page-body-welcome">
        <HoverDisplay />
      </div>
    </div>
  )
}

export default Landing
