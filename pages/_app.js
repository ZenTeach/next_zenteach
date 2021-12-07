import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab,
				faLinkedin,
				faTwitter,
				faGithub,
				faMedium } from '@fortawesome/free-brands-svg-icons'
import { fas, faCheckCircle, faTimesCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

config.autoAddCss = false
library.add(fas, fab, faLinkedin, faTwitter, faGithub, faMedium, faTimesCircle, faSpinner, faCheckCircle)

export function reportWebVitals({ id, name, label, value }) {
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  })
}
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default MyApp
