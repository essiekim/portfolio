import React from 'react'

import Layout from '../components/Layout'
import Experience from '../components/Experience'
import About from '../components/About'
import SectionList from '../components/SectionLIst'
import LandingPage from '../components/LandingPage'
import CTA from '../components/CTA'

const IndexPage = () => (
  <Layout>
    <LandingPage />
    <About id="one" />
    <SectionList id="two" />
    <Experience id="five" />
    <CTA />
  </Layout>
)

export default IndexPage
