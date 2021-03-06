import React from 'react'

export default function Experience() {
  return (
    <section className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Experience</h2>
          <p>
            Over the years, I've learned and developed a variety of both soft
            and hard skills. I love to be hands on with new technology and
            create. As a current Teaching Fellow, I get to utilize my teaching
            skills and patience gained from my days as a preschool teacher, and
            my creative thinking from my time as a graphic designer. I live for
            the challenges that programming provides, and I absolutely cannot
            wait to contribute to meaningful projects.
          </p>
          <p>
            <b>Proficient in</b>: Javascript, React, Redux, Node.js, Express,
            Git, Sequelize, HTML, CSS, RESTful API, and PostgreSQL
          </p>
          <p>
            <b>Knowledgable in</b>: TDD, Mocha, Chai, Jasmin, Heroku, Travis,
            SQL, Figma, and Sketch
          </p>
          <p>
            <b>Familiar with</b>: Material UI, Firebase, Phaser, Flutter, Dart
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Developer</h3>
            <p>
              Grace Hopper graduate. Learned and became proficient in the NERDS{' '}
              <i>(Node, Express, React, and Databases with Sequelize)</i> stack.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Designer</h3>
            <p>
              3 years of digital and print design experience. Skilled in
              Illustrator, Photoshop, After Effects, Figma and comfortable with
              Sketch, Lightroom, and InDesign.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Teacher</h3>
            <p>
              Current Teaching Fellow, mentoring 33 students, debugging code,
              and clarifying concepts with analogies. Former preschool teacher,
              teaching and supervising 3-year-old children.
            </p>
          </li>
          <li className="icon solid fa-heart">
            <h3>Always Curious</h3>
            <p>Avid learner of random facts and constantly researching. Chaser of the 'aha!' moments when learning and creating.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
