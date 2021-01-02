import React from "react"

import Footer from "./layout/footer"
import Header from "./layout/header"

import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}
