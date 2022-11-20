import React from "react"

import SearchOptimizer from "../components/seo"

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I graduated from UC Davis with a bachelor's degree in Computer Science
        and Engineering. I currently work as a Software Engineer at LinkedIn
        under Flagship Infrastructure and Productivity.
      </p>
      <p>
        I actively play drums in a church setting and shoot family / event
        photos with Canon gear. I also have a passion for making open-source
        projects that empower developers in their career journey. I enjoy
        playing video games, ping-pong and foosball with friends.
      </p>
      <p>
        When I want to go outdoors, I prefer hiking trails and recreational
        parks. Occasionally, I travel outside of my comfort zone to experience
        new cultures. Here are the places I visited outside of California:
      </p>
      <ul>
        <li>US states: Oregon, Washington, Nevada, Wyoming, Ohio, Chicago</li>
        <li>Countries: Taiwan, Mexico, Japan, Korea, Italy</li>
      </ul>
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
        crafts and eating pastries.
      </p>
    </div>
  )
}

export const Head = () => {
  return <SearchOptimizer title="About" />
}
