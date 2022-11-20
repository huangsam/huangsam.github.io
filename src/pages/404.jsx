import React from "react"
import { Link } from "gatsby"

import SearchOptimizer from "../components/seo"

export default function NotFound() {
  return (
    <div>
      <SearchOptimizer title="Not Found" />
      <h1>
        Landed on <code>/dev/null</code>
      </h1>
      <p>
        Please return back to the <Link to="/">home page</Link>.
      </p>
    </div>
  )
}

export const Head = () => {
  return <SearchOptimizer title="NotFound" />
}
