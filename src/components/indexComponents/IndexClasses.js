import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledSection,
  StyledContainer,
  StyledButton,
  StyledImage,
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
          fixed(width: 400) {
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
      <StyledImage
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Terry"
      />

      <StyledButton color="var(--terry-one)" to="/classes">
        Read More...
      </StyledButton>
    </StyledSection>
  )
}

export default IndexClasses
