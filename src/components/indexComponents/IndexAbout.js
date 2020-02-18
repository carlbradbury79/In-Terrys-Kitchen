import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledSection,
  StyledContainer,
  StyledButton,
  StyledImage,
} from "./IndexStyledSections"

const IndexAbout = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      placeholderImage: file(relativePath: { eq: "terry.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 400) {
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
      <StyledImage
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Terry"
      />

      <StyledButton to="/about" color="var(--terry-four)">
        Read More...
      </StyledButton>
    </StyledSection>
  )
}

export default IndexAbout
