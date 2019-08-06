import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5
import { connect } from 'react-redux'
import Header from './common/header'
import Footer from './common/footer'

import Landing from './pages/landing'
import Resume from './pages/resume'

const Main = (props) => {
  return (
    <div>
      <div className={cx('landing-page', { light: !props.main.darkmode })}>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

Main.propTypes = {
  main: PropTypes.shape({
    darkmode: PropTypes.bool
  }).isRequired
}
const mapStateToProps = state => ({ main: state.main })
export default connect(mapStateToProps)(Main)
