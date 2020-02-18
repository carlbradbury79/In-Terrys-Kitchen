import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Classes = styled.section`
  background: var(--light-color);
  padding: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991px) and (min-width: 0) {
    padding: 64px 64px;
    flex-direction: column;
  }
`

const ClassesContainer = styled.div`
  color: var(--dark-color);
  padding: 1rem;
  margin: 1rem;
  width: 45%;

  @media (max-width: 991px) and (min-width: 0) {
    width: 100%;
  }

  p {
    line-height: 1.6;
    font-size: 1.2rem;
    color: var(--dark-color);
  }

  h2 {
    color: var(--dark-color);
    font-size: 70px;
    margin: 1rem 0;
  }
`

const ClassesButton = styled(Link)`
  padding: 30px;
  /* background: #d5d95f; */
  border: 2px var(--dark-color) solid;
  color: var(--dark-color);
  text-decoration: none;

  &:hover {
    color: #fff;
    background: var(--dark-color);
  }
`

const StyledImage = styled(Img)`
  @media (max-width: 991px) and (min-width: 0) {
    width: 100%;
    margin: 20px;
  }
`

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
    <Classes>
      <ClassesContainer>
        <h2>Classes</h2>
        <p>
          My cooking classes reveal a passion and devotion to cooking, traveling
          and teaching and inspire students to utilize the vast array of local
          and seasonal ingredients available to them in the Bay Area, and also
          echo the influences of the colorful cultures and cuisines of the
          places I have cooked– Mediterranean France, Italy, Spain, Morocco and
          Mexico.
        </p>
      </ClassesContainer>
      <StyledImage
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Terry"
      />

      <ClassesButton to="/classes">Read More...</ClassesButton>
    </Classes>
  )
}

export default IndexClasses
