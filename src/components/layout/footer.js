import React from 'react'

export default function Footer() {
  return (
    <footer style={{marginTop: `1.45rem`}}>
      <span>&copy; 2017-{new Date().getFullYear()}</span>
    </footer>
  )
}
