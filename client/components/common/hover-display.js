import React, { useState } from 'react'
import Experiences from '../../options/landing-data'

const HoverDisplay = () => {
  const [open, setOpen] = useState(true)
  const experience = Experiences[0]
  const toggleOpen = () => {
    if (open) {
      return (
        <div
          className="common-hover-display-showpage"
          style={{ backgroundImage: `url(${experience.background})` }}
        >
          <div className="common-hover-display-showpage-overlay small-overlay">
            <div className="d-flex">
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
                  <div className="common-hover-display-showpage-overlay-right-description-text">{experience.description}</div>
                </div>
                <div className="common-hover-display-showpage-overlay-right-projects">
                  <div className="common-hover-display-showpage-overlay-right-projects">
                    <div className="common-hover-display-showpage-overlay-right-projects-title">Projects</div>
                    <div className="common-hover-display-showpage-overlay-right-projects-text">{experience.name}</div>
                  </div>
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

export default HoverDisplay
