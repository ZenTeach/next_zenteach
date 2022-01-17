import * as React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import NavBar from "./NavBar"
import Footer from './Footer'
import { initGA, logPageView } from '../utils/analytics'
export default class SiteLayout extends React.Component {
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}
		logPageView()
	}

	render() {
		return (
			<div className="bg-white lg:antialiased">
				<Head>
					<title>{this.props.title}</title>
					<meta property="og:title" content="My page title" key={this.props.title} />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content={this.props.description} />
        			<meta property="og:description" content={this.props.description} />
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

