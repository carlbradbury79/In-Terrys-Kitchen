import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import "./Hamburger.css"

const StyledBurger = styled(Burger)`
  display: none;

  @media (max-width: 991px) and (min-width: 0) {
    display: flex;
  }
`
//     height: 24px;
//     width: 30px;
//     background: transparent;
//     border: none;
//     flex-direction: column;
//     justify-content: space-around;
//     padding: 0;
//     box-sizing: border-box;
//     position: relative;
//   }

//   &:focus {
//     outline: none;
//   }

//   .hamburgerToggle {
//     width: 30px;
//     height: 2px;
//     background: #000;
//     /* position: absolute; */
//   }
// `

// const Hamburger = ({ handleOverlayMenu, show }) => {
//   return (
//     <HamburgerButton onClick={handleOverlayMenu}>
//       <div className="hamburgerToggle a"></div>
//       <div className="hamburgerToggle b"></div>
//       <div className="hamburgerToggle c"></div>
//     </HamburgerButton>
//   )
// }

const Hamburger = ({ handleOverlayMenu, show }) => {
  return <StyledBurger onClick={handleOverlayMenu} isOpen={show} />
}

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
}

export default Hamburger
