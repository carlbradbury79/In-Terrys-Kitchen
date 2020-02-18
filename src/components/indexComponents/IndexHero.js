import React from "react"
import styled, { keyframes } from "styled-components"
import chicken from "../../images/chicken.jpg"
import { Link } from "gatsby"

const fade = keyframes`
  0% {
    opacity:0;
    transform: translateY(100px);
  }
  50% {
    opacity:0;
  }
  100% {
    opacity:1;
    transform: translateY(0px);
  }
`

const Hero = styled.div`
  /* height: 100vh; */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  /* height: 100vh; */
  position: relative;

  padding: 64px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    background: url(${chicken}) no-repeat center center/cover;
    /* background-attachment: fixed; */

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const Content = styled.div`
  font-family: "Open Sans";
  padding: 20px;
  font-size: 1.125 rem;
  color: var(--dark-color);
  /* color: var(#fff); */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 60px;
    color: #fff;
    /* border: 1px #242424 solid; */
    animation: ${fade} 1s ease-out;
  }
  h2 {
    color: #fff;
  }
`

const BookButton = styled(Link)`
  padding: 30px;
  /* background: #d5d95f; */
  border: 2px #fff solid;
  color: #fff;
  text-decoration: none;
  margin: 50px 0;

  &:hover {
    color: #fff;
    background: var(--terry-five);
  }
`

const IndexHero = () => {
  return (
    <Hero>
      <Content>
        <h1>Welcome to Terry's Kitchen</h1>

        <h2>Cooking Classes and Events hosted by Chef Terry Paetzold</h2>
        <BookButton to="/contact">Contact and Book</BookButton>
        {/* <p>
          Learn how to cook—try new recipes, learn from your mistakes, be
          fearless, and above all have fun! —Julia Child
        </p> */}
      </Content>
    </Hero>
  )
}

export default IndexHero
