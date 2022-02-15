import React from 'react'
import Header from './Header.css'
import Nav from '../Nav/Nav.js'

function Header(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <Nav/>
    </div>
  )
}

export default Header
