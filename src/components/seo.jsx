/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function SearchOptimizer({ description, lang, meta, title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const defaultDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title

  const displayDescription = description ? description : defaultDescription
  const displayTitle = title ? `${defaultTitle} | ${title}` : defaultTitle

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={displayDescription} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="og:title" content={displayTitle} />
      <meta name="og:description" content={displayDescription} />
      <meta name="og:type" content="website" />
      <title>{displayTitle}</title>
    </>
  )
}

export default SearchOptimizer
