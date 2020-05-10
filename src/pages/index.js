import React from 'react'

import Layout from '../components/Layout'
import Experience from '../components/Experience'
import About from '../components/About'
import SectionList from '../components/SectionLIst'

import Scroll from '../components/Scroll'

import config from '../../config'

const IndexPage = () => (
	<Layout>
		<section id="banner">
			<div className="inner">
				<h2>{config.heading}</h2>
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
						<Scroll type="id" element="two">
							<a href="/#two" className="button">
								Projects
							</a>
						</Scroll>
					</li>
				</ul>
			</div>
			<Scroll type="id" element="one">
				<a href="#one" className="more">
					Learn More
				</a>
			</Scroll>
		</section>

		<About id="one" />
		<SectionList id="two" />

		<Experience id="five" />

		<section id="cta" className="wrapper style4">
			<div className="inner">
				<header>
					<h2>talk to me!</h2>
					<p>
						I would absolutely love to get to know you and talk about my
						experiences. Feel free to connect with me on LinkedIn, or send me an
						email!
					</p>
				</header>
			</div>
		</section>
	</Layout>
)

export default IndexPage
