import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            {/* <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Projects
              </a>
            </Scroll> */}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <p>
            note to self: add photo here
            <br />
            also, maybe just make this section a blurb and a more in-depth
            section on a different page
          </p>

          <h2>
            Hey! I'm Essie. I am a creator.
            <br />
          </h2>
          <br />
          <p>
            I am a full stack developer and graphic designer based in NYC.
            Currently, I am a Teaching Fellow at for the Grace Hopper Program at{' '}
            <a href="https://fullstackacademy.com">
              Fullstack Academy of Code.
            </a>
            <br />
            <br />
            Before I started on my path into development, I was a{' '}
            <b>graphic designer</b>. The parts that I loved about designing were
            brainstorming, creating solutions, and ultimately get to hold
            something tangible by the end of the process. I once had the
            opportunity to work side-by-side with a developer, and I saw how she
            brought my lo-fi prototype to life. <i>I was awed</i>. It was then
            that I knew this was what I wanted to do. Long-ish story short, I
            applied to the <b>Grace Hopper Program</b> at Fullstack Academy of
            Code, was accepted, graduated, then was selected to become a fellow
            to help guide students on their journey to software development. I
            am very excited for my next opportunity to make an impact with my
            experience as both a developer and designer!
            <br />
            <br />
            Outside of work, I am a dog mom of two (
            <a href="https://www.instagram.com/misotheshibe/">
              Miso the Shibe
            </a>{' '}
            and Momo the Shih-Pom), playing Animal Crossing, learning ukelele,
            doodling, (<i>attempting to</i>) learn dances, or getting lost in a
            metaphorical rabbit hole on Wikipedia or Reddit. <b>Why?</b> I just{' '}
            <i>really</i> enjoy learning about things and flexing my creative
            muscles when I can!
          </p>
          <p>NOTE: insert resume link?</p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <header>
            <h2>Development</h2>
            <p>Featured: SokoCity</p>
          </header>
          <p>
            FameX - An e-commerce site built using the NERDS stack, selling
            outrageous experiences with top-tier celebrities.
            <br />
            <br />
            Chickn' Tender - A mobile app built with Flutter during a 4-day
            hackathon.
            <br />
            <br />
            SokoCity - A puzzle-rpg game built with Phaser3, with procedurally
            generated levels.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <header>
            <h2>Design</h2>
            <p>Featured: BARK</p>
          </header>
          <p>Some of my design work over the years as well and photography.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <header>
            <h2>Doodles and Thoughts</h2>
            <p>Featured: React Props</p>
          </header>
          <p>
            Some illustrated diagrams that I drew during my time as a teaching
            fellow to help create a visual representation of concepts.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Experience</h2>
          <p>
            Over the years, I've learned and developed a variety of skills.
            <br />
            <br />
            <b>Proficient in</b>: Javascript, React, Redux, Node.js, Express,
            Git, Sequelize, HTML, CSS, RESTful API, and PostgreSQL
            <br />
            <b>Knowledgable in</b>: TDD, Mocha, Chai, Jasmin, Heroku, Travis,
            SQL, Figma, and Sketch
            <br />
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
            <p>Current Teaching Fellow, mentoring 33 students, debugging code, and clarifying concepts with analogies. Former preschool teacher, teaching and supervising 3-year-old children.</p>
          </li>
          <li className="icon solid fa-heart">
            <h3>Student</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
