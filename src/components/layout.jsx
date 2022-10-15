import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa"

import "./layout.css"

export default function Layout({ children }) {
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
    <div className="layout">
      <header>
        <Link to="/">{site.siteMetadata.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer>
        &copy; 2016-{new Date().getFullYear()} Made with{" "}
        <FaHeart style={{ verticalAlign: `text-top` }} /> by{" "}
        <a href="https://github.com/huangsam">huangsam</a>
      </footer>
    </div>
  )
}
