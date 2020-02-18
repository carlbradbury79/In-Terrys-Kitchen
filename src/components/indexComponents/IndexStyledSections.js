import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const StyledSection = styled.section`
  background: #fff;
  padding: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border-top: 2px var(--terry-one) solid; */
  border-bottom: 2px var(--terry-one) solid;

  @media (max-width: 991px) and (min-width: 0) {
    padding: 1rem 1rem;
    flex-direction: column;
    text-align: center;
  }
`

export const StyledContainer = styled.div`
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
    color: ${props => props.color || "black"};
    font-size: 70px;
    margin: 1rem 0;
  }
`

export const StyledButton = styled(Link)`
  padding: 30px;
  /* background: #d5d95f; */
  /* border: 2px var(--terry-four) solid; */
  border-color: ${props => props.color || "black"};
  border-style: solid;
  border-width: 2px;
  /* color: var(--dark-color); */
  color: ${props => props.color || "black"};
  text-decoration: none;

  &:hover {
    color: #fff;
    background: ${props => props.color || "black"};
  }
`

export const StyledImage = styled(Img)`
  @media (max-width: 991px) and (min-width: 0) {
    width: 100%;
    margin: 20px;
  }
`
