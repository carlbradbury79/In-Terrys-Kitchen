import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledSection,
  StyledContainer,
  StyledButton,
  StyledImage,
  ImageHack,
} from "./IndexStyledSections"

const IndexClasses = () => {
  const data = useStaticQuery(graphql`
    query myClassQuery {
      placeholderImage: file(relativePath: { eq: "pizza-making.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <StyledSection>
      <StyledContainer color="var(--terry-one)">
        <h2>Classes</h2>
        <p>
          My cooking classes reveal a passion and devotion to cooking, traveling
          and teaching and inspire students to utilize the vast array of local
          and seasonal ingredients available to them in the Bay Area, and also
          echo the influences of the colorful cultures and cuisines of the
          places I have cooked– Mediterranean France, Italy, Spain, Morocco and
          Mexico.
        </p>
      </StyledContainer>
      <ImageHack>
        <StyledImage
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Terry"
        />
      </ImageHack>
      <StyledButton color="var(--terry-one)" to="/classes">
        Read More...
      </StyledButton>
    </StyledSection>
  )
}

export default IndexClasses
