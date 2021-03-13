import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html className="has-navbar-fixed-top" lang="en" />
        <title>Lending Hub</title>
        <meta
          name="description"
          content="Credit Cards | Loans | Mortgages | Insurance"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Lending Hub" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
        <LayoutContainer>{children}</LayoutContainer>
      <Subscribe />
      <Footer />
    </div>
  )
}

const LayoutContainer = styled.div`
  .heading-29 {
    font-size: 29px;
  }
  .buttons-container {
    display: flex;
    justify-content: space-between;
    .button-apply, .button-cancel {
      width: 100px;
    }
  }
`

export default TemplateWrapper
