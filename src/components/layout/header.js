import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <header>
      <Link to="/" style={{color: `white`}}>Sam's personal lair</Link>
      <nav style={{float: `right`}}>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
