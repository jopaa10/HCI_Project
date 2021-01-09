import React from 'react'

//components
import NavbarMenu from '../navbar/index'

const Header = (props) => {

  return (
    <>
  <header>
    <NavbarMenu 
      display={props.display}
      displayNews={props.displayNews}
    />

    </header>
    </>
    )
  }

export default Header


