import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaWordpress,
} from "react-icons/fa"

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
        { key: obj.name, href: obj.url },
        React.createElement(SOCIAL_COMPONENTS[obj.name])
      )
    )
  }
  return (
    <Layout>
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
          fluid={data.profileImg.childImageSharp.fluid}
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
          imgStyle={{ borderRadius: `50%` }}
        />
        <div className="social">{socialButtons}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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
