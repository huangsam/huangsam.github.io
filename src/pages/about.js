import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Me</h1>
      <p>I graduated from <a href="https://www.ucdavis.edu/">UC Davis</a> with an emphasis in
        Computer Science and Engineering. I currently work as a Software Engineer at
        LinkedIn in Mountain View.</p>
      <p>My primary hobbies are drumming and photography. I also enjoy doing ping-pong,
        hiking, traveling and foosball occasionally.</p>
      <p>Currently, I go to two churches. The first one is in Daly City and it’s
        called <a href="http://glorious-light.net/">Glorious Light Christian Church</a>. The
        second one is in San Jose and it’s called <a href="https://echo.church">Echo Church</a>.</p>
      <p>My parents are an important component of my life. They are the ones who shaped my
        life into who I am today, and I am happy to be their only son.</p>
    </Layout>
  )
}
