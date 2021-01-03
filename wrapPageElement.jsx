import React from "react"

import Layout from "./src/components/layout"

/**
 * Helpful resources:
 * https://www.gatsbyjs.com/docs/how-to/routing/layout-components/
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export default wrapPageElement
