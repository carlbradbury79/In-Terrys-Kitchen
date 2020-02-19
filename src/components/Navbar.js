import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: none;

  .nav-active {
    color: gray;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  ul li {
    list-style: none;
    padding: 1rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--dark-color);
  }

  ul li a.active {
    color: var(--terry-four);
  }

  ul li a:hover {
    color: var(--terry-five);
    /* color: var(--terry-red-color); */
  }
`

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/classes" activeClassName="active">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/testimonials" activeClassName="active">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
