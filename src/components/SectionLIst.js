import React from 'react'
import { sectionInfo } from '../../config'

import pic1 from '../assets/images/pic02.jpg'
import pic2 from '../assets/images/Box_4.jpg'
import pic3 from '../assets/images/pic03.jpg'

export default function SectionList() {
	return (
		<div className="wrapper alt style2">
			{sectionInfo.map((section) => {
				return (
					<section id={section} className="spotlight">
						<div className="image">
							<img
								src={
									section.pic === 'pic1' ? pic1 : (section.pic === 'pic2' ? pic2 : pic3)
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
							<button type="button">{section.button}</button>
						</div>
					</section>
				)
			})}
		</div>
	)
}
