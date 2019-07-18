import React from "react"
import PropTypes from "prop-types"
// import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </div>
)

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
