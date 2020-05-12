import React from 'react'
import Layout from '../components/Layout'
import reactDiagram from '../../src/assets/images/passing-props-with-react.jpg'

const Doodles = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Doodles</h2>
        </header>
        <section className="wrapper style5">
          <div align="inner">
            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12">
                  <span className="image fit">
                    <img src={reactDiagram} alt="react props" />
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

export default Doodles
