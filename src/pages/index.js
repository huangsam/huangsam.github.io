import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaGithub,
  FaWordpress,
  FaLinkedin,
} from 'react-icons/fa';

const SOCIAL_COMPONENTS = {
  linkedin: FaLinkedin,
  twitter: FaTwitterSquare,
  github: FaGithub,
  facebook: FaFacebookSquare,
  wordpress: FaWordpress,
}

export default function Home({ data }) {
  const socialButtons = []
  for (const obj of data.site.siteMetadata.social) {
    socialButtons.push(React.createElement(
      'a',
      {key: obj.name, href: obj.url},
      React.createElement(SOCIAL_COMPONENTS[obj.name])));
  }
  return (
    <Layout>
      <div style={{
        textAlign: `center`,
        margin: `0 auto`,
      }}>
        <h1>Sam Huang</h1>
        <p>Software Engineer at day. Artist at night.</p>
        <div style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}>
          <Img
            fluid={data.profileImg.childImageSharp.fluid}
            imgStyle={{borderRadius: `50%`}}
          />
        </div>
        <div className="social">
          {socialButtons}
        </div>
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
    },
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`;
