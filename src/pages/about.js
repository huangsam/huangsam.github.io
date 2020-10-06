import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Me</h1>
      <p>
        I graduated from <a href="https://www.ucdavis.edu/">UC Davis</a> with a
        bachelor's degree in Computer Science and Engineering. I currently work
        as a Software Engineer at <a href="https://linkedin.com">LinkedIn</a>,
        working in the Flagship Productivity Engineering organization.
      </p>
      <p>
        I actively play drums, shoot photos and work on open source projects in
        my free time. I occasionally play ping-pong, play foosball, walk on
        hiking trails and travel to new places.
      </p>
      <p>I currently attend two churches:</p>
      <ul>
        <li>
          <a href="http://glorious-light.net/">
            Glorious Light Christian Church
          </a>
        </li>
        <li>
          <a href="https://echo.church">Echo Church</a>
        </li>
      </ul>
      <p>
        My parents are an important part of my life. They shaped me into who I
        am today, and I am proud to be their son.
      </p>
      <p>
        I am blessed with a lovely wife who enjoys planting flowers, making
        crafts and eating cake.
      </p>
    </Layout>
  )
}
