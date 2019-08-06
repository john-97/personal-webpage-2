import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { historyPush } from '../../redux/reducers/main'
import Experiences from '../../options/landing-data'

const HoverDisplay = (props) => {
  const [open, setOpen] = useState(false)
  const experience = Experiences[0]
  const toggleOpen = () => {
    if (open) {
      return (
        <div
          className="common-hover-display-showpage"
          style={{ backgroundImage: `url(${experience.background})` }}
        >
          <div className="common-hover-display-showpage-overlay small-overlay">
            <div className="common-hover-display-showpage-overlay-left">
              <div className="common-hover-display-showpage-overlay-left-title">{experience.name}</div>
              <img
                className="common-hover-display-showpage-overlay-left-image"
                src={experience.image}
                alt="html"
              />
            </div>
            <div className="common-hover-display-showpage-overlay-right">
              <div className="common-hover-display-showpage-overlay-right-description">
                <div className="common-hover-display-showpage-overlay-right-description-title">Description</div>
                {
                  experience.description.split('\n').map((paragraph) => {
                    return (
                      <div className="common-hover-display-showpage-overlay-right-description-text">
                        {paragraph}
                        &nbsp;
                      </div>
                    )
                  })
                }
              </div>
              <div className="common-hover-display-showpage-overlay-right-projects-title">Projects</div>
              <div className="common-hover-display-showpage-overlay-right-projects">
                {
                  experience.projects.map((project) => {
                    return (
                      <div
                        className="common-hover-display-showpage-overlay-right-project"
                        style={{ backgroundImage: `url(${project.background})` }}
                        onClick={() => props.historyPush(project.link)}
                        onKeyDown={() => {}}
                        tabIndex={0}
                        role="button"
                      >
                        <div className="common-hover-display-showpage-overlay-right-project-text">{project.name}</div>
                      </div>
                    )
                  })
                }
              </div>
              <div
                className="common-hover-display-showpage-overlay-open"
                onClick={() => setOpen(!open)}
                onKeyDown={() => {}}
                tabIndex={0}
                role="button"
              >
                close
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div
        className="common-hover-display-showpage"
        style={{ backgroundImage: `url(${experience.background})` }}
      >
        <div className="common-hover-display-showpage-overlay">
          <div className="common-hover-display-showpage-overlay-title">{experience.name}</div>
          <div
            className="common-hover-display-showpage-overlay-open"
            onClick={() => setOpen(!open)}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            click me
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="common-hover-display">
      {toggleOpen()}
    </div>
  )
}

HoverDisplay.propTypes = {
  historyPush: PropTypes.func.isRequired // eslint-disable-line react/no-unused-prop-types
}
const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ historyPush }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HoverDisplay)
