import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledSection,
  StyledContainer,
  StyledButton,
  StyledImage,
  ImageHack,
} from "./IndexStyledSections"

const IndexAbout = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      placeholderImage: file(relativePath: { eq: "terry.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <StyledContainer color="var(--terry-four)">
        <h2>About</h2>
        <p>
          My culinary passion and profession spans several decades of education
          and work, but was propelled when I went to the French countryside of
          the Loire Valley and the Poitou-Charente to study with the late Chef
          Robert Reynolds of Le Trou Restaurant in San Francisco.
        </p>
      </StyledContainer>
      <ImageHack>
        <StyledImage
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Terry"
        />
      </ImageHack>

      <StyledButton to="/about" color="var(--terry-four)">
        Read More...
      </StyledButton>
    </StyledSection>
  )
}

export default IndexAbout
