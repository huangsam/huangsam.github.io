import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Not Found" />
      <h1>
        Landed on <code>/dev/null</code>
      </h1>
      <p>
        Please return back to the <Link to="/">home page</Link>.
      </p>
    </Layout>
  )
}
