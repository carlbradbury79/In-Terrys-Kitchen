import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexHero from "../components/indexComponents/IndexHero"
import IndexAbout from "../components/indexComponents/IndexAbout"
import IndexClasses from "../components/indexComponents/IndexClasses"

import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Fade bottom>
      <IndexHero />
      <IndexAbout />
      <IndexClasses />
    </Fade>
  </Layout>
)

export default IndexPage
