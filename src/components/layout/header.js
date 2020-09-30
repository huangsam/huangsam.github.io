import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Footer() {
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
      <Link to="/" style={{ color: `white` }}>
        {site.siteMetadata.title}
      </Link>
      <nav style={{ float: `right` }}>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
