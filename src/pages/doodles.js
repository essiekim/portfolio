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
          <div align="center">

          <img src={reactDiagram} alt="react props" width="1200px"/>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Doodles
