import React from 'react'
import profilepic from '../assets/images/essiekim.jpg'

export default function About() {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <img src={profilepic} className="avatar" />
        <br />
        <br />
        <header className="major">
          <br />

          <h2>
            Hey! I'm Essie. I am a creator.
            <br />
          </h2>
          <br />
          <p>
            I am a <b>full stack developer</b> and <b>graphic designer</b> based
            in NYC. I love to figure out and build creative solutions.
            Currently, I am a Teaching Fellow at for the{' '}
            <b>Grace Hopper Program</b> at{' '}
            <a href="https://fullstackacademy.com">Fullstack Academy of Code</a>
            , where I mentor 33 students, debug code, and lead technical
            interviews.
          </p>
          <p>
            Outside of work, I am a dog mom of two (
            <a href="https://www.instagram.com/misotheshibe/">Miso the Shibe</a>{' '}
            and Momo the Shih-Pom), playing Animal Crossing, learning ukelele,
            doodling, (<i>attempting to</i>) learn dances, or getting lost in a
            metaphorical rabbit hole on Wikipedia or Reddit. <b>Why?</b> I just{' '}
            <i>really</i> enjoy learning about things and flexing my creative
            muscles when I can!
          </p>
          <h4>Resume</h4>
          <p>
            <a href="/resume">VIEW</a> /{' '}
            <a href="https://drive.google.com/uc?export=download&id=1zfykYz44rjgLyLTE96GuS_2ptqci0NMS">
              DOWNLOAD
            </a>
          </p>
        </header>
        <ul className="icons major">
          <li>
            <a
              href="https://github.com/essiekim"
              style={{
                borderBottom: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x" />
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://linkedin.com/in/estheryskim"
              style={{
                borderBottom: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-3x" />
            </a>
          </li>
          <li>
            <a
              href="mailto:esther.ys.kim@gmail.com"
              style={{
                borderBottom: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope fa-3x" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
