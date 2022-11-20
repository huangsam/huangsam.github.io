/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitter
          }
        }
      }
    `
  )

  const defaultDescription = site.siteMetadata?.description || "My hidden notes"
  const defaultTitle = site.siteMetadata?.title || "My hidden lair"
  const defaultAuthor = site.siteMetadata?.author || "My hidden self"

  const displayDescription = description ? description : defaultDescription
  const displayTitle = title ? `${defaultTitle} | ${title}` : defaultTitle
  const displayAuthor = defaultAuthor

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={displayDescription} />
      <meta name="author" content={displayAuthor} />
      <meta name="og:title" content={displayTitle} />
      <meta name="og:description" content={displayDescription} />
      <meta name="og:type" content="website" />
      <title>{displayTitle}</title>
    </>
  )
}

export default SEO
