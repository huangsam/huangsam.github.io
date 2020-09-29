import React from "react"
import { FaHeart } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      &copy; 2016-{new Date().getFullYear()}&nbsp;
      Made with <FaHeart style={{verticalAlign: `text-top`}}/>&nbsp;
      by <a href="https://github.com/huangsam" style={{color: `black`}}>huangsam</a>
    </footer>
  )
}
