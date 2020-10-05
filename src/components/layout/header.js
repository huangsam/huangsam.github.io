import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Header() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <Link to="/">{site.siteMetadata.title}</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
