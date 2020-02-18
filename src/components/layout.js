/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Hamburger from "./navComponents/Hamburger"
import OverlayMenu from "./navComponents/OverlayMenu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  // let overlayMenu

  // if (menuOpen) {
  //   overlayMenu = <OverlayMenu />
  // }

  return (
    <>
      {/* <Hamburger handleOverlayMenu={handleOverlayMenu} /> */}
      {/* <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} /> */}
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleOverlayMenu={handleOverlayMenu}
        show={menuOpen}
      />
      <OverlayMenu show={menuOpen} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
