import React from 'react'
import Layout from '../components/Layout'

import pic1 from '../assets/images/poster_1.png'
import pic2 from '../assets/images/Box_1-2.jpg'
import pic3 from '../assets/images/Box_4.jpg'
import pic4 from '../assets/images/pic04.jpg'
import pic5 from '../assets/images/pic05.jpg'
import banner from '../assets/images/miso-comp.jpg'

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
                    <img src={pic3} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic2} alt="" />
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
                    <img src={pic1} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic3} alt="" />
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
