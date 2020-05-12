import React from 'react'
import Layout from '../components/Layout'

const Projects = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Resume</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h2>Experience</h2>
            <a
              href="https://drive.google.com/uc?export=download&id=1zfykYz44rjgLyLTE96GuS_2ptqci0NMS"
              className="button small"
            >
              <i className="fas fa-download" /> &nbsp; download
            </a>

            <hr />

            <header>
              <h4>Teaching Fellow | 2020</h4>
              <p>Grace Hopper Program at Fullstack Academy of Code</p>
            </header>
            <p>
              <ul>
                <li>
                  Debug, mentor, and teach 34 full-time software engineering
                  students
                </li>
                <li>Conduct technical interviews for prospective students</li>
                <li>
                  Assist students learning Javascript technologies such as
                  Node.js, React, Redux, and Sequelize.
                </li>
              </ul>
            </p>
            <hr />
            <header>
              <h4>Graphic Designer | 2018 - 2019</h4>
              <p>Delta Children</p>
            </header>
            <p>
              <ul>
                <li>
                  Created wireframes, mockups, and prototypes for various
                  elements of the website redesign using Figma, Sketch, and
                  Photoshop.
                </li>
                <li>
                  Designed promotional emails, marketing assets, and product
                  animations.
                </li>
              </ul>
            </p>
            <hr />
            <header>
              <h4>Freelance Graphic Designer | 2018 - 2020</h4>
              <p>BARK</p>
            </header>
            <p>
              <ul>
                <li>
                  Prepared and produced over 80 individual toy backers and hang
                  tags
                </li>
                <li>
                  Designed and produced animated GIFs for three product lines,
                  email designs, and banner ads
                </li>
              </ul>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Projects
