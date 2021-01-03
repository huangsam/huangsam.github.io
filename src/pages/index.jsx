import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaWordpress,
} from "react-icons/fa"

import SEO from "../components/seo"

const SOCIAL_COMPONENTS = {
  facebook: FaFacebookSquare,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitterSquare,
  wordpress: FaWordpress,
}

export default function Home({ data }) {
  const socialButtons = []
  for (const obj of data.site.siteMetadata.social) {
    socialButtons.push(
      React.createElement(
        "a",
        { key: obj.name, alt: obj.name, href: obj.url },
        React.createElement(SOCIAL_COMPONENTS[obj.name])
      )
    )
  }
  return (
    <div>
      <SEO title="Home" />
      <div
        style={{
          textAlign: `center`,
          margin: `0 auto`,
        }}
      >
        <h1>Sam Huang</h1>
        <p>Software Engineer at day. Artist at night.</p>
        <Img
          fixed={data.profileImg.childImageSharp.fixed}
          style={{
            marginBottom: `1.50rem`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
          imgStyle={{ borderRadius: `50%` }}
        />
        <div className="social">{socialButtons}</div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`
