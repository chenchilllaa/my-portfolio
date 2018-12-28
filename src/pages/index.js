import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Jchen Design" keywords={[`jessica`, `chen`, `design`]} />
        <div>
          <div className="Hero">
            <div className="HeroGroup">
              <h1>Night Owl</h1>
              <p>Sleep is for the dead</p>
              <Link to="/page-2/">Fo' Shizzle</Link>
            </div>
          </div>
         
        </div>
  </Layout>
)

export default IndexPage
