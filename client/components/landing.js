import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-page-body">
        <div className="landing-page-body-welcome">WELCOME</div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
