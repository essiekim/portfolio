import React from 'react'
import { sectionInfo } from '../../config'

import pic1 from '../assets/images/SokoCity.jpg'
import pic2 from '../assets/images/Box_4.jpg'
import pic3 from '../assets/images/react-props-splash.jpg'

export default function SectionList() {
  return (
    <div className="wrapper alt style2">
      {sectionInfo.map((section) => {
        return (
          <section id={section.id} className="spotlight">
            <div className="image">
              <img
                src={
                  section.pic === 'pic1'
                    ? pic1
                    : section.pic === 'pic2'
                    ? pic2
                    : pic3
                }
                alt=""
              />
            </div>
            <div className="content">
              <header>
                <h2>{section.header}</h2>
                <p>{section.subHeader}</p>
              </header>
              <p>{section.paragraph}</p>
              <a href={`/${section.link}`} style={{ borderBottom: 'none' }}>
                <button type="button">{section.button}</button>
              </a>
            </div>
          </section>
        )
      })}
    </div>
  )
}
