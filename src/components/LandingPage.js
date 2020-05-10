import React from 'react'
import { heading } from '../../config'
import Scroll from '../components/Scroll'

export default function LandingPage() {
  return (
    <section id="banner">
      <div className="inner">
        <h2>{heading}</h2>
        <p>
          <Scroll type="id" element="two">
            <a href="/#two">Full Stack Developer</a>
          </Scroll>{' '}
          /{' '}
          <Scroll type="id" element="three">
            <a href="/#three">Graphic Designer</a>
          </Scroll>
        </p>
        <ul className="actions special">
          <li>
            <a href="/projects" className="button">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>
  )
}
