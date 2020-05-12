import React from 'react'
import Layout from '../components/Layout'

import sokocity from '../../src/assets/images/sokocity-square.jpg'
import famex from '../../src/assets/images/famex-square.jpg'
import chickn from '../../src/assets/images/chickntender-square.jpg'
import chicknPreview from '../../src/assets/images/chickntender.gif'

const Projects = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Projects</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>SokoCity</h3>
            <h6>Full Stack Developer | April 2020</h6>
            <span className="image left">
              <img src={sokocity} alt="" />
            </span>
            <p>
              A procedurally generated puzzle-rpg game built using Phaser 3,
              Firebase, React, and Node.
            </p>
            <p>
              In order to see how far our creativity and skill could take us, we
              decided to try to create a game. Rather than to manually create
              each level, we used procedural generation to create the maps, and
              reconfigured an npm module to integrate the puzzle into our game.
              Due to this, our game is scalable and each playthrough of the game
              will be unique.
            </p>
            <p>
              I acted as the project manager, leading daily standups amongst the
              team, assigning and re-assigning tasks as needed, and kept us on
              track to complete our MVP. During the course of the project, I
              integrated Firebase and React into our website and game, as well
              as implemented the logic to have randomized map levels and
              collision avoidance for both object and player spawns.
            </p>
            <p>
              <ul className="icons">
                <li>
                  <a
                    href="https://github.com/destination-pop/soko-city"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://soko-city.firebaseapp.com/"
                    style={{ borderBottom: 'none' }}
                  >
                    <i class="fas fa-link fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/9Yr-5DsVitw"
                    style={{ borderBottom: 'none' }}
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                </li>
              </ul>
            </p>
            <hr />

            <h3>Chick'n Tender</h3>
            <h6>Solo Developer | March 2020</h6>
            <span className="image right">
              <img src={chicknPreview} alt="" />
            </span>
            <p>
              A mobile application built using Flutter/Dart and Yelp API during
              a 4 day hackathon.
            </p>

            <p>
              Chick'n Tender aims to help the indecisive eater on narrowing down
              their options. The application causes the user to continuously
              narrow down their choices due to the UI showing their remaining
              options left. Once the user is left with only one option, it will
              ask them to confirm their choice. After that, the application will
              give the user 6 choices of restaurants nearby, using Yelp's API.
              In order to prevent boredom/repeatitiveness, the Yelp query is
              offset by a random number so that different restaurants get to
              shine.
            </p>
            <p>
              During the course of the hackathon, I wanted to take advantage of
              this opportunity to learn a new language as well as to step into
              the world of mobile development. Learning to write in Dart was a
              challenge, but I enjoyed learning the differences between Dart and
              Javascript. Although my final product by the end of the hackathon
              was not what I had set out to create, I am extremely content with
              how it turned out.
            </p>
            <a
              href="https://github.com/essiekim/chicknTender"
              style={{ borderBottom: 'none' }}
            >
              <i className="fab fa-github fa-2x" />
            </a>

            <hr />
            <h3>FameX</h3>
            <h6>Full Stack Developer | March 2020</h6>
            <span className="image left">
              <img src={famex} alt="" />
            </span>
            <p>
              An e-commerce web application built using React, Redux, Node,
              Express, Sequelize, PostgreSQL, Passport, and Material UI.
            </p>
            <p>
              In a team of four, the team and I set out to build a full stack
              application from scratch using all the technologies we learnt. We
              started out by creating a sketch of our database schema and to
              also start organizing the steps we would need to take in order to
              achieve our MVP by deadline.
            </p>
            <p>
              I built out the front end and integrated Material UI into our
              project. I also worked on the back end routes by debugging, pair
              programming, and building out the shopping cart functionality. I
              implemented user authentication using Google OATH, and deployed
              our website using Travis CI/CD on Heroku.
            </p>
            <ul className="icons">
              <li>
                <a
                  href="https://github.com/Kill-9-Mockingbird/grace-shopper"
                  style={{ borderBottom: 'none' }}
                >
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://famex.herokuapp.com/"
                  style={{ borderBottom: 'none' }}
                >
                  <i class="fas fa-link fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Projects
