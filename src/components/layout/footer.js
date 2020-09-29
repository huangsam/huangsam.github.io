import React from "react"
import { FaHeart } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      &copy; 2016-{new Date().getFullYear()} Made with{" "}
      <FaHeart style={{ verticalAlign: `text-top` }} /> by{" "}
      <a href="https://github.com/huangsam">
        huangsam
      </a>
    </footer>
  )
}
