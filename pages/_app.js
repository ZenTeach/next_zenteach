import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab,  faLinkedin, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(fab, faLinkedin, faTwitter, faGithub, faMedium)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default MyApp
