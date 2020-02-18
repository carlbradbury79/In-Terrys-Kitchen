import React from "react"
import { Link } from "gatsby"

import "./OverlayMenu.css"

const OverlayMenu = props => {
  let overlayClass = "overlayMenu"
  if (props.show) {
    overlayClass = "overlayMenu open"
  }
  return (
    <nav className={overlayClass}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default OverlayMenu
