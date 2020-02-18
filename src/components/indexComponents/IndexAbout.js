import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const About = styled.section`
  background: #f5e0dc;
  /* background: var(--terry-three); */
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

const AboutContainer = styled.div`
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

const AboutButton = styled(Link)`
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
  console.log(data)
  return (
    <About>
      <AboutContainer>
        <h2>About</h2>
        <p>
          Terry's Kitchen has a rich background spanning several decades of
          education and work through the States and Europe
        </p>
      </AboutContainer>
      <StyledImage
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Terry"
      />

      <AboutButton to="/about">Read More...</AboutButton>
    </About>
  )
}

export default IndexAbout
