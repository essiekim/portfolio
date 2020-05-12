import React from 'react'
import Layout from '../components/Layout'

import pic1 from '../assets/images/Box_3.jpg'
import pic2 from '../assets/images/Box_1-2.jpg'
import pic3 from '../assets/images/Box_4.jpg'

import pic4 from '../assets/images/sc-1.jpg'
import pic5 from '../assets/images/sc-2.jpg'
import pic6 from '../assets/images/sc-3.jpg'

import pic7 from '../assets/images/ig-bundle.gif'
import pic8 from '../assets/images/JPMA.jpg'
import pic9 from '../assets/images/ig-product.gif'



import banner from '../assets/images/poster_1.png'

const Design = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Design</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12">
                  <span className="image fit">
                    <img src={banner} alt="" />
                  </span>
                </div>

                <div className="col-4">
                  <span className="image fit">
                    <img src={pic4} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic5} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic6} alt="" />
                  </span>
                </div>

                <div className="col-4">
                  <span className="image fit">
                    <img src={pic1} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic2} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic3} alt="" />
                  </span>
                </div>

                <div className="col-4">
                  <span className="image fit">
                    <img src={pic7} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic8} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic9} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Design
