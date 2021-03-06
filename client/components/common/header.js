import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { historyPush } from '../../redux/reducers/main'

const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const generateMobileMenu = () => { // eslint-disable-line consistent-return
    if (mobileMenu) {
      return (
        <div className="common-header-mobileMenu">
          <div
            className="common-header-mobileMenu-item"
            onClick={() => {
              props.historyPush('/')
              setMobileMenu(false)
            }}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            HOME
          </div>
          <div
            className="common-header-mobileMenu-item"
            onClick={() => {
              props.historyPush('/')
              setMobileMenu(false)
            }}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            HOME
          </div>
        </div>
      )
    }
  }

  return (
    <div className="common-header">
      <div className="common-header-centering">
        <div
          className="common-header-icon"
          onClick={() => props.historyPush('/')}
          onKeyDown={() => {}}
          tabIndex={0}
          role="button"
        />
        {/* desktop links lg/xl breakpoints */}
        <div className="common-header-links">
          <div
            className="common-header-links-item"
            onClick={() => props.historyPush('/')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Home
          </div>
          <div
            className="common-header-links-item"
            onClick={() => props.historyPush('/contact')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Contact
          </div>
        </div>
        {/* mobile links xs/sm/md breakpoints */}
        <div
          className="common-header-mobilelinks icon-menu"
          onClick={() => { setMobileMenu(!mobileMenu) }}
          role="button"
          onKeyDown={() => {}}
          tabIndex={0}
        />
      </div>
      {/* mobile links xs/sm/md breakpoints */}
      {generateMobileMenu()}
    </div>
  )
}

Header.propTypes = {
  historyPush: PropTypes.func.isRequired
}
const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ historyPush }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
