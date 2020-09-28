import React from 'react';
import Footer from './layout/footer'
import Header from './layout/header'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
