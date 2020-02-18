import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import Hamburger from "./navComponents/Hamburger"

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: sticky;
  font-family: "Open Sans";
  top: 0;
  background: #fff;
  z-index: 5;
  border-bottom: 2px var(--terry-five) solid;
  h1 {
    color: var(--dark-color);
    font-size: 1.4rem;
    letter-spacing: 2px;

    span {
      /* color: var(--secondary-green); */
    }
  }
`

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Header = ({ siteTitle, handleOverlayMenu, show }) => {
  const data = useStaticQuery(graphql`
    query myHeaderQuery {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log("header", data)
  return (
    <HeaderWrapper>
      <Logo to="/">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Logo" />
        <h1>
          In <span>Terry's</span> Kitchen
        </h1>
      </Logo>
      <Navbar />
      <Hamburger handleOverlayMenu={handleOverlayMenu} show={show} />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
