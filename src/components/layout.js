import React from 'react';
import Footer from './layout/footer'
import Header from './layout/header'
import NavBar from './layout/navbar'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  )
}
