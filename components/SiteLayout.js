import * as React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import NavBar from "./NavBar"
import Footer from './Footer'

export default class SiteLayout extends React.Component {
	render() {
		const GA_TRACKING_ID = process.env.GA_ANALYTICS;
		const gaScript = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
		return (
			<div className="bg-white lg:antialiased">
				<Head>
					<title>{this.props.title}</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<script async src={gaScript}></script>
					<script
						async
						dangerouslySetInnerHTML={{
							__html: `
									window.dataLayer = window.dataLayer || []
									function gtag(){
										dataLayer.push(arguments)
									}
									gtag('js', new Date())

									gtag('config', ${GA_TRACKING_ID}, {
										page_path: window.location.pathname,
									  })`
						}} />
				</Head>
				<div className="max-w-full sm:max-w-full mx-auto">
					<NavBar />
				</div>
				<div>{this.props.children}</div>
				<Footer />
			</div>
		);
	}
}

SiteLayout.defaultProps = {
	title: 'Zenteach',
}
SiteLayout.propTypes = {
	title:  PropTypes.string
}

